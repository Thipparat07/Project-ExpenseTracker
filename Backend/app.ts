import express from "express";
import { router as index } from "./api/index";
import { router as transactions } from "./api/transactions";
import { connectDB } from "./api/conndb"; // นำเข้า connectDB เป็นฟังก์ชัน
import bodyParser from "body-parser";

export const app = express();

// Middleware
app.use(bodyParser.text());
app.use(bodyParser.json());

// เชื่อมต่อฐานข้อมูล
(async () => {
    try {
        await connectDB();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
})();

app.use("/", index);
app.use("/transactions", transactions);
