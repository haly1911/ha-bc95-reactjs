import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editStudent,
  openDeleteModal,
  selectorDeleteModal,
  selectorGenderFilter,
  selectorKeyword,
  selectorSelectedStudent,
  selectorSortBy,
  selectorStudentList,
  setKeyword,
} from "../store/slices/studentSlice";

const StudentList = () => {
  const dispatch = useDispatch();
  const studentList = useSelector(selectorStudentList);
  const selectedStudent = useSelector(selectorSelectedStudent);
  const keyword = useSelector(selectorKeyword);
  const genderFilter = useSelector(selectorGenderFilter);
  const sortBy = useSelector(selectorSortBy);

  const removeVietnameseTones = (str) => {
    return str
      .normalize("NFD") // Tách các dấu tiếng Việt ra khỏi chữ cái gốc
      .replace(/[\u0300-\u036f]/g, "") // Xóa bỏ tất cả các ký tự dấu vừa tách
      .replace(/đ/g, "d") // Chuyển chữ đ thường thành d
      .replace(/Đ/g, "D"); // Chuyển chữ Đ hoa thành D
  };

  const processedStudents = studentList
    .filter((student) => {
      const cleanKeyword = keyword.trim().toLowerCase();
      if (!cleanKeyword) return true;

      const keywordNoTone = removeVietnameseTones(cleanKeyword);

      const studentName = removeVietnameseTones(student.name.toLowerCase());
      const studentId = student.id.toString();
      const studentEmail = student.email.toLowerCase();

      return (
        studentName.includes(keywordNoTone) || studentId.includes(cleanKeyword) || studentEmail.includes(cleanKeyword)
      );
    })
    .filter((student) => {
      if (genderFilter === "") return true;
      return student.gender === genderFilter;
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name, "vi", { sensitivity: "base" });
      }
      if (sortBy === "id") {
        return parseInt(a.id, 10) - parseInt(b.id, 10);
      }
      if (sortBy === "dob") {
        return new Date(a.dob) - new Date(b.dob);
      }
      return 0;
    });

  return (
    <div className="w-full">
      {/* 1. Giao diện dạng card cho Mobile */}
      <div className="block sm:hidden space-y-4">
        {processedStudents.length === 0 ? (
          <div className="text-center py-10 text-slate-400 bg-white rounded-lg border border-slate-100">
            Không có sinh viên
          </div>
        ) : (
          processedStudents.map((student) => (
            <div
              key={student.id}
              className={`p-4 rounded-lg border transition ${
                selectedStudent?.id === student.id
                  ? "bg-yellow-50 border-yellow-300"
                  : "bg-white border-slate-100 hover:border-slate-300"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                    ID: {student.id}
                  </span>
                  <h4 className="text-base font-bold text-slate-800 mt-1">{student.name}</h4>
                </div>
                <div className="flex gap-3 text-md">
                  <button onClick={() => dispatch(editStudent(student))} className="text-blue-600">
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button onClick={() => dispatch(openDeleteModal(student))} className="text-red-600">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-1 grid grid-cols-2 gap-2 pt-2 border-t border-slate-50">
                <div>
                  <span className="font-medium text-slate-400">Ngày sinh: </span>
                  {student.dob.split("-").reverse().join("/")}
                </div>
                <div>
                  <span className="font-medium text-slate-400">Giới tính: </span>
                  {student.gender}
                </div>
                <div className="col-span-2">
                  <span className="font-medium text-slate-400">SĐT: </span>
                  {student.phone}
                </div>
                <div className="col-span-2 truncate">
                  <span className="font-medium text-slate-400">Email: </span>
                  {student.email}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 2. Giao diện dạng table cho Tablet & Desktop */}
      <div className="hidden sm:block overflow-x-auto rounded-lg border border-slate-100">
        <table className="min-w-full text-sm leading-6">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="pl-4 py-4 text-left">ID</th>
              <th className="py-4 text-left">Tên</th>
              <th className="py-4 text-left">Ngày sinh</th>
              <th className="py-4 text-left hidden lg:table-cell">Số điện thoại</th>
              <th className="py-4 text-left">Email</th>
              <th className="py-4 text-left">Giới tính</th>
              <th className="py-4 text-center">Hành động</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {processedStudents.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-10 text-slate-400">
                  Không có sinh viên
                </td>
              </tr>
            ) : (
              processedStudents.map((student) => (
                <tr
                  key={student.id}
                  className={`transition ${selectedStudent?.id === student.id ? "bg-yellow-100" : "hover:bg-slate-50"}`}
                >
                  <td className="py-4 pl-4">{student.id}</td>
                  <td className="py-4 font-medium text-slate-900">{student.name}</td>
                  <td className="py-4">{student.dob.split("-").reverse().join("/")}</td>
                  <td className="py-4 hidden lg:table-cell">{student.phone}</td>
                  <td className="py-4 text-slate-600">{student.email}</td>
                  <td className="py-4">{student.gender}</td>
                  <td className="py-4 flex justify-center gap-4">
                    <button
                      onClick={() => dispatch(editStudent(student))}
                      className="text-blue-600 cursor-pointer hover:scale-110 transition"
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                    <button
                      onClick={() => dispatch(openDeleteModal(student))}
                      className="text-red-600 cursor-pointer hover:scale-110 transition"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
