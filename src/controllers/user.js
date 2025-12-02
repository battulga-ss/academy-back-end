import {
  createUserService,
  updateUserService,
  getUsersService,
  getUserByIdService,
  deleteUserService,
  getUserAccountsService,
  getUserTransactionsService,
} from "../services/user.js";

export const createUser = async (req, res) => {
  const { username, email, password, firstname, lastname } = req.body;

  const user = await createUserService(
    username,
    email,
    password,
    firstname,
    lastname
  );

  res.json(user);
};

export const updateUser = async (req, res) => {
  const { id, username, email, password, firstname, lastname } = req.body;

  const user = await updateUserService(
    id,
    username,
    email,
    password,
    firstname,
    lastname
  );

  res.json(user);
};

export const getUsers = async (req, res) => {
  const users = await getUsersService();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const { id } = req.query;
  const user = await getUserByIdService(id);
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const { id } = req.query;
  const user = await deleteUserService(id);
  res.json(user);
};

export const getUserAccounts = async (req, res) => {
  const { id } = req.query;
  const accounts = await getUserAccountsService(id);
  res.json(accounts);
};
