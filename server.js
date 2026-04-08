import express from "express";
import connectDB from "./config/db.js";
import schoolRoute from "./Rotues/schoolRoute.js";
const app = express();

app.use(express.json());

app.use("/api", schoolRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});