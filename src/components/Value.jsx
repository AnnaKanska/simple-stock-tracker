import React from "react";

const Value = ({ data }) => {
  console.log(data);
  const valueDisplay = data ? <div>{data.latestPrice}</div> : <p>no data</p>;
  return (
    <div>
      <h4>Value:</h4>
      {valueDisplay}
    </div>
  );
};

export default Value;
