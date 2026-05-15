import express, { Request, Response } from "express"
import cors from "cors"
import { clerkMiddleware, getAuth } from '@clerk/express'
import { shouldBeUser } from "./middleware/authMiddleware.js"


const app = express()
app.use(express.json())

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}))

app.use(clerkMiddleware())


app.get("/", (req: Request, res: Response) => {
  res.json("Product endpoint Works!!")
})

app.get("/test", shouldBeUser, (req: Request, res: Response) => {
  res.json({ message: "Test endpoint works!", userId: req.userId })
})

app.listen(8000, () => {
  console.log("Product service port 8000!")
})
