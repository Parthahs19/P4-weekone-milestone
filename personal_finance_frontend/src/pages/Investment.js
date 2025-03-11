import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
<<<<<<< HEAD
import { FaTrash } from "react-icons/fa";
import "../styles/sections.css";

const Investment = () => {
  const [investments, setInvestments] = useState([
    { id: 1, name: "Stocks", value: 50000 },
    { id: 2, name: "Real Estate", value: 30000 },
    { id: 3, name: "Mutual Funds", value: 20000 },
  ]);

  const [newInvestment, setNewInvestment] = useState({ name: "", value: "" });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28AFF"];

  const handleChange = (e) => {
    setNewInvestment({ ...newInvestment, [e.target.name]: e.target.value });
  };

  const addInvestment = () => {
    if (!newInvestment.name || !newInvestment.value) return;

    setInvestments([...investments, { id: Date.now(), ...newInvestment, value: Number(newInvestment.value) }]);
    setNewInvestment({ name: "", value: "" });
  };

  const deleteInvestment = (id) => {
    setInvestments(investments.filter((inv) => inv.id !== id));
  };
=======
import "./sections.css";

const Investment = () => {
  const data = [
    { name: "Stocks", value: 50000 },
    { name: "Real Estate", value: 30000 },
    { name: "Mutual Funds", value: 20000 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80

  return (
    <div className="section-container">
      <h2>📈 Investments</h2>
<<<<<<< HEAD

      {/* Investment Form */}
      <div className="investment-form">
        <input type="text" name="name" placeholder="Investment Type" value={newInvestment.name} onChange={handleChange} />
        <input type="number" name="value" placeholder="Amount (₹)" value={newInvestment.value} onChange={handleChange} />
        <button className="primary-btn" onClick={addInvestment}>Add Investment</button>
      </div>

      {/* Investment Table */}
=======
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Investment Type</th>
            <th>Amount (₹)</th>
<<<<<<< HEAD
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {investments.length > 0 ? (
            investments.map((inv, index) => (
              <tr key={inv.id}>
                <td>{inv.name}</td>
                <td>₹ {inv.value}</td>
                <td>
                  <FaTrash className="delete-icon" onClick={() => deleteInvestment(inv.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No investments added yet</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pie Chart */}
      {investments.length > 0 && (
        <PieChart width={400} height={400}>
          <Pie data={investments} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8">
            {investments.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
=======
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
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
    </div>
  );
};

export default Investment;
