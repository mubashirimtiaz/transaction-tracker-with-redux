import React from "react";
import {
  Header,
  Balance,
  IncomeExpense,
  TransactionList,
  TransactionForm,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <TransactionForm />
    </div>
  );
}

export default App;
