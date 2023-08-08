import React from "react";
import { CardInfo } from "./CardInfo";

export const SectionCoffeeInfo = () => {
  return (
    <article className="flex flex-col items-center py-14 gap-6 text-white bg-FondoCafe bg-center bg-cover ">
      <h2 className="text-2xl"> Cafe con las mejores condiciones</h2>
      <div className="flex px-36  gap-6 ">
        {/* <div class="recibos">
          <img src="src/assets/Illustration.png" alt="recibo" />
          <h3>Recibe tu pedido sin preocuparte</h3>
          <p>
            Tienes cosas más importantes en la cabeza, por eso con nuestra
            suscripción de café, nunca te quedarás sin tu taza de la mañana.{" "}
          </p>
        </div> */}
        <CardInfo
          img={"src/assets/Illustration.png"}
          tittle={"Recibe tu pedido sin preocuparte"}
          info={
            "Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana."
          }
        />
        <CardInfo
          img={"src/assets/Illustration (1).png"}
          tittle={"Envio en 24/48h"}
          info={
            "Pide tu café antes de las 12h y lo recibirás al día siguiente."
          }
        />
        <CardInfo
          img={"src/assets/Illustration (2).png"}
          tittle={"Descuentos y beneficios"}
          info={
            "Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros."
          }
        />
      </div>
    </article>
  );
};
