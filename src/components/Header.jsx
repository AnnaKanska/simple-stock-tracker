import React, { useState, useEffect } from "react";

// const {
//   price,
//   quantity,
//   currency
// } = {
//   quantity: 5,
//   currency: "EUR",
//   price: 32.12
// }

// const [
//   quantitylkmlgkareglk,
//   currency,
//   price
// ] = [5, "EUR", 32.12];

const Header = props => {
  const { onStockSelected } = props;
  const [selected, setSelected] = useState("AAPL");

  useEffect(() => {
    // console.log("effect", selected);

    return () => {
      // console.log("cleanup", selected);
    };
  }, [selected]);

  function handleChange(e) {
    setSelected(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onStockSelected(selected);
  }

  return (
    <>
      <form id="header" onSubmit={handleSubmit}>
        <select value={selected} onChange={handleChange} id="symbol-selector">
          <option value="AAPL">Apple</option>
          <option value="AMZN">Amazon</option>
          <option value="ECOR">Electro@%^</option>
          <option value="GOOGL">Google</option>
        </select>
        <button type="submit">ok</button>
      </form>
    </>
  );
};

export default Header;
