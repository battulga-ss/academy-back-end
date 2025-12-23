import express from "express";
import type { Request, Response } from "express";
import mongoose from "mongoose";
import type { Document } from "mongoose";
import { Schema, model } from "mongoose";
import bodyParser from "body-parser";
import { movieRouter } from "./movies/routes.ts";

// Express app
const app = express();
app.use(bodyParser.json());

// MongoDB connection
await mongoose
  .connect(
    "mongodb+srv://blessyou100x_db_user:8M13Savg2vLl3UUr@backend.b2ndaz2.mongodb.net/sample_mflix?appName=backend"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

// TypeScript interface for Student
// interface IStudent extends Document {
//   name: string;
//   age: number;
// }

// Schema and Model
// const StudentSchema: Schema<IStudent> = new Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
// });

// const Student = model<IStudent>("Student", StudentSchema);

// // REST API Endpoints

// // GET all students
// app.get("/students", async (req: Request, res: Response) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (err) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// POST new student
// app.post("/students", async (req: Request, res: Response) => {
//   try {
//     const student = new Student(req.body);
//     await student.save();
//     res.status(201).json(student);
//   } catch (err) {
//     res.status(400).json({ error: "Invalid data" });
//   }
// });

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
