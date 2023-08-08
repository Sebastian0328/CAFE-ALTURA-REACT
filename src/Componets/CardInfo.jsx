import React from "react";

export const CardInfo = ({ img, tittle, info }) => {
  return (
    <div class=" flex flex-col items-center w-80 justify-center p-6 gap-4 bg-white text-black text-center leading-4 rounded-lg ">
      <img src={img} alt="recibo" />
      <h3>{tittle}</h3>
      <p>{info}</p>
    </div>
  );
};
