import { data } from "autoprefixer";
import React, { useContext, useEffect } from "react";
import { CoffeContext, CoffieContext } from "./CoffeContext";
import { CoffeeList } from "./CoffeeList";
import { SectionCoffeeInfo } from "./SectionCoffeeInfo";
import { Footer } from "./Footer";

export const Shop = () => {
  const { info, setInfo } = useContext(CoffieContext);
  return (
    <>
      <section className="flex flex-col items-center pt-6">
        <h2 className="text-green-950">Últimos orígenes</h2>
        <div>
          <CoffeeList size={8} />
        </div>
      </section>
      <SectionCoffeeInfo />
      <Footer />
    </>
  );
};
