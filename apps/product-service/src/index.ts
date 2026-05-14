import express, { Request, Response } from "express"
import cors from "cors"


const app = express()
app.use(express.json())

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}))


app.get("/", (req: Request, res: Response) => {
  res.json("Product endpoint Works!!")
})

app.listen(8000, () => { 
  console.log("Product service port 8000!")
})
