export const createAccount = async (
  username,
  email,
  password,
  firstname,
  lastname
) => {
  const response = await db.query(
    `INSERT INTO users (username, email, password ) VALUES ($1, $2, $3) RETURNING *`,
    [username, email, password]
  );
  return response.rows[0];
};

export const updateUser = async (id, userid, accouont_number, balance) => {
  const response = await db.query(
    `INSERT INTO users (id, userid, accouont_number,balance) VALUES ($1, $2, $3) RETURNING *`[
      (id, userid, accouont_number, balance)
    ]
  );
  return response.rows[0];
};
export const deleteAccount = async (id) => {
  const response = await db.query(
    `INSERT INTO users (id) VALUES ($1, $2, $3) RETURNING *`[id]
  );
  return response.rows[0];
};
