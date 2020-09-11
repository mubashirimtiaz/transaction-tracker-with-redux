import React from "react";
import { connect } from "react-redux";

const IncomeExpense = ({ transactions }) => {
  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount > 0)
    .reduce((acc, curr) => (acc += curr), 0);
  const expense =
    transactions
      .map((transaction) => transaction.amount)
      .filter((amount) => amount < 0)
      .reduce((acc, curr) => (acc += curr), 0) * -1;
  return (
    <div className="IncomeExpense">
      <div>
        <h3>Income</h3>
        <p>${income.toFixed(2)}</p>
      </div>
      <div>
        <h3>Expense</h3>
        <p>${expense.toFixed(2)}</p>
      </div>
    </div>
  );
};
const mapStateToProps = ({ transaction }) => ({
  transactions: transaction.transactions,
});
export default connect(mapStateToProps)(IncomeExpense);
