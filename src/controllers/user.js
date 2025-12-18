import {
  addSkinService,
  deleteSkinService,
  loginUserService,
  createUserService,
} from "../services/user.js";

export const createUser = async (req, res) => {
  const { steamurl, password } = req.body;

  const user = await createUserService(steamurl, password);

  res.json(user);
};

export const addSkinController = async (req, res) => {
  const { skinname, price } = req.body;
  const skin = await addSkinService(skinname, price);
  res.json(skin);
};
export const deleteSkinController = async (req, res) => {
  const { id } = req.body;
  const skin = await deleteSkinService(id);
  res.json(skin);
};

export const loginUser = async (req, res) => {
  const { steamurl, password } = req.body;

  const user = await loginUserService(steamurl, password);

  res.json(user);
};
