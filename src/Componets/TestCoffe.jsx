import React from "react";

export const TestCoffe = () => {
  return (
    <article class="bg-[#F7F5F3] flex items-center py-11 px-10 gap-40">
      <div class="flex flex-col gap-4">
        <h3 className="text-2xl text-green-950 font-medium leading-7">
          Pruébalo en nuestro coffee shop
        </h3>
        <p>
          Visita nuestra cafetería en el centro de la ciudad para probar los
          granos de café antes de hacer tu pedido y llévate un descuento
        </p>
        <div class="flex gap-3 ">
          <p className="underline">
            <strong>Cómo llegar </strong>
          </p>
          <img src="src/assets/Icon (4).png" alt="flecha" />
        </div>
      </div>
      <img src="src/assets/Hero image (1).png" alt="tienda" />
    </article>
  );
};
