import express, { Request, Response } from "express"
import { User } from "../model/user_model"
export const userRoutes = express.Router()

userRoutes.post("/create", async (req: Request, res: Response) => {
    try {
        const body = req.body
        const user = await User.create(body)
        res.status(200).json({ success: true, message: "successFully create user", user })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong" })
    }
})

userRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const users = await User.find()
        res.status(200).json({ success: true, users })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong" })
    }
})

userRoutes.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.status(200).json({ success: true, user })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong" })
    }
})

userRoutes.patch("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const body = req.body
        const updateUser = await User.findByIdAndUpdate(id, body, { new: true })
        res.status(200).json({ success: true, message: "succefully update user", updateUser })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong" })
    }
})

userRoutes.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "succefully deleted user", deletedUser })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "something went wrong" })
    }
})