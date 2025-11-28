import fs from "fs";
export const login = async (req, res) => {
  const user = JSON.parse(fs.readFileSync("./data/user.json"));

  const email = req.body.email;

  const password = req.body.password;

  // const data = await fs.readFile(filePath, { encoding: "utf8" });
  const data = JSON.parse(fs.readFileSync("./data/user.json"));

  const found = user.find((u) => u.email === email && u.password === password);

  if (!found) {
    return res.status(401).json({ error: "pass or mail buru" });
  }

  res.cookie("user", email, {
    httpOnly: true,
    secure: false,
  });

  res.json({
    user: data,
  });
};

export const logout = (req, res) => {
  res.clearCookie("user");

  res.send("Success!");
};
