import React, { useState } from "react";
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
    </div>
  );
};

export default BudgetTools;

