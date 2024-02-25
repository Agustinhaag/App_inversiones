import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initState = {
  transactions: [],
};

const Context = createContext();

export const useContextMode = () => useContext(Context);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANS",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANS",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalProvider;
