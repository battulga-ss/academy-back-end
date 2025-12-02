import { Router } from "express";
import {
  createTransaction,
  getTransactions,
  getTransactionsByAccountNumber,
  createAccount,
  updateAccount,
  deleteAccount,
  getAllAccounts,
  getAccountByNumber,
  // updateTransaction,
  // deleteTransaction,
} from "../controllers/bank.js";

export const bankRouters = new Router();

// Account-related
bankRouters.get("/accounts", getAllAccounts);
bankRouters.get("/accounts/:accountNumber", getAccountByNumber);
bankRouters.post("/accounts", createAccount);
bankRouters.put("/accounts/:accountNumber", updateAccount);
bankRouters.delete("/accounts/:accountNumber", deleteAccount);

// Transaction-related
bankRouters.get("/transactions", getTransactions);
bankRouters.get(
  "/accounts/:accountNumber/transactions",
  getTransactionsByAccountNumber
);
bankRouters.post("/transactions", createTransaction);
// bankRouters.put("/transactions/:transactionId", updateTransaction);
// bankRouters.delete("/transactions/:transactionId", deleteTransaction);
