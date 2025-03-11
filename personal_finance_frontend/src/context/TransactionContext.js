import React, { createContext, useState } from "react";

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Groceries", amount: -50 },
    { id: 2, name: "Salary", amount: 1000 },
  ]);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

