import express, { json } from "express";
import novelRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000 ;
dotenv.config();

app.use(cors({
  origin : "http://localhost:5173"
}))
app.use(express.json());

app.use("/api/notes", novelRoutes);
app.use("/", (req, res) => {
  res.status(200).send("The Server Is On");
});

connectDB().then(()=>{
  app.listen(PORT, () => {
  console.log("The Server is running on PORT 5000");
})})
