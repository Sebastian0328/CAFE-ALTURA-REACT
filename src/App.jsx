import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./Componets/Nav";
import { Shop } from "./Componets/Shop";
import { Home } from "./Componets/Home";
import { CoffeContext } from "./Componets/CoffeContext";
import { ShoppingCart } from "./Componets/ShoppingCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <CoffeContext>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/buy" element={<ShoppingCart />} />
            </Route>
          </Routes>
        </CoffeContext>
      </BrowserRouter>
    </>
  );
}

export default App;
