import express, { Request, Response } from "express"
import { Blog } from "../model/node_model";

export const blogRoutes = express.Router()

blogRoutes.post("/create", async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const myBlog = await Blog.create(body)
        res.status(201).json({ success: true, message: "successfully added blog", myBlog })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong" })
    }

})

blogRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const myBlogs = await Blog.find()
        res.status(201).json({ success: true, myBlogs })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrog" })
    }
})

blogRoutes.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const myBlog = await Blog.findById(id)
        res.status(201).json({ success: true, myBlog })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrog" })
    }
})

blogRoutes.put("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const body = req.body;
        const updateBlog = await Blog.findByIdAndUpdate(id, body, { new: true })
        res.status(201).json({ success: true, message: "successfully update", updateBlog })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrog" })
    }
})

blogRoutes.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const deleteBlog = await Blog.findByIdAndDelete(id)
        res.status(500).json({ success: true, message: "successfully deleted",deleteBlog })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrog" })
    }
})