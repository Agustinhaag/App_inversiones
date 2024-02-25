import React from "react";
import { VictoryLabel, VictoryPie } from "victory";
import { useContextMode } from "../context/GlobalContext";

const ExpensePie = () => {
  const { transactions } = useContextMode();

  const ingresos = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, trans) => (acc += trans.amount), 0);

  const gastos =
    transactions
      .filter((item) => item.amount < 0)
      .reduce((acc, trans) => (acc += trans.amount), 0) * -1;

  let totalGastosPorcentaje = Math.round((gastos / ingresos) * 100);

  let totalIngresosPorcentaje = 100 - totalGastosPorcentaje;

 

    if(totalGastosPorcentaje > 100){
    totalGastosPorcentaje = 100
  }
  if( totalIngresosPorcentaje < 0){
    totalIngresosPorcentaje =0
  }else if(totalIngresosPorcentaje>100){
    totalIngresosPorcentaje = 100
  } else if(!totalIngresosPorcentaje ){
    totalIngresosPorcentaje = 0
  }

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Gastos", y: totalGastosPorcentaje || 0 },
        { x: "Ingresos", y: totalIngresosPorcentaje },
      ]}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
      animate={{ duration: 200 }}
      labels={({ datum }) => `${datum.y}%`}
    />
  );
};

export default ExpensePie;
