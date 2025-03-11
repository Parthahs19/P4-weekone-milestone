import React, { useState } from "react";
import "../styles/sections.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Expense = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Groceries", amount: 2500, category: "Food", date: "2025-02-22" },
    { id: 2, name: "Rent", amount: 15000, category: "Housing", date: "2025-02-01" },
    { id: 3, name: "Electricity Bill", amount: 1200, category: "Utilities", date: "2025-02-15" },
  ]);

  const [newExpense, setNewExpense] = useState({ name: "", amount: "", category: "", date: "" });
  const [editingId, setEditingId] = useState(null);
  const [selectedExpenses, setSelectedExpenses] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addExpense = () => {
    if (!newExpense.name || !newExpense.amount || !newExpense.category || !newExpense.date) return;

    if (editingId !== null) {
      setExpenses(expenses.map((exp) => (exp.id === editingId ? { ...newExpense, id: editingId } : exp)));
      setEditingId(null);
    } else {
      setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
    }
    
    setNewExpense({ name: "", amount: "", category: "", date: "" });
  };

  const editExpense = (id) => {
    const expenseToEdit = expenses.find((exp) => exp.id === id);
    setNewExpense(expenseToEdit);
    setEditingId(id);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const handleSelectExpense = (id) => {
    if (selectedExpenses.includes(id)) {
      setSelectedExpenses(selectedExpenses.filter((expId) => expId !== id));
    } else {
      setSelectedExpenses([...selectedExpenses, id]);
    }
  };

  const deleteSelectedExpenses = () => {
    setExpenses(expenses.filter((exp) => !selectedExpenses.includes(exp.id)));
    setSelectedExpenses([]);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      (!startDate || expense.date >= startDate) &&
      (!endDate || expense.date <= endDate)
    );
  });

  return (
    <div className="expense-container">
      <h2>💰 Expense Tracker</h2>

      

      {/* Expense Form */}
      <div className="expense-form">
        <input type="text" name="name" placeholder="Expense Name" value={newExpense.name} onChange={handleChange} />
        <input type="number" name="amount" placeholder="Amount" value={newExpense.amount} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={newExpense.category} onChange={handleChange} />
        <input type="date" name="date" value={newExpense.date} onChange={handleChange} />
        <button className="primary-btn" onClick={addExpense}>{editingId ? "Update Expense" : "Add Expense"}</button>
      </div>
      {/* Date Range Filter */}
      <div className="date-filter">
        <label>Start Date :</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>End Date :</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      {/* Delete Selected Button */}
      {selectedExpenses.length > 0 && (
        <button className="delete-btn" onClick={deleteSelectedExpenses}>Delete Selected</button>
      )}

      {/* Expense Table */}
      <table className="expense-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Amount (₹)</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense) => (
              <tr key={expense.id} className={selectedExpenses.includes(expense.id) ? "selected-row" : ""}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedExpenses.includes(expense.id)}
                    onChange={() => handleSelectExpense(expense.id)}
                  />
                </td>
                <td>{expense.name}</td>
                <td>₹ {expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                <td>
                  <FaEdit className="edit-icon" onClick={() => editExpense(expense.id)} />
                  <FaTrash className="delete-icon" onClick={() => deleteExpense(expense.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No expenses found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Expense;

