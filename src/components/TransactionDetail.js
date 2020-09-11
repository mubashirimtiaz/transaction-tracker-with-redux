import React from "react";
import { connect } from "react-redux";
import { removeTransaction } from "../redux/transaction/transaction.actions";

const TransactionDetail = ({ title, amount, id, removeTransaction }) => {
  const sign = amount >= 0 ? "+" : "-";
  const handleClick = () => {
    removeTransaction({ id });
  };
  return (
    <li onClick={handleClick}>
      <span>{title}</span>
      <span>
        {sign}${Math.abs(amount)}
      </span>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeTransaction: (transaction) => dispatch(removeTransaction(transaction)),
});
export default connect(null, mapDispatchToProps)(TransactionDetail);
