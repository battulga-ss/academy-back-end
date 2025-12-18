import { Router } from "express";
import {
  addSkinController,
  deleteSkinController,
  loginUser,
  createUser,
} from "../controllers/user.js";
import { login } from "../controllers/auth.js";
import { verifyJWT } from "../jwtMiddleware.js";

export const userRouters = new Router();

export const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    if (!allowedRoles.includes(req.user.role))
      return res.status(403).json({ message: "Forbidden" });
    next();
  };
};
userRouters.post("/create", createUser);
userRouters.get("/login", login);
//userRouters.get("/skins", homePage);
userRouters.delete("/confirm", deleteSkinController);
userRouters.post("/confirm", addSkinController);
