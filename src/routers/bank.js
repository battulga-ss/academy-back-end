import express from "express";
import { checkBalanceController } from "../controllers/bank.js";

export const bankRouter = new express.Router();

bankRouter.get("/check-balance/:userId", checkBalanceController);

bankRouter.get("/get-history", (req, res) => {
  res.send(5000);
});