import express from "express";
import schoolRoute from "./Rotues/schoolRoute.js";
const app = express();

app.use(express.json());

app.use("/api", schoolRoute);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});