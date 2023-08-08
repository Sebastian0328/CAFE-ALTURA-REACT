import React, { useContext, useEffect } from "react";
import { CoffieContext } from "./CoffeContext";

export const CoffeCard = ({ coffee }) => {
  const { products, setProducts, info, setInfo } = useContext(CoffieContext);
  const HandleClick = () => {
    setProducts((prev) => {
      const repeatCoffe = prev?.some((coffe) => coffe._id === coffee._id);
      if (repeatCoffe) {
        return prev?.map((coffe) => {
          return coffe._id === coffee._id
            ? {
                ...coffe,
                quantity: coffe.quantity + 1,
                price: coffee.price,
              }
            : coffe;
        });
      } else {
        return [...prev, { ...coffee, quantity: 1, price: coffee.price }];
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-6 px-8 py-6 border border-solid border-gray-300 rounded-lg transition bg-gray-100 hover:bg-gray-200 duration-200 ease-in-out">
      <img className="w-[219px]" src={coffee.img_url} alt="" />
      <h3>{coffee.brand}</h3>
      <div>
        <p>price: {coffee.price} €</p>
      </div>
      <button
        onClick={HandleClick}
        className="bg-green-900 text-white rounded p-1.5"
      >
        Añadir
      </button>
    </div>
  );
};
