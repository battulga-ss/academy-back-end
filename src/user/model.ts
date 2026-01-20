import { Schema, Types, model } from "mongoose";

export interface User {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const Users = model<User>("users", userSchema);
