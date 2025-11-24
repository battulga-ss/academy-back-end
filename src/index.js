
// import express from "express";
// import cors from "cors";

// import { bankRouter } from "./routers/bank.js";
// import { userRouter } from "./routers/user.js";

// const app = express();   

// app.use(cors());         
// app.use(express.json()); 

// app.use("/bank", bankRouter);
// app.use("/user", userRouter);

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


// // const correctEmail = "admin@1.com";
// // const correctPassword = "12345";


// //  document.getElementById("checkBtn").onclick = () => {
// //       const mail = document.getElementById("email").value;
// //       const pass = document.getElementById("password").value;
// //       const result = document.getElementById("result");

// //       if (mail === correctEmail && pass === correctPassword) {
// //         window.prompt("success")
       
// //       } else {
// //         window.prompt("buruu")
        
// //       }
// //  };
// const addBtn = document.getElementById("submit ")
//      const correctUsername = "admin@erxes.io";
//     const correctPassword = "12345";
// // const addBtnFunc = () => {
// //   const titleElement = document.getElementById("title");
// //   const contentElement = document.getElementById("content");
// //   const listElement = document.getElementById("posts");

// //   const title = titleElement.value;
// //   const content = contentElement.value;
// // }
    
//     document.getElementById("loginBtn").onclick = () => {
//       const user = document.getElementById("username").value;
//       const pass = document.getElementById("password").value;
//       const result = document.getElementById("result");

//       if (user === correctUsername && pass === correctPassword) {
//         window.alert("Login successful!");
        
//       } else {
//          window.alert("Invalid username or password!")
        
//       }
//     };
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import fs from "node:fs/promises";


 
const app = express();
app.use(cors()); 
app.use(cookieParser())

app.use(express.json());



const getUsers = async () => {
  const userRawData = await fs.readFile("users.json", "utf-8");

  const users = JSON.parse(userRawData);

  return users;
};


const updateUser = async (users, user, amount, type) => {
  const userData = JSON.stringify(users);
x
  await fs.writeFile("users.json", userData, "utf-8");

  const historyRawData = await fs.readFile("history.json", "utf-8");
  const history = JSON.parse(historyRawData);

  const userHistories = history[user.username] || [];

  userHistories.push({
    type,
    amount,
    balance: user.balance,
    currentBalance: 0
  });

  history[user.username] = userHistories;

  const historyData = JSON.stringify(history);

  await fs.writeFile("history.json", historyData, "utf-8");
  console.log("Amjilttai");

  return;
};

app.get("/get-user/:id", async (req, res) => {
  const { id } = req.params;
  const users = await fs.readFile("users.json").then(value => {
    return JSON.parse(value);
  });
  // const correctEmail = "admin@1.com";
// const correctPassword = "12345";


//  document.getElementById("checkBtn").onclick = () => {
//       const mail = document.getElementById("email").value;
//       const pass = document.getElementById("password").value;
//       const result = document.getElementById("result");

//       if (mail === correctEmail && pass === correctPassword) {
//         window.prompt("success")
       
//       } else {
//         window.prompt("buruu")

  const user = users.find(value => {
    return value.id == id;
  });

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json(user);
});

app.get("/get-users", async (req, res) => {
  const { firstName, age } = req.query;

  const users = await fs.readFile("users.json").then(value => {
    return JSON.parse(value);
  });

  // const filteredUsers = users.filter(value => {
  //   return value.firstName === firstName && value.age == age;
  // });

  res.json(users);
});

app.post("/create-user", async (req, res) => {
  console.log(req.body);
  const email = req.body.email
  const password = req.body.password
    const users = await getUsers();
   
    const user = users.find(value => {
      return value.username === username;
    });
  
    if (user) {
      console.log("Username not valid");
      return signup();
    }
  
    users.push({ username, password, balance: 0 });
  
    const userData = JSON.stringify(users);
  
    await fs.writeFile("users.json", userData, "utf-8");
  res.send("Success");
});


app.post("/login", async (req, res) => {
  console.log(req.body);
  const username = req.body.username
  const password = req.body.password
  
   const users = await getUsers();
 
   const user = users.find(value => {
     return value.username === username && value.password === password;
   });
 
   if (!user) {

  res.send("username eswel password buruu bn!");
   } else {
res.send("success");
   }
  
});

app.post("/deposit", async (req, res) => {

  const username = req.body.username
  const amount = req.body.balance
  const users = await getUsers();
   const user = users.find(value => {
      return value.username === username;
    });
  
    if (!user) {

      return res.send("hereglech oldsongvi")
    }
  
  let balance = parseInt(user.balance) || 0;
  balance = balance + amount;

  user.balance = balance;

  await updateUser(users, user, amount, "deposit");
  res.send("success")


}),
app.put("/update-user/:id", async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.send("Success");
});

app.listen(3000, () => {
  console.log("3000");
});