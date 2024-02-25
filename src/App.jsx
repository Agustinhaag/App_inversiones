import "./App.css";
import Balance from "./components/Balance";
import ExpensePie from "./components/ExpensePie";
import GastosIngresos from "./components/GastosIngresos";
import Header from "./components/Header";
import TransacctionForm from "./components/transactions/TransacctionForm";
import TransactionList from "./components/transactions/transactionList";


import GlobalProvider from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-full flex justify-center items-center py-2 min-h-screen">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 rounded-lg p-10 flex gap-x-2">
            <div>
              <h1 className="text-3xl font-bold">Manejador de gastos</h1>
              <GastosIngresos />
              <Balance />
              <TransacctionForm />
            </div>
            <div className="flex flex-col">
              <ExpensePie />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
