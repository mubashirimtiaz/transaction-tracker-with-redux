import { transactionActionTypes } from "./transaction.types";
export const addTransaction = (transaction) => ({
  type: transactionActionTypes.ADD_TRANSACTION,
  payload: transaction,
});

export const removeTransaction = (transaction_id) => ({
  type: transactionActionTypes.REMOVE_TRANSACTION,
  payload: transaction_id,
});
