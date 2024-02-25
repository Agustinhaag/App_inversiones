import React from "react";
import { useContextMode } from "../../context/GlobalContext";
import TransactionCard from "./TransactionCard";

const TransactionList = () => {
  const { transactions } = useContextMode();
  return (
    <div>
        <h3 className="text-slate-300 text-xl font-bold w-full ">Historial</h3>
     <ul>
     {transactions.map((item) => (
      <TransactionCard key={item.id} item={item} />
      ))}
     </ul>
    </div>
  );
};

export default TransactionList;
