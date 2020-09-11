import React from "react";
import { connect } from "react-redux";
import TransactionDetail from "./TransactionDetail";

const TransactionList = ({ transactions }) => {
  console.log(transactions);
  return (
    <div className="TransactionList">
      <h3>History</h3>
      <ul>
        {transactions.length ? (
          transactions.map((transaction) => (
            <TransactionDetail
              title={transaction.title}
              amount={transaction.amount}
              id={transaction.id}
              key={transaction.id}
            />
          ))
        ) : (
          <h4>
            No record
            <span role="img" aria-label="img">
              😊
            </span>
          </h4>
        )}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ transaction }) => ({
  transactions: transaction.transactions,
});
export default connect(mapStateToProps)(TransactionList);
