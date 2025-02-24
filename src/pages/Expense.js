import React, { useState } from "react";
import "./sections.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Expense = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Groceries", amount: 2500, category: "Food", date: "2025-02-22" },
    { id: 2, name: "Rent", amount: 15000, category: "Housing", date: "2025-02-01" },
    { id: 3, name: "Electricity Bill", amount: 1200, category: "Utilities", date: "2025-02-15" },
  ]);

  const [newExpense, setNewExpense] = useState({ name: "", amount: "", category: "", date: "" });
  const [editingId, setEditingId] = useState(null);

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

  return (
    <div className="expense-container">
      <h2>💰 Expense Tracker</h2>

      {/* Expense Form */}
      <div className="expense-form">
        <input type="text" name="name" placeholder="Expense Name" value={newExpense.name} onChange={handleChange} />
        <input type="number" name="amount" placeholder="Amount" value={newExpense.amount} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={newExpense.category} onChange={handleChange} />
        <input type="date" name="date" value={newExpense.date} onChange={handleChange} />
        <button onClick={addExpense}>{editingId ? "Update Expense" : "Add Expense"}</button>
      </div>

      {/* Expense Table */}
      <table className="expense-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount (₹)</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense.id}>
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
              <td colSpan="5">No expenses added yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Expense;
