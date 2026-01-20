import { Document } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserDocument extends IUser, Document {
  name: string;
  email: string;
  password: string;
}
