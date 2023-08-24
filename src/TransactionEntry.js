import React, { useState } from "react";

function TransactionEntry({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [mode, setMode] = useState("cash");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category && date) {
      const newTransaction = { amount, category, mode, date };
      addTransaction(newTransaction);
      setAmount("");
      setCategory("");
      setMode("cash");
      setDate("");
    }
  };

  return (
    <div className="transaction-entry">
      <h2>Enter Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="cash">Cash</option>
          <option value="online">Online</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionEntry;
