import React, { useState } from "react";
import { FaMoneyBill, FaChartBar, FaPiggyBank, FaWallet, FaTools } from "react-icons/fa";
import "../styles/dashboard.css";
import Expense from "./Expense";
import Investment from "./Investment";
import Analytics from "./Analytics";
import Income from "./Income";
import BudgetTools from "./BudgetTools";
import ProfileDropdown from "../components/ProfileDropdown";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("expense");

  const menuItems = [
    { id: "expense", label: "Expense", icon: <FaMoneyBill /> },
    { id: "investment", label: "Investment", icon: <FaPiggyBank /> },
    { id: "analytics", label: "Analytics", icon: <FaChartBar /> },
    { id: "income", label: "Income", icon: <FaWallet /> },
    { id: "budgetTools", label: "Budget Tools", icon: <FaTools /> },
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">💳 FinTrack_</div>
<<<<<<< HEAD
        <ProfileDropdown />
=======
        <ProfileDropdown/>
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => setActiveSection(item.id)}
            >
              {item.icon} <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        {activeSection === "expense" && <Expense />}
        {activeSection === "investment" && <Investment />}
        {activeSection === "analytics" && <Analytics />}
        {activeSection === "income" && <Income />}
        {activeSection === "budgetTools" && <BudgetTools />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 FinTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
