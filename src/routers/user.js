import { Router } from "express";
import { login, logout } from "../controllers/user.js";

export const userRouters = new Router();

userRouters.post("/login", login);
console.log("boljn")
userRouters.post("/logout", logout);
console.log("thhh")