import { v4 as uuid } from "uuid";
export const transactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [
          {
            title: action.transaction.title,
            amount: Number(action.transaction.amount),
            id: uuid(),
          },
          ...state.transactions,
        ],
      };
    case "REMOVE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.id
        ),
      };
    default:
      return state;
  }
};
