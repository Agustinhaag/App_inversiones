
import { useContextMode } from "../../context/GlobalContext";
import { useForm } from "react-hook-form";

const TransacctionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { addTransaction } = useContextMode();


  const submit = (e) => {
   
    addTransaction({
      id: window.crypto.randomUUID(),
      description: e.description,
      amount: parseFloat(e.amount),
    });
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} id="form">
        <input
          className={` bg-zinc-600 text-white px-3 py-2 rounded-lg block my-2 w-full outline-none ${
            errors.description ? "border-red-600 border border-x-2 mb-0" : ""
          }`}
          type="text"
          
          placeholder="Descripción"
          name="description"
          {...register("description", {
            required: "La descripción es requerida",
          })}
        />
        {errors.description && (
          <small className="text-red-600">{errors.description.message}</small>
        )}
        <input
          
          className={` bg-zinc-600 text-white px-3 py-2 rounded-lg block my-2 w-full outline-none ${
            errors.amount ? "border-red-600 border border-x-2 mb-0" : ""
          }`}
          type="number"
          name="amount"
          id=""
          placeholder="00.00"
          step="0.01"
          {...register("amount", {
            required: "El monto es requerido",
          })}
        />
        {errors.amount && (
          <small className="text-red-600">{errors.amount.message}</small>
        )}
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Añadir
        </button>
      </form>
    </div>
  );
};

export default TransacctionForm;
