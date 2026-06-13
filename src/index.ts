import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobs.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", contract: process.env.CONTRACT_ID });
});

app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
  console.log(`Escrow backend running on port ${PORT}`);
});

export default app;
