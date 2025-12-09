import { db } from "../db.js";
export const createAccountService = async (
  user_id,
  account_number,
  balance
) => {
  const response = await db.query(
    `INSERT INTO account (userid ,number, balance) VALUES ($1, $2, $3 ) RETURNING *`,
    [user_id, account_number, balance]
  );
  return response.rows[0];
};

export const updateAccountService = async (balance, account_number) => {
  const response = await db.query(
    `UPDATE account SET balance = ${balance} WHERE number = ${account_number}  RETURNING *`
  );
  return response.rows[0];
};
export const deleteAccountService = async (id) => {
  const response = await db.query(
    `DELETE FROM users WHERE id = ${id} RETURNING *`[id]
  );
  return response.rows[0];
};
export const getAllAccountsService = async (user_id) => {
  const response = await db.query(
    `UPDATE account SET balance = ${balance} WHERE userid = ${user_id}  RETURNING *`
  );
  return response.rows[0];
};

export const getAccountByNumberService = async (account_number) => {
  const response = await db.query(
    `SELECT * from account WHERE number = ${account_number} RETURNING *`
  );
  return response.rows[0];
};

export const createTransactionService = async (balance, account_number) => {
  const response = await db.query(
    `UPDATE account SET balance = ${balance} WHERE number = ${account_number}  RETURNING *`
  );
  return response.rows[0];
};
export const getTransactionsService = async (user_id) => {
  const response = await db.query(
    `SELECT * from transactions  WHERE userid = ${user_id}  RETURNsING *`
  );
  return response.rows[0];
};
export const getTransactionsByUserIdService = async (user_id) => {
  const response = await db.query(
    `SELECT * from transactions WHERE userid = ${user_id}  RETURNING *`
  );
  return response.rows[0];
};
export const getTransactionsByAccountNumberService = async (account_number) => {
  const response = await db.query(
    `SELECT * from account  WHERE number = ${account_number}  RETURNING *`
  );
  return response.rows[0];
};
