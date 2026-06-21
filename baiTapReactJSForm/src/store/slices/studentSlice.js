import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentList: [
    {
      id: "001",
      name: "Nguyễn Văn A",
      dob: "2002-03-15",
      phone: "0323456789",
      email: "a.nguyen@example.com",
      gender: "Nam",
    },
    {
      id: "002",
      name: "Trần Thị B",
      dob: "2001-07-22",
      phone: "0523456789",
      email: "b.tran@example.com",
      gender: "Nữ",
    },
    {
      id: "003",
      name: "Lê Văn C",
      dob: "2003-11-05",
      phone: "0923456789",
      email: "c.le@example.com",
      gender: "Nam",
    },
  ],
  selectedStudent: null,
  // modal
  isDeleteModalOpen: false,
  deletedStudent: null,
  // search bar
  keyword: "",
  genderFilter: "",
  sortBy: "name",
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.studentList.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.studentList = state.studentList.filter((student) => student.id !== action.payload);
    },
    editStudent: (state, action) => {
      state.selectedStudent = action.payload;
    },
    updateStudent: (state, action) => {
      const index = state.studentList.findIndex((student) => student.id === action.payload.id);
      if (index !== -1) {
        state.studentList[index] = action.payload;
      }
    },
    clearSelectedStudent: (state) => {
      state.selectedStudent = null;
    },
    openDeleteModal: (state, action) => {
      state.isDeleteModalOpen = true;
      state.deletedStudent = action.payload;
    },
    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
      state.deletedStudent = null;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setGenderFilter: (state, action) => {
      state.genderFilter = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const {
  addStudent,
  deleteStudent,
  editStudent,
  updateStudent,
  clearSelectedStudent,
  openDeleteModal,
  closeDeleteModal,
  setKeyword,
  setGenderFilter,
  setSortBy,
} = studentSlice.actions;

export const selectorStudentList = (state) => state.student.studentList;
export const selectorSelectedStudent = (state) => state.student.selectedStudent;
export const selectorDeleteModal = (state) => state.student.isDeleteModalOpen;
export const selectorDeletedStudent = (state) => state.student.deletedStudent;
export const selectorKeyword = (state) => state.student.keyword;
export const selectorGenderFilter = (state) => state.student.genderFilter;
export const selectorSortBy = (state) => state.student.sortBy;

export default studentSlice.reducer;
