import React from "react";
import { useContextMode } from "../context/GlobalContext";

const Balance = () => {
  const { transactions } = useContextMode();
  const amounts = transactions.map((item) => {
    return item.amount;
  });
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="flex justify-between">
      <h3>Tu balance: </h3>
      <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  );
};

export default Balance;
