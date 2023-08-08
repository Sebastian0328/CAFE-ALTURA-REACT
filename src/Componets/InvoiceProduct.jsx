import React, { useContext } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { CoffieContext } from "./CoffeContext";

export const InvoiceProduct = () => {
  const { info } = useContext(CoffieContext);

  return (
    <div class="flex flex-col p-6 gap-4 bg-[#F7F5F3]">
      <h3>Total del carrito</h3>
      <hr />
      <div className="flex justify-between">
        <p>SUBTOTAL</p>
        <p>{info.price},00 €</p>
      </div>
      <div className="flex justify-between">
        <p>ENVIO</p>
        <p>GRATIS</p>
      </div>
      <hr />
      <div>
        <p>TOTAL</p>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <Button text="Ir al checkout" />
        <Link to="/shop">
          <p>Seguir comprando</p>{" "}
        </Link>
      </div>
    </div>
  );
};
