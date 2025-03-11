<<<<<<< HEAD
import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import { FaTrash } from "react-icons/fa";
import "../styles/sections.css";

const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C00"];

const initialData = [
  { id: 1, name: "Jan", Expense: 2000, Income: 5000 },
  { id: 2, name: "Feb", Expense: 2500, Income: 5500 },
  { id: 3, name: "Mar", Expense: 3000, Income: 6000 },
];

const Analytics = () => {
  const [data, setData] = useState(initialData);
  const [newEntry, setNewEntry] = useState({ name: "", Expense: "", Income: "" });

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const addData = () => {
    if (!newEntry.name || !newEntry.Expense || !newEntry.Income) return;

    setData([...data, { id: Date.now(), name: newEntry.name, Expense: Number(newEntry.Expense), Income: Number(newEntry.Income) }]);
    setNewEntry({ name: "", Expense: "", Income: "" });
  };

  const deleteData = (id) => {
    setData(data.filter((entry) => entry.id !== id));
  };

  const totalExpense = data.reduce((acc, curr) => acc + curr.Expense, 0);
  const totalIncome = data.reduce((acc, curr) => acc + curr.Income, 0);
  const expensePercentage = ((totalExpense / (totalIncome + totalExpense)) * 100).toFixed(2);
  const incomePercentage = ((totalIncome / (totalIncome + totalExpense)) * 100).toFixed(2);

  const pieData = [
    { name: "Total Expense", value: totalExpense },
    { name: "Total Income", value: totalIncome },
  ];

  return (
    <div className="section-container">
      <h2>📊 Financial Analytics</h2>

      {/* User Input Form */}
      <div className="analytics-form">
        <input type="text" name="name" placeholder="Month" value={newEntry.name} onChange={handleChange} />
        <input type="number" name="Expense" placeholder="Expense (₹)" value={newEntry.Expense} onChange={handleChange} />
        <input type="number" name="Income" placeholder="Income (₹)" value={newEntry.Income} onChange={handleChange} />
        <button className="primary-btn" onClick={addData}>Add Data</button>
      </div>

      <table className="analytics-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Expense (₹)</th>
            <th>Income (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.name}</td>
              <td>₹ {entry.Expense}</td>
              <td>₹ {entry.Income}</td>
              <td>
                <FaTrash className="delete-icon" onClick={() => deleteData(entry.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bar Chart */}
=======
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
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
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
<<<<<<< HEAD

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Expense" stroke="red" strokeWidth={2} />
          <Line type="monotone" dataKey="Income" stroke="green" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      {/* Pie Chart */}
      <div className="pie-chart-container">
        <PieChart width={400} height={300}>
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        <div className="summary">
          <p><b>Total Expense:</b> ₹{totalExpense} ({expensePercentage}%)</p>
          <p><b>Total Income:</b> ₹{totalIncome} ({incomePercentage}%)</p>
        </div>
      </div>

      {/* Data Table */}
      
=======
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
    </div>
  );
};

export default Analytics;
