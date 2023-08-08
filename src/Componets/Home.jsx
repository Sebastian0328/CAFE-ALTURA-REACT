import React from "react";
import { FirtsPage } from "./FirtsPage";
import { SectionCoffeeInfo } from "./SectionCoffeeInfo";
import { CoffeeNew } from "./CoffeeNew";
import { Questions } from "./Questions";
import { TestCoffe } from "./TestCoffe";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <FirtsPage />
      <SectionCoffeeInfo />
      <CoffeeNew />
      <Questions />
      <TestCoffe />
      <Contact />
      <Footer />
    </div>
  );
};
