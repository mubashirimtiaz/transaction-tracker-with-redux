import React, { createContext, useReducer } from "react";
import { transactionReducer } from "../reducers/transactionReducer";
const initialState = {
  transactions: [
    {
      title: "Buy Bread",
      amount: -100,
      id: 1,
    },
    {
      title: "Sell Car",
      amount: 1500,
      id: 2,
    },
    {
      title: "Picnic",
      amount: -800,
      id: 3,
    },
  ],
};

export const TransactionContext = createContext(initialState);
const TransactionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  return (
    <TransactionContext.Provider
      value={{ transactions: state.transactions, dispatch }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
