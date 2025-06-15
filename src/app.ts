import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { blogRoutes } from "./controller/node_controller"
const app = express()
dotenv.config()

app.use(express.json())
app.use("/blog", blogRoutes)

app.get("/", async (req: Request, res: Response) => {
    res.send("express server running")
})

export default app