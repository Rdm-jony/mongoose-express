import mongoose, { Schema, version } from "mongoose";

const nodeSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, default: "none" },
    category: { type: String, enum: ["personal", "other"], default: "other" },
    text: [{ body:{type:String,required:true},date:{type:Date,required:true} }]
},
    {
        versionKey: false,
        timestamps: true
    }
)

export const Blog = mongoose.model("Blog", nodeSchema)

