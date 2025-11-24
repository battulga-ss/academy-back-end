export const login = (req, res) => {

    const getUsers = async () => {
        const userRawData = await fs.readFile("users.json", "utf-8");

        const users = JSON.parse(userRawData)
    }
app.post("/login", async (req, res) => {
  console.log(req.body);
  const email = req.body.email
  const password = req.body.password
  
   const users = await getUsers();
 
   const user = users.find(value => {
     return value.email === email && value.password === password;
   });
 
   if (!user) {res.send("done")

  res.send("username eswel password buruu bn!");
   } else {
res.send("success");
   }
  
});  
};