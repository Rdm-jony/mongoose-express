import mongoose, { Schema, version } from "mongoose";
import { IBlog } from "../Interfaces/blog_interface";

const nodeSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    content: { type: String, default: "none" },
    category: { type: String, enum: ["personal", "other"], default: "other" },
    text: [{ body: { type: String, required: true }, date: { type: Date, required: true } }]
},
    {
        versionKey: false,
        timestamps: true
    }
)

export const Blog = mongoose.model<IBlog>("Blog", nodeSchema)

