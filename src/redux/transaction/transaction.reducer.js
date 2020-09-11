import { v4 as uuid } from "uuid";
import { transactionActionTypes } from "./transaction.types";
const INITIAL_STATE = {
  transactions: [],
};
export const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case transactionActionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          {
            title: action.payload.title,
            amount: Number(action.payload.amount),
            id: uuid(),
          },
          ...state.transactions,
        ],
      };
    case transactionActionTypes.REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
