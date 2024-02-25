import React from "react";
import { useContextMode } from "../context/GlobalContext";

const GastosIngresos = () => {
  const { transactions } = useContextMode();

  const amounts = transactions.map((item) => {
    return item.amount;
  });

  const ingresos = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const gastos = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <div className="flex justify-between my-2">
        <h4 >Ingresos: </h4>
        ${ingresos}
      </div>
      <div className="flex justify-between my-2">
        <h4>Gastos: </h4>
        ${-gastos}
      </div>
    </>
  );
};

export default GastosIngresos;
