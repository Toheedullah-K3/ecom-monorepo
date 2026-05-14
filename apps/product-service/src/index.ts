import express, { Request, Response } from "express"
import cors from "cors"
import { clerkMiddleware, getAuth } from '@clerk/express'


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

app.get("/test", (req: Request, res: Response) => {
  const auth = getAuth(req)

  if (!auth.isAuthenticated) {
    return res.status(401).send('User not authenticated')
  }
  console.log("Authenticated user:", auth)
  return res.json(auth)
})

app.listen(8000, () => {
  console.log("Product service port 8000!")
})
