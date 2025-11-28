// router.post("/deposit", (req, res) => {
//   const { amount } = req.body;

//   if (!amount || amount <= 0) {
//     return res.status(400).json({ error: "Invalid amount" });
//   }

//   // Read user.json (assume single user)
//   let user = JSON.parse(fs.readFileSync("./user.json", "utf8"));

//   // Update balance
//   user.balance = Number(user.balance || 0) + Number(amount);

//   // Save updated user.json
//   fs.writeFileSync("./user.json", JSON.stringify(user, null, 2));

//   // Add history entry
//   let history = JSON.parse(fs.readFileSync("./history.json", "utf8"));
//   history.push({
//     type: "deposit",
//     amount: amount,
//     newBalance: user.balance,
//     date: new Date().toISOString(),
//   });

//   fs.writeFileSync("./history.json", JSON.stringify(history, null, 2));

//   return res.json({ newBalance: user.balance });
// });
