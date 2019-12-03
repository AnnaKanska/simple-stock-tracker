import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const Chart = ({ data }) => {
  const displayData = data ? data.length : "no data";
  console.log(displayData, data);
  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398
    },
    {
      name: "Page C",
      uv: 5000,
      pv: 9800
    }
  ];

  return (
    <AreaChart
      width={800}
      height={400}
      data={data1}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default Chart;
