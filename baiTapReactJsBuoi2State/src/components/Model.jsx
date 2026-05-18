import React from "react";

const Model = (props) => {
  const { item } = props;
  return (
    <div className="relative w-75">
      <img src="model.jpg" alt="model" className="w-full rounded-xl" />
      <img src={item.url} alt={item.name} className="absolute top-[20%] left-0 w-full scale-55" />
    </div>
  );
};

export default Model;
