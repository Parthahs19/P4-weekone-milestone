import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./sections.css";

const Investment = () => {
  const data = [
    { name: "Stocks", value: 50000 },
    { name: "Real Estate", value: 30000 },
    { name: "Mutual Funds", value: 20000 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="section-container">
      <h2>📈 Investments</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Investment Type</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((inv, index) => (
            <tr key={index}>
              <td>{inv.name}</td>
              <td>{inv.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Investment;
