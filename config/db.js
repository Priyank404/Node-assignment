import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connectDB = mysql.createPool(process.env.DB_URL);


export default connectDB;