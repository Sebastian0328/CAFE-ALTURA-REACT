import React from "react";
import { Button } from "./Button";

export const Questionnaire = () => {
  const [data, setData] = {};
  const HandleClick = (event) => {
    setData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <section className="bg-white flex flex-col gap-6 py-8 px-14">
      <form action=" ">
        <div class="flex flex-col ">
          <label for="name"> Nombre completo </label>
          <input
            className="border border-solid border-gray-300 rounded-md"
            type="text"
            id="name"
            value={data.name || ""}
            onChange={HandleClick}
          />
        </div>
        <div class="flex flex-col ">
          <label for="Email">Email</label>
          <input
            className="border border-solid border-gray-300 rounded-md"
            type="email"
            id="Email"
          />
        </div>
        <div class="flex flex-col ">
          <label for="telefono"> Teléfono</label>
          <div class="border border-solid border-gray-300 rounded-md">
            <select class="select" name="telefono" id="telefono">
              <option value="US">US</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
            <input
              class=""
              type="text"
              id="telefono"
              placeholder="+1 (555) 987-6543"
            />
          </div>
        </div>

        <textarea
          class="border border-solid border-gray-300 rounded-md"
          name="textarea"
          id="textarea"
          cols="30"
          rows="6"
          placeholder="¿En que puedo ayudarte?"
        ></textarea>
        <div class="checkbox">
          <input type="checkbox" id="mycheckbox" />
          <label for="mycheckbox">
            Acepto la <strong> Política de Privacidad</strong> y los{" "}
            <strong> Términos y condiciones.</strong>{" "}
          </label>
        </div>
        <div className="">
          <Button text={"Envíar"} />
        </div>
      </form>
    </section>
  );
};
