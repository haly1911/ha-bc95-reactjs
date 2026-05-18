import React from "react";

const GlassesDetail = (props) => {
  const { item } = props;
  if (!item) return null;
  return (
    <div className="card w-75 h-92 flex-col bg-black/60 p-6">
      <div className="card w-50 h-50 bg-white">
        <img src={item.fullImg} alt={item.name} className="w-3/4 object-cover" />
      </div>
      <div className="pt-6 text-white">
        <h3 className="text-xl font-semibold pb-2">
          {item.name} - ${item.price}
        </h3>
        <p className="font-thin">{item.desc}</p>
      </div>
    </div>
  );
};

export default GlassesDetail;
