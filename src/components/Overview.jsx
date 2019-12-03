import React from "react";

const Overview = ({ data }) => {
  const overviewDisplay = data ? (
    <div>
      <h3>{data.companyName}</h3>
      <p>{data.website}</p>
      <p>{data.description}</p>
    </div>
  ) : (
    <p>no data</p>
  );
  return (
    <div>
      <h2>Company overview:</h2>
      {overviewDisplay}
    </div>
  );
};

export default Overview;
