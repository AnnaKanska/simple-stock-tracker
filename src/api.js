import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:5000");

function subscribeToOverview(symbol, cb) {
  //
  socket.emit("symbol", symbol, "1Y");
  // emit symbol
  const handleResponse = response => cb(response.data); // otherwise it's data.data.website
  socket.on("CompanyOverview", handleResponse); //handleresponse instead of cb

  return {
    unsubscribe: () => {
      socket.off("CompanyOverview", handleResponse);
    }
  };
}

function subscribeToStockData(symbol, cb) {
  socket.emit("symbol", symbol, "1Y");
  const handleResponse = response => cb(response.data);
  socket.on("StockData", handleResponse);
  return {
    unsubscribe: () => {
      socket.off("StockData", handleResponse);
    }
  };
}

export { subscribeToOverview, subscribeToStockData };
