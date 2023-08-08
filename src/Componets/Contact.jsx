import React from "react";
import { Questionnaire } from "./Questionnaire";

export const Contact = () => {
  return (
    <article class="flex justify-around bg-[#E3DED7] gap-8">
      <div class="flex flex-col bg-[#E3DED7] gap-6 py-28">
        <div class="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">
            Entra en contacto con nosotros
          </h3>
          <p className="text-sm">
            Si tienes dudas, ponte en contacto con nosotros a través del
            formulario y te responderemos lo antes posible.
          </p>
        </div>
        <div class="flex flex-col gap-6">
          <p className="text-sm">
            También puedes ponerte en contacto con nostros en nuestra dirección
            o a través del teléfono de la tienda.
          </p>
          <div class="D-1">
            <p className="text-sm">742 Evergreen Terrace</p>
            <p className="text-sm">Springfield, OR 12345</p>
          </div>
        </div>
        <div class="D-4">
          <div class="flex gap-4">
            <img src="src/assets/telefonoooo.png" alt="telefono" />
            <p>+1 (555) 123-4567</p>
          </div>
          <div class="flex gap-4">
            <img src="src/assets/Mail@2x.png" alt="Sobre" width="24px" />
            <p>support@example.com</p>
          </div>
        </div>

        <p>
          ¿Buscas un trabajo?
          <a class="underline" href="">
            Ver nuestras ofertas.
          </a>{" "}
        </p>
      </div>
      <Questionnaire />
    </article>
  );
};
