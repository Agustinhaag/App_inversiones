import React from "react";
import { useContextMode } from "../../context/GlobalContext";

const TransactionCard = ({ item,  }) => {
    const { deleteTransaction } = useContextMode();
  return (
    <li className="bg-zinc-600 text-white px-2 py-1 rounded-lg mb-2 w-full flex justify-between items-center gap-x-2">
      <p className="text-sm">{item.description}</p>
    <div className="card">
    <span>${item.amount}</span>
      <button
      className="ml-2 border-solid border border-red-600 px-1 rounded-lg text-red-600 hover:bg-red-600 hover:text-white"
        onClick={() => {
          deleteTransaction(item.id);
        }}
      >
        X
      </button> 
    </div>
    </li>
  );
};

export default TransactionCard;
