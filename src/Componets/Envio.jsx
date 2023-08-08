import React from "react";

export const Envio = () => {
  return (
    <section className="flex flex-col px-7">
      <h2>Seleccionár envió</h2>
      <div class="flex flex-col gap-5 py-4">
        <div class="flex justify-between">
          <div class="flex items-center gap-3">
            <div>
              <input type="checkbox" class="checkbox" />
              <label for="miCheckbox"></label>
            </div>

            <div>
              <p>Envío 5-7 días</p>
              <p>Opción estándar sin seguimiento</p>
            </div>
          </div>

          <h3>GRATIS</h3>
        </div>
        <hr />
        <div class="flex justify-between">
          <div class="flex items-center gap-3">
            <div>
              <input type="checkbox" class="checkbox" />
              <label for="miCheckbox"></label>
            </div>
            <div>
              <p>Envio urgente 24h</p>
              <p>
                recibe tu pedido enlas siguientes 24h(Para pedidos realizados
                antes de las 13:00)
              </p>
            </div>
          </div>
          <h3>9,00€</h3>
        </div>
      </div>
    </section>
  );
};
