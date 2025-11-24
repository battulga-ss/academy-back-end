
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import fs from "node:fs/promises";

 
const app = express();
app.use(cors()); 
app.use(cookieParser())

app.use(express.json());


import { login } from "../controllers/user.js";

export const userRouter = new express.Router();

userRouter.post("/login", login);

res.cookie("user", found.email, {
    httpOnly: true,
    secure: false,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000
  });


userRouter.post("register", (req, res) => {
  res.send("Success!");
});

userRouter.post("/logout", (req, res) => {
  res.send("Success!");
});