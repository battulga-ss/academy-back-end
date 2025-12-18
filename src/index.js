import express from "express";
import cors from "cors";
import { connectDb } from "../data/db.js";
import { userRouters } from "../src/routes/user.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouters);

await connectDb();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
