import express from "express";
import schoolRoute from "./Rotues/schoolRoute.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", schoolRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});