import React from "react";

export const Button = ({ text, color, click }) => {
  console.log(color);
  return (
    <button className="bg-gray-600 px-3 py-3 rounded-md text-white border border-transparent">
      {text}
    </button>
  );
};
