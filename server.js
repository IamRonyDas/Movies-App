import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

import reviews from "./api/reviews.route.js";
import ReviewsDAO from "./dao/reviewsDAO.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/v1/review", reviews);

// 404 Handler
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

// MongoDB Connection
MongoClient.connect(mongoUri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
})
  .then(async (client) => {
    await ReviewsDAO.injectDB(client);
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1);
  });
