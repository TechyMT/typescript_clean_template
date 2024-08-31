import { Document } from 'mongoose';



export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  age: number;
  title?: string;
  bio?: string;
  token: string;
}
