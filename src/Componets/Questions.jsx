import React from "react";

export const Questions = () => {
  return (
    <article className="bg-green-900 flex flex-col items-center gap-10 px-72 py-12 ">
      <h2 className="text-white text-xl">Preguntas frecuentes </h2>
      <div class="flex flex-col gap-9 ">
        <div class="bg-white flex flex-col p-6 gap-4 rounded-xl">
          <div class="flex justify-between ">
            <h3>¿Cómo hago el pedido?</h3>
            <img src="src/assets/Icon (5).png" alt="" className="h-2" />
          </div>
          <hr />
          <p>
            Selecciona el café que desees probar y completa el proceso de
            compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te
            lo mandemos a casa y así nunca te quedarás sin café.
          </p>
        </div>
        <div class="bg-white flex flex-col p-6 gap-4 rounded-xl">
          <div class="flex justify-between">
            <h3>¿Por qué los precios son tan bajos?</h3>
            <img src="src/assets/Icon (5).png" alt="" className="h-2" />
          </div>
          <hr />
          <p>
            Viajamos constantemente para encontrar los mejores granos y a los
            agricultores más exigentes. Si podemos ofrecerte estos precios es
            porque tratamos directamente con los productores de café, sin
            intermediarios. Así obtenemos el mejor precio para ti y la persona
            que está detrás de los granos de café recibe el mayor beneficio
            posible.{" "}
          </p>
        </div>
        <div class="bg-white flex flex-col p-6 gap-4 rounded-xl">
          <div class="flex justify-between">
            <h3>¿Es posible enviar café a mi oficina? </h3>
            <img
              class="rotate"
              src="src/assets/Icon (5).png"
              alt=""
              className="h-2"
            />
          </div>
        </div>
        <div class="flex justify-center gap-2  ">
          <p className="text-white underline">Resolvemos tus dudas</p>
          <img src="src/assets/Icon (7).png" alt="flecha" className="h-3" />
        </div>
      </div>
    </article>
  );
};
