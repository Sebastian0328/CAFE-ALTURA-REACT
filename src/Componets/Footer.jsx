import React from "react";

export const Footer = () => {
  return (
    <>
      <footer class="bg-black text-white flex  p-7 flex-col px-6">
        <div class="flex gap-2">
          <img src="src/assets/logo.png" alt="" />
        </div>

        <section class="flex gap-80  ">
          <div class="flex flex-col gap-4">
            <div class="flex justify-start">
              <h3>Te ayudamos en</h3>
            </div>
            <div class="flex justify-center bg-gray-700 p-4 gap-4 rounded-md">
              <img src="src/assets/telefono.png" alt="telefono" />
              <p>+34 919 49 05 18</p>
            </div>
            <div class="flex justify-center bg-gray-700 p-4 gap-2 md:gap-11 rounded-md">
              <img src="src/assets/Icon (8).png" alt="" />
              <p>hola@cafedealtura.com</p>
            </div>
          </div>
          <div className="flex gap-28">
            <div className="flex flex-col justify-start items-start font-outfit font-semibold text-base leading-6 gap-4">
              <p>Tienda</p>
              <p>Suscripción</p>
              <p>Para empresas</p>
              <p>Sobre nosotros</p>
              <p>Contacto </p>
            </div>
            <div className="flex flex-col  justify-start items-start font-outfit font-semibold text-base leading-6 gap-4">
              <p>Política de privacidad</p>
              <p>Política de cookies</p>
              <p>Términos y condiciones</p>
            </div>
          </div>
        </section>
      </footer>
      <div className="bg-[#2B2A2B] text-white text-center ">
        <p>Todos los derechos reservados - Café de Altura SL - 2022</p>
      </div>
    </>
  );
};
