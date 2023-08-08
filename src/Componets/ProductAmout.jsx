import React, { useContext } from "react";
import { CoffieContext } from "./CoffeContext";

export const ProductAmout = () => {
  const { info } = useContext(CoffieContext);
  if (info?.number === 0) return null;
  return (
    <div className="rounded-full w-200 h-200 bg-gray-500 p-2  ">
      {info?.number}
    </div>
  );
};
