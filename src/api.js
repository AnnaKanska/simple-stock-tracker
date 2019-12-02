import React from "react";
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:5000");

function subscribeToOverview(stock, cb) {
  // emit symbol
  socket.on("CompanyOverview", cb);
}

export { subscribeToOverview };
