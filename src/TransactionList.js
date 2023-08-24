import React from "react";

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>Amount: {transaction.amount}</span>
            <span>Category: {transaction.category}</span>
            <span>Mode: {transaction.mode}</span>
            <span>Date: {transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
