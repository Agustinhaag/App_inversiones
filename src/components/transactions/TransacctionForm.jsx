import React, { useState } from "react";
import { useContextMode } from "../../context/GlobalContext";
// import { useForm } from "react-hook-form";

const TransacctionForm = () => {
  // const {
  //   reset,
  // } = useForm();
  const { addTransaction } = useContextMode();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: parseFloat(amount),
    });
    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block my-2 w-full"
          type="text"
          value={description}
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={amount}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="number"
          name=""
          id=""
          placeholder="00.00"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Añadir
        </button>
      </form>
    </div>
  );
};

export default TransacctionForm;
