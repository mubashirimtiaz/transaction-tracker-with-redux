import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../redux/transaction/transaction.actions";

const TransactionForm = ({ addTransaction }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };
  const handleAmountChange = (evt) => {
    setAmount(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTransaction({ title, amount });
    setTitle("");
    setAmount("");
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="transactionTitle">Title</label>
      <input
        type="text"
        id="transactionTitle"
        value={title}
        required={true}
        onChange={handleTitleChange}
      />
      <label htmlFor="transactionAmount">Amount</label>
      <input
        type="number"
        id="transactionAmount"
        value={amount}
        required={true}
        onChange={handleAmountChange}
      />
      <button>Add Transaction</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
});
export default connect(null, mapDispatchToProps)(TransactionForm);
