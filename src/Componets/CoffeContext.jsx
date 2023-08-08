import React, { createContext, useEffect, useState } from "react";
export const CoffieContext = createContext();
export const CoffeContext = ({ children }) => {
  const [inventary, setInventary] = useState([]);
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState({
    price: 0,
    number: 0,
  });
  const getData = async () => {
    const response = await fetch(
      "https://cafe-de-altura.vercel.app/api/products"
    );
    const data = await response.json();
    setInventary([...data.products]);
  };
  //   console.log(inventary);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setInfo(
      products?.reduce(
        (acc, coffee) => {
          acc.price += coffee.price;
          acc.number += coffee.quantity;
          return acc;
        },
        { price: 0, number: 0 }
      )
    );
  }, [products]);

  return (
    <CoffieContext.Provider
      value={{
        info,
        setInfo,
        inventary,
        setInventary,
        products,
        setProducts,
      }}
    >
      {children}
    </CoffieContext.Provider>
  );
};
