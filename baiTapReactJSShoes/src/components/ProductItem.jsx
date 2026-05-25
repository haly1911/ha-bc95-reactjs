import React from "react";

const ProductItem = ({ shoes, openDetail }) => {
  return (
    <div className="p-4 border rounded-md border-black/20 flex flex-col justify-between shadow-lg">
      <img src={shoes.image} alt={shoes.name} className="w-full h-auto object-cover"/>
      <h2 className="text-lg font-semibold">{shoes.name.toUpperCase()}</h2>
      <h3 className="py-3">${shoes.price}</h3>
      <div className="flex items-center justify-between">
        <button
        onClick={openDetail}
        className="action-btn px-3 py-1">Chi tiết sản phẩm</button>
        <button className="cursor-pointer">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
