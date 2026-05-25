import React from "react";

const ProductModal = ({ data }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-3xl min-h-75 grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-hidden">
        {/* Bên trái: Ảnh */}
        <div className="flex items-center justify-center bg-gray-50 p-4">
          <img
            src="https://apistore.cybersoft.edu.vn/images/van-old-school.png"
            alt="vans old school"
            className="w-75 h-75 object-cover"
          />
        </div>

        {/* Bên phải: Thông tin (Đã sửa để dàn đều từ trên xuống dưới) */}
        <div className="p-6 relative flex flex-col justify-between h-full">
          {/* Nút X */}
          <button className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer shadow-sm">
            <i className="fa-solid fa-xmark" />
          </button>

          {/* Cụm thông tin trên */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-gray-800">"vans old school"</h2>
            <p className="text-3xl font-extrabold text-[#105687]">$350</p>
            <div>
              <span className="font-semibold text-gray-600">Size:</span>
            </div>
          </div>

          {/* Cụm nút dưới đáy */}
          <div className="flex gap-3 mt-6 sm:mt-0">
            <button className="flex-1 px-6 py-3 cursor-pointer border rounded-xl bg-[#709AB7] text-sm text-white hover:scale-105 duration-200 font-semibold">
              + Thêm vào giỏ
            </button>
            <button className="px-6 py-3 cursor-pointer border border-[#709AB7] rounded-xl text-sm hover:scale-105 duration-200 text-gray-700">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
