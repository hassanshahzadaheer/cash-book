import React, { useState } from "react";
import TransactionEntry  from "./TransactionEntry";
import TransactionList from "./TransactionList";

function CashBook() {
  // setup state for transaction data
  const [transactions, setTransactions] = useState([]);

 const addTransaction = (newTransaction) => {

    // create a copy of transaction array
    const copyTransactions = [...transactions];

    // add new transaction to the copyTransactions
    copyTransactions.push(newTransaction);

    // update the state of function with new array
    setTransactions(copyTransactions);

 };

  return (
    <div>
      <h1>Aheer Cash Book</h1>
      <TransactionEntry addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default CashBook;
