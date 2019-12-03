import React, { useState, useEffect } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Value from "./components/Value";
import {
  subscribeToOverview,
  subscribeToStockData,
  subscribeToChartData
} from "./api";

function App() {
  const [overviewData, setOverviewData] = useState();
  const [selectedSymbol, setSelectedSymbol] = useState();
  const [stockData, setStockData] = useState();
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (!selectedSymbol) {
      // guard
      return;
    }

    const overviewSubscription = subscribeToOverview(selectedSymbol, data =>
      setOverviewData(data)
    );
    const stockSubscription = subscribeToStockData(selectedSymbol, data =>
      setStockData(data)
    );
    const chartSubscription = subscribeToChartData(selectedSymbol, data =>
      setChartData(data)
    );

    return () => {
      overviewSubscription.unsubscribe();
      stockSubscription.unsubscribe();
      chartSubscription.unsubscribe();
    };
  }, [selectedSymbol]);

  const handleStockSelected = symbol => {
    setSelectedSymbol(symbol);
  };

  return (
    <div className="App">
      <Header onStockSelected={handleStockSelected} />
      <Overview data={overviewData} />
      <Value data={stockData} />
      <Chart data={chartData} />
    </div>
  );
}

export default App;
