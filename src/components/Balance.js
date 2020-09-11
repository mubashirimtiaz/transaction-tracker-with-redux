import React from "react";
import { connect } from "react-redux";

const Balance = ({ transactions }) => {
  const amount = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, curr) => (acc += curr), 0);
  return (
    <div>
      <h2>
        Total Balance: <span>${amount}</span>
      </h2>
    </div>
  );
};

const mapStateToProps = ({ transaction }) => ({
  transactions: transaction.transactions,
});
export default connect(mapStateToProps)(Balance);
