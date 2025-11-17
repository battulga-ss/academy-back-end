import express from "express";
import { bankRouter } from "./routers/bank.js";
import { userRouter } from "./routers/user.js";

const app = express();

app.use(express.json()); //middleWare

app.use("/bank", bankRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("3000");
});