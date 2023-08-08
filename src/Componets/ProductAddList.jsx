import React, { useContext, useEffect } from "react";
import { CoffieContext } from "./CoffeContext";
import { AddCard } from "./AddCard";

export const ProductAddList = () => {
  const { products, setProducts, price, setPrice } = useContext(CoffieContext);

  return (
    <div className=" flex flex-col  p-10 gap-8">
      <h2>Productos</h2>
      {products?.map((product) => {
        return <AddCard product={product} setProducts={setProducts} />;
      })}
    </div>
  );
};
