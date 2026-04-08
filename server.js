import express from "express";
import schoolRoute from "./Rotues/schoolRoute.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", schoolRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));