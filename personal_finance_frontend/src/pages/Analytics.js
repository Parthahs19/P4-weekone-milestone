import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./sections.css";

const data = [
  { name: "Jan", Expense: 2000, Income: 5000 },
  { name: "Feb", Expense: 2500, Income: 5500 },
  { name: "Mar", Expense: 3000, Income: 6000 },
];

const Analytics = () => {
  return (
    <div className="section-container">
      <h2>📊 Financial Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Expense" fill="red" />
          <Bar dataKey="Income" fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
