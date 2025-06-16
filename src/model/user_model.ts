import { model, Schema } from "mongoose";
import { IUser } from "../Interfaces/user_interface";

const userShema = new Schema<IUser>({
    name: { firstName: { type: String, required: true }, lastName: { type: String, required: true } },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true }
})

export const User = model<IUser>("User", userShema)