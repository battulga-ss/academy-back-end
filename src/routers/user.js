import express from "express";
import { login } from "../controllers/user.js";

export const userRouter = new express.Router();

userRouter.post("/login", login);

userRouter.post("register", (req, res) => {
  res.send("Success!");
});

userRouter.post("/logout", (req, res) => {
  res.send("Success!");
});