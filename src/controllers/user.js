export const login = (req, res) => {
      console.log()
    const email = req.body.email
  const password = req.body.password
  console.log(email, password)
  


  res.cookie("user", email, {
    httpOnly: true,
    secure: false
  });
  res.json({
    user: "userId123"
  });
};

export const logout = (req, res) => {
  res.clearCookie("user");

  res.send("Success!");
};





