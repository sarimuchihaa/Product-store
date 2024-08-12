import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from './routes/product.route.js';
import path from "path";

dotenv.config();

app.use(express.json()); // allows us to accept JSON data in req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Port http://localhost:" + PORT);
})

// Deployment
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") 
{
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}