import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", userRoutes);
app.listen(port, () => console.log(`server is running on ${port}`));

app.get("/", (req, res) => res.json("hello world"));
app.all("*", (req, res) => res.send("file not found"));
