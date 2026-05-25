import React, { useState } from "react";

const ProductDetail = ({ shoes, handleClosePrdDetail }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  return (
    <div onClick={handleClosePrdDetail} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-3xl min-h-75 grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-hidden"
      >
        <button onClick={handleClosePrdDetail} className="absolute top-3 right-3 cursor-pointer text-gray-400">
          <i className="fa-solid fa-xmark" />
        </button>
        <div className="flex items-center justify-center bg-gray-100 p-4">
          <img src={shoes.image} alt={shoes.name} className="w-75 h-75 object-cover" />
        </div>
        <div className="p-6 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-gray-800">{shoes.name.toUpperCase()}</h2>
            <p className="text-3xl font-extrabold text-[#105687]">${shoes.price}</p>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-600 text-sm">Size:</span>
              <div className="flex items-center gap-2">
                {shoes.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-xs font-medium border rounded-md transition-all cursor-pointer
                      ${
                        selectedSize === size
                          ? "border-[#105687] bg-[#105687]/10 text-[#105687] font-bold"
                          : "border-gray-200 text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 pb-4">{shoes.shortDescription}</p>
          </div>
          <div className="flex gap-3 mt-6 sm:mt-0">
            <button className="action-btn flex-1 px-6 py-3 font-semibold">
              + Thêm vào giỏ
            </button>
            <button
              onClick={handleClosePrdDetail}
              className="sub-btn px-6 py-3"
            >
              Huỷ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
