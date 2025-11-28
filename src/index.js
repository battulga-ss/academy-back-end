import express from "express";
import cookieParser from "cookie-parser";
import { userRouters } from "./routers/user.js";
import { bankRouters } from "./routers/bank.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use("/", (req, res, next) => {
  const userId = req.cookies.user;

  if (userId && req.path === "/login.html") {
    return res.redirect("/bank.html");
  }

  if (!userId && req.path === "/bank.html") {
    return res.redirect("/login.html");
  }

  if (userId) {
    const user = {
      email: "test@gmail.com",
      password: "123",
    };

    req.user = user;
  }

  next();
});

app.use(express.static("frontend"));

app.use("/user", userRouters);
app.use("/bank", bankRouters);

app.listen(3000, () => {
  console.log("express app running at 3000");
});
