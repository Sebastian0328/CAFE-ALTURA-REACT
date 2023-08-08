import React, { useContext } from "react";
import { CoffieContext } from "./CoffeContext";
import { CoffeCard } from "./CoffeCard";

export const CoffeeList = ({ size }) => {
  const { inventary } = useContext(CoffieContext);
  return (
    <div className="flex flex-wrap justify-center gap-10 p-10">
      {inventary.slice(0, size).map((product) => {
        return <CoffeCard coffee={product} />;
      })}
    </div>
  );
};
