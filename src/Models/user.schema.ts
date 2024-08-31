import { Schema, model } from 'mongoose';
import { IUser } from '../Interfaces/user.interface';


// Define User schema
const UserSchema = new Schema<IUser>({
    name: { type: String, default: undefined },
    age: { type: Number, default: undefined },
    email: { type: String, required: true, unique: true },
    title: { type: String, default: undefined },
    bio: { type: String, default: undefined },
    token: { type: String, required: true },
});

export const UserModel = model<IUser>('User', UserSchema);
