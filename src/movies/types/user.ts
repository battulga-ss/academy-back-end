import { Document } from "mongoose";

export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface IUserDocument extends IUser, Document {
  namae: string;
}
