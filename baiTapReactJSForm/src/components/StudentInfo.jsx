import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  clearSelectedStudent,
  selectorSelectedStudent,
  selectorStudentList,
  updateStudent,
} from "../store/slices/studentSlice";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const StudentInfo = () => {
  const dispatch = useDispatch();
  const selectedStudent = useSelector(selectorSelectedStudent);
  const studentList = useSelector(selectorStudentList);

  const validationSchema = Yup.object({
    id: Yup.string()
      .required("ID không được để trống")
      .matches(/^\d{3,}$/, "ID phải là số và có ít nhất 3 chữ số")
      .test("duplicate-id", "ID này đã tồn tại trong hệ thống", function (value) {
        if (selectedStudent) return true;
        return !studentList.some((student) => student.id === value);
      }),
    name: Yup.string()
      .required("Họ tên không được để trống")
      .matches(/^[\p{L}\s]+$/u, "Họ tên không hợp lệ"),
    dob: Yup.date().required("Ngày sinh không được để trống").max(new Date(), "Ngày sinh không hợp lệ"),
    phone: Yup.string()
      .required("Số điện thoại không được để trống")
      .matches(/^(03|05|07|08|09)\d{8}$/, "Số điện thoại phải đúng 10 chữ số (bắt đầu bằng 03, 05, 07, 08, 09)"),
    email: Yup.string().required("Email không được để trống").email("Email không đúng định dạng"),
    gender: Yup.string().required("Vui lòng chọn giới tính"),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      dob: "",
      phone: "",
      email: "",
      gender: "Nam",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (selectedStudent) {
        dispatch(updateStudent(values));
        toast.success(`Cập nhật sinh viên ${values.name} thành công!`);
      } else {
        dispatch(addStudent(values));
        toast.success(`Thêm sinh viên ${values.name} thành công!`);
      }
      resetForm();
      dispatch(clearSelectedStudent());
    },
  });

  useEffect(() => {
    if (selectedStudent) {
      formik.setValues(selectedStudent);
    } else {
      formik.resetForm();
    }
  }, [selectedStudent]);

  const handleCancel = () => {
    formik.resetForm();
    dispatch(clearSelectedStudent());
  };

  const getInputClass = (fieldName) => {
    const baseClass = "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
    return formik.touched[fieldName] && formik.errors[fieldName]
      ? `${baseClass} border-red-500 focus:ring-red-200`
      : `${baseClass} border-slate-300`;
  };

  return (
    <aside className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6 sticky top-6">
        <h2 className="text-xl font-semibold mb-6">{selectedStudent ? "Cập nhật sinh viên" : "Thêm sinh viên mới"}</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="form-label">ID</label>
            <input
              name="id"
              type="text"
              placeholder="001"
              disabled={!!selectedStudent}
              className={`form-input ${getInputClass("id")} ${selectedStudent ? "bg-slate-100 cursor-not-allowed" : ""}`}
              {...formik.getFieldProps("id")}
            />
            {formik.touched.id && formik.errors.id && (
              <span className="form-error">{formik.errors.id}</span>
            )}
          </div>
          <div>
            <label className="form-label">Tên</label>
            <input
              name="name"
              type="text"
              placeholder="Nguyễn Văn A"
              className={`form-input ${getInputClass("name")}`}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <span className="form-error">{formik.errors.name}</span>
            )}
          </div>
          <div>
            <label className="form-label">Ngày sinh</label>
            <input
              name="dob"
              type="date"
              className={`form-input ${getInputClass("dob")}`}
              {...formik.getFieldProps("dob")}
            />
            {formik.touched.dob && formik.errors.dob && (
              <span className="form-error">{formik.errors.dob}</span>
            )}
          </div>
          <div>
            <label className="form-label">Số điện thoại</label>
            <input
              name="phone"
              type="text"
              placeholder="0123456789"
              className={`form-input ${getInputClass("phone")}`}
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone && (
              <span className="form-error">{formik.errors.phone}</span>
            )}
          </div>
          <div>
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
              className={`form-input ${getInputClass("email")}`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="form-error">{formik.errors.email}</span>
            )}
          </div>
          <div>
            <label className="form-label">Giới tính</label>
            <select
              name="gender"
              className="form-input cursor-pointer"
              {...formik.getFieldProps("gender")}
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer"
            >
              {selectedStudent ? "Cập nhật thông tin" : "Thêm sinh viên"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 cursor-pointer"
            >
              Huỷ
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
};

export default StudentInfo;
