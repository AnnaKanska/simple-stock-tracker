import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Value from "./components/Value";

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <Value />
      <Chart />
    </div>
  );
}

export default App;
