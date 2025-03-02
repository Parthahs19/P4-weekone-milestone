import React, { useState } from "react";
import "./dashboard.css";
import Expense from "./Expense";
import Investment from "./Investment";
import Analytics from "./Analytics";
import Income from "./Income";
import BudgetTools from "./BudgetTools";
import ProfileDropdown from "../components/ProfileDropdown";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("expense");

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">💳 FinTrack_</div>
        <ProfileDropdown/>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li onClick={() => setActiveSection("expense")}>Expense</li>
          <li onClick={() => setActiveSection("investment")}>Investment</li>
          <li onClick={() => setActiveSection("analytics")}>Analytics</li>
          <li onClick={() => setActiveSection("income")}>Income</li>
          <li onClick={() => setActiveSection("budgetTools")}>Budget Tools</li>
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
      <footer className="footer">© 2025 FinTrack_</footer>
    </div>
  );
};

export default Dashboard;
