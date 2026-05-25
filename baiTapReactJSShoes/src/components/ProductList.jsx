import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data, handleOpenPrdDetail }) => {
  return (
    <div className="wrapper py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((shoes) => (
        <ProductItem key={shoes.id} shoes={shoes} openDetail={() => handleOpenPrdDetail(shoes)}/>
      ))}
    </div>
  );
};

export default ProductList;
