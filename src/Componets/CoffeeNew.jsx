import React from "react";
import { CoffeeList } from "./CoffeeList";

export const CoffeeNew = () => {
  return (
    <article class="flex flex-col items-center py-10">
      <h2 className="text-green-950 text-2xl">Novedades</h2>
      <CoffeeList size={4} />
      <div class="flex underline gap-2">
        <p>
          <strong> Ver todos</strong>
        </p>
        <img src="src/assets/Icon (4).png" alt="flecha" />
      </div>
    </article>
  );
};
