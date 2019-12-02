import React from "react";

const Header = () => {
  function handleClick() {
    console.log("button clicked");
  }

  return (
    <div id="header">
      <select name="selector" id="symbol-selector">
        <option value="AAPL">AAPL</option>
        <option value="AMZN">AMZN</option>
        <option value="ECOR">ECOR</option>
        <option value="GOOGL">GOOGL</option>
      </select>
      <button onClick={handleClick}>ok</button>
    </div>
  );
};

export default Header;
