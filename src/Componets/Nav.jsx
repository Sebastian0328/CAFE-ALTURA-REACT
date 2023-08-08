import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "./Button";
import { CoffieContext } from "./CoffeContext";
import { ProductAmout } from "./ProductAmout";

export const Nav = () => {
  const { number, setNumber, products, setProducts } =
    useContext(CoffieContext);
  return (
    <>
      <nav className="bg-[#2B2A2B] px-6  py-3 text-white flex  justify-between">
        <Link to="/">
          <div className="flex items-center gap-1">
            <img src=" /src/assets/logo.png" alt="" />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/shop">Tienda </Link>
          <a href="">Suscripcion</a>
          <a href="">Para empresas</a>
          <a href="">Sobre nosotros</a>
          <a href="">contacto</a>
        </div>
        <div className="flex items-center gap-10 ">
          <div className="flex gap-6 ">
            <div className="flex items-center gap-3">
              <img src="/src/assets/telefono.png" alt="" />
              <p>+34 919 49 05 18</p>
            </div>
            <Button text={"Iniciar sesíon"} color={"bg-gray-300"} />
          </div>
          <Link to="/buy">
            <div className="flex gap-4 items-center flex-row">
              <img
                src="/src/assets/Group.png"
                alt="compra"
                className="h-6 w-6"
              />
              <ProductAmout />
            </div>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
