import React, { useState } from "react";
<<<<<<< HEAD
import { Form, Button, ProgressBar } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../styles/sections.css";

const BudgetTools = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savings, setSavings] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(5000); // Default goal

  const calculateSavings = () => {
    const calculatedSavings = income - expenses;
    setSavings(calculatedSavings);
  };

  const expenseBreakdown = [
    { name: "Rent", value: expenses * 0.4 },
    { name: "Food", value: expenses * 0.2 },
    { name: "Transport", value: expenses * 0.15 },
    { name: "Entertainment", value: expenses * 0.1 },
    { name: "Others", value: expenses * 0.15 },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9966FF"];

  return (
    <div className="section-container">
      <h2>🔢 Budget & Savings Calculator</h2>
      
      {/* Input Form */}
      <Form>
        <Form.Group>
          <Form.Label>Monthly Income (₹)</Form.Label>
          <Form.Control 
            type="number" 
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))} 
          />
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Monthly Expenses (₹)</Form.Label>
          <Form.Control 
            type="number" 
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))} 
          />
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Set Savings Goal (₹)</Form.Label>
          <Form.Control 
            type="number" 
            value={savingsGoal}
            onChange={(e) => setSavingsGoal(Number(e.target.value))} 
          />
        </Form.Group>

        <Button variant="success" onClick={calculateSavings} className="mt-3">
          Calculate Savings
        </Button>
      </Form>

      {/* Savings Display */}
      <h3 className="mt-3">Your Savings: ₹{savings}</h3>
      <ProgressBar 
        now={(savings / savingsGoal) * 100} 
        label={`${Math.min((savings / savingsGoal) * 100, 100).toFixed(1)}%`} 
        variant={savings >= savingsGoal ? "success" : "warning"}
      />

      {/* Expense Breakdown Pie Chart */}
      <div className="chart-container">
        <h4>📊 Expense Breakdown</h4>
        <PieChart width={300} height={300}>
          <Pie data={expenseBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
            {expenseBreakdown.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
=======
import { Form, Button } from "react-bootstrap";
import "./sections.css";

const BudgetTools = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [savings, setSavings] = useState(0);

  const calculateSavings = () => {
    setSavings(income - expenses);
  };

  return (
    <div className="section-container">
      <h2>🔢 Budget & Savings Calculator</h2>
      <Form>
        <Form.Group>
          <Form.Label>Monthly Income (₹)</Form.Label>
          <Form.Control type="number" onChange={(e) => setIncome(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Monthly Expenses (₹)</Form.Label>
          <Form.Control type="number" onChange={(e) => setExpenses(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={calculateSavings} className="mt-3">
          Calculate Savings
        </Button>
      </Form>
      <h3 className="mt-3">Your Savings: ₹{savings}</h3>
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
    </div>
  );
};

export default BudgetTools;
<<<<<<< HEAD
=======

>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
