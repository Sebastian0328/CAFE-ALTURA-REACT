import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const FirtsPage = () => {
  return (
    <article className="flex gap-6 px-12 py-10">
      <div className="flex flex-col justify-center gap-4">
        <div className="text-green-800  font-semibold text-18 leading-24">
          <p>De la planta a tu taza</p>
        </div>
        <div className="font-semibold text-6xl leading-44">
          <h1>El mejor cafe del mundo, ahora en tu casa</h1>
        </div>
        <div>
          <p>
            Trabajamos con agricultores de todo el mundo para seleccionar los
            mejores granos de cafe y puedas viajar desde la comodidad de tu
            hogar
          </p>
        </div>

        <div className="flex gap-3">
          <Button text={"Descubrir origenes"} />
          <Link to="./shop">
            <Button text={"Comprar cafe"} />
          </Link>
        </div>
      </div>
      <div className="w-9/12">
        <img src="/src/assets/Hero image.png" alt="foto de cafe" />
      </div>
    </article>
  );
};
