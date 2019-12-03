import React, { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState("AAPL");

  console.log(selected);

  function handleChange(e) {
    setSelected(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(selected);
  }

  return (
    <>
      <form id="header" onSubmit={handleSubmit}>
        <select value={selected} onChange={handleChange} id="symbol-selector">
          <option value="AAPL">AAPL</option>
          <option value="AMZN">AMZN</option>
          <option value="ECOR">ECOR</option>
          <option value="GOOGL">GOOGL</option>
        </select>
        <button type="submit">ok</button>
      </form>
    </>
  );
};

export default Header;
