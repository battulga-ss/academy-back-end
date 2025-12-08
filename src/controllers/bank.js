import { createAccountService } from "../services/bank.js";
import { updateAccountService } from "../services/bank.js";
import { getTransactionsByAccountNumberService } from "../services/bank.js";

export const createAccount = async (req, res) => {
  const { user_id, account_number, balance } = req.body;
  const account = await createAccountService(user_id, account_number, balance);
  res.json(account);
};

// Дансны мэдээллийг шинэчлэх
export const updateAccount = async (req, res) => {
  const { account_number, balance } = req.body;
  const update = await updateAccountService(account_number, balance);
  // consolq.log(user)
  res.json(update);
};

// Данс устгах
export const deleteAccount = async (req, res) => {
  const { id } = req.body;
  res.json({});
};

// Бүх дансыг авах
export const getAllAccounts = async (req, res) => {
  // Хэрвээ хэрэглэгчээр шүүх бол:
  const { user_id } = req.body;
  res.json({});
};

// данс авах
export const getAccountByNumber = async (req, res) => {
  const { account_number } = req.body;
  res.json({});
};

// Шинэ гүйлгээ үүсгэх

export const createTransaction = async (req, res) => {
  const { user_id, amount, transaction_type } = req.body;
  const transaction = await createTransactionService(
    user_id,
    amount,
    transaction_type
  );
  res.json(transaction);
};

// Бүх гүйлгээ авах

export const getTransactions = async (req, res) => {
  const { user_id } = req.query;
  const transactions = await getTransactionsService(user_id);
  res.json(transactions);
};

// Хэрэглэгчээр гүйлгээ авах

export const getTransactionsByUserId = async (req, res) => {
  const { user_id } = req.query;
  const transactions = await getTransactionsByUserIdService(user_id);
  res.json(transactions);
};

// Дансны дугаараар гүйлгээ авах

export const getTransactionsByAccountNumber = async (req, res) => {
  const { account_number } = req.query;
  const transactions = await getTransactionsByAccountNumberService(
    account_number
  );
  res.json(transactions);
};
