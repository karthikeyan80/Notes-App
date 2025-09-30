import express, { json } from "express";
import novelRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", novelRoutes);
app.use("/", (req, res) => {
  res.status(200).send("The Server Is On");
});

app.listen(5000, () => {
  console.log("The Server is running on PORT 5000");
});
