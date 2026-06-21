import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorGenderFilter,
  selectorKeyword,
  selectorSortBy,
  setGenderFilter,
  setKeyword,
  setSortBy,
} from "../store/slices/studentSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const keyword = useSelector(selectorKeyword);
  const genderFilter = useSelector(selectorGenderFilter);
  const sortBy = useSelector(selectorSortBy);

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4">
      <div className="flex-1 relative">
        <input
          type="text"
          value={keyword}
          onChange={(e) => dispatch(setKeyword(e.target.value))}
          placeholder="Tìm theo tên, ID hoặc email..."
          className="searchbar-btn"
        />
        {keyword && (
          <button
            onClick={() => dispatch(setKeyword(""))}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
      </div>
      <select
        value={genderFilter}
        onChange={(e) => dispatch(setGenderFilter(e.target.value))}
        className="searchbar-btn sm:w-auto cursor-pointer"
      >
        <option value="">Giới tính</option>
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
        <option value="Khác">Khác</option>
      </select>
      <select
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
        className="searchbar-btn sm:w-auto cursor-pointer"
      >
        <option value="name">Sắp xếp theo tên</option>
        <option value="id">Sắp xếp theo ID</option>
        <option value="dob">Sắp xếp theo ngày sinh</option>
      </select>
    </div>
  );
};

export default SearchBar;
