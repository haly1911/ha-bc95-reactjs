import React from "react";

const GlassesList = (props) => {
  const { data, handleSetGlasses } = props;
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 justify-items-center">
      {data.map((glasses) => (
        <button
          key={glasses.id}
          type="button"
          onClick={() => handleSetGlasses(glasses)}
          className="card bg-white cursor-pointer w-20 h-20 shadow-2xl/70"
        >
          <img src={glasses.fullImg} alt={glasses.name} className="w-4/5" />
        </button>
      ))}
    </div>
  );
};

export default GlassesList;
