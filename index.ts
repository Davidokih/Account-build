import express, { Response, Request, Application } from "express";
require("./utils/db")

import cors from "cors"
import userRouter from "./router/userRouter"
const port = 4082

const app: Application = express()
app.use(express.json())

app.use(cors)
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Server is now working"
    })
})

app.use("/api/user", userRouter)

app.listen(port,() => {
    console.log(`listening to port ${port}`)
})