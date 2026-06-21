import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDeleteModal,
  deleteStudent,
  selectorDeleteModal,
  selectorDeletedStudent,
} from "../store/slices/studentSlice";
import { toast } from "react-toastify";

const PopupModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectorDeleteModal);
  const deletedStudent = useSelector(selectorDeletedStudent);

  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Xác nhận xoá</h3>
          <p className="text-sm text-slate-600 mb-5">
            Bạn có chắc muốn xoá sinh viên <strong>{deletedStudent?.name}</strong> không?
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => dispatch(closeDeleteModal())}
              className="modal-btn bg-slate-100 hover:bg-slate-200"
            >
              Huỷ
            </button>
            <button
              onClick={() => {
                dispatch(deleteStudent(deletedStudent.id));
                dispatch(closeDeleteModal());
                toast.error(` Đã xoá sinh viên ${deletedStudent?.name}!`);
              }}
              className="modal-btn bg-red-500 hover:bg-red-600 text-white"
            >
              Xoá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
