import { db } from "../../data/db.js";
import bcrypt from "bcrypt";

export const getUserBySteamurlService = async (steamurl) => {
  const res = await db.query("SELECT * FROM users WHERE steamurl = $1", [
    steamurl,
  ]);
  return res.rows[0];
};

export const createUserService = async (steamurl, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const response = await db.query(
    `INSERT INTO users (steamurl, password) VALUES ($1, $2) RETURNING *`,
    [steamurl, hashedPassword]
  );
  return response.rows[0];
};

export const loginUserService = async (steamurl, password) => {
  const response = await db.query(
    `SELECT * FROM users WHERE steamurl = $1 AND password = $2`,
    [steamurl, password]
  );
  return response.rows[0];
};

export const deleteSkinService = async (id) => {
  const response = await db.query(
    `DELETE from skins WHERE id=($1) returning*`,
    [id]
  );
};

export const addSkinService = async (skinname, price) => {
  const response = await db.query(
    `INSERT into skins(skinname, price) VALUES('${skinname}','${price}') RETURNING *`
  );
  return response.rows[0];
};
