import React, { useState } from "react";
import "../styles/sections.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Income = () => {
  const [incomes, setIncomes] = useState([
    { id: 1, source: "Salary", amount: 50000, category: "Job", date: "2025-02-01" },
    { id: 2, source: "Freelance Project", amount: 12000, category: "Freelance", date: "2025-02-15" },
    { id: 3, source: "Stock Dividends", amount: 5000, category: "Investment", date: "2025-02-20" },
  ]);

  const [newIncome, setNewIncome] = useState({ source: "", amount: "", category: "", date: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setNewIncome({ ...newIncome, [e.target.name]: e.target.value });
  };

  const addIncome = () => {
    if (!newIncome.source || !newIncome.amount || !newIncome.category || !newIncome.date) return;

    if (editingId !== null) {
      setIncomes(incomes.map((inc) => (inc.id === editingId ? { ...newIncome, id: editingId } : inc)));
      setEditingId(null);
    } else {
      setIncomes([...incomes, { ...newIncome, id: Date.now() }]);
    }

    setNewIncome({ source: "", amount: "", category: "", date: "" });
  };

  const editIncome = (id) => {
    const incomeToEdit = incomes.find((inc) => inc.id === id);
    setNewIncome(incomeToEdit);
    setEditingId(id);
  };

  const deleteIncome = (id) => {
    setIncomes(incomes.filter((inc) => inc.id !== id));
  };

  return (
    <div className="income-container">
      <h2>💵 Income Tracker</h2>

      {/* Income Form */}
      <div className="income-form">
        <input type="text" name="source" placeholder="Income Source" value={newIncome.source} onChange={handleChange} />
        <input type="number" name="amount" placeholder="Amount" value={newIncome.amount} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={newIncome.category} onChange={handleChange} />
        <input type="date" name="date" value={newIncome.date} onChange={handleChange} />
        <button onClick={addIncome}>{editingId ? "Update Income" : "Add Income"}</button>
      </div>

      {/* Income Table */}
      <table className="income-table">
        <thead>
          <tr>
            <th>Source</th>
            <th>Amount (₹)</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {incomes.length > 0 ? (
            incomes.map((income) => (
              <tr key={income.id}>
                <td>{income.source}</td>
                <td>₹ {income.amount}</td>
                <td>{income.category}</td>
                <td>{income.date}</td>
                <td>
                  <FaEdit className="edit-icon" onClick={() => editIncome(income.id)} />
                  <FaTrash className="delete-icon" onClick={() => deleteIncome(income.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No income sources added yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Income;
