import React, { useContext } from "react";
import { CoffieContext } from "./CoffeContext";
import { ProductAddList } from "./ProductAddList";
import { Envio } from "./Envio";
import { InvoiceProduct } from "./InvoiceProduct";

export const ShoppingCart = () => {
  const { info } = useContext(CoffieContext);
  return (
    <>
      <section className="flex flex-col pt-10">
        <h2 className="flex justify-center">Cesta{`(${info?.number})`}</h2>
        <div className="flex">
          <div className="w-8/12">
            <ProductAddList />
            <Envio />
          </div>
          <div className="flex p-7 flex-col">
            <InvoiceProduct />
          </div>
        </div>
      </section>
      <div className="bg-[#2B2A2B] text-white text-center ">
        <p>Todos los derechos reservados - Café de Altura SL - 2022</p>
      </div>
    </>
  );
};
