import express from "express"
import cors from "cors"


const app = express()
app.use(express.json())

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}))


app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(8000, () => {
  console.log("Server is listening on port 8000!")
})
