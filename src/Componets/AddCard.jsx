import React, { useContext, useEffect } from "react";
import { CoffieContext } from "./CoffeContext";

export const AddCard = ({ product, setProducts }) => {
  console.log(product.price);
  const HandleClick = () => {
    setProducts((prev) =>
      prev.map((coffe) => {
        console.log(coffe.price);
        return coffe._id === product._id
          ? {
              ...coffe,
              quantity: coffe.quantity + 1,
              price: coffe.price,
            }
          : coffe;
      })
    );
  };

  const HandleClickB = () => {
    if (product.quantity > 1) {
      setProducts((prev) =>
        prev.map((coffe) => {
          return coffe._id === product._id
            ? {
                ...coffe,
                quantity: coffe.quantity - 1,
                price: coffe.price,
              }
            : coffe;
        })
      );
    } else {
      setProducts((prev) => prev.filter((coffe) => coffe._id !== product._id));
    }
    // if (product.quantity === 1) {
    //   setProducts((prev) => {
    //     prev.filter((coffe) => {
    //       return coffe._id == product._id;
    //     });
    //   });
    // }
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-9">
          <button onClick={HandleClickB}>-</button>
          <p>{product.quantity}</p>
          <button onClick={HandleClick}>+</button>
        </div>
        <div className="flex gap-1">
          <img src={product.img_url} width="60px" alt="" />
          <div>
            <h3>{product.brand}</h3>
            <p>Paquete de cafes 250gr</p>
          </div>
        </div>

        <div>
          <p>{(product.price * product.quantity).toFixed(2)} €</p>
        </div>
      </div>
      <hr />
    </>
  );
};
