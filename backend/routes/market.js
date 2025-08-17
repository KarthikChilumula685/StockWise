// routes/market.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://yh-finance.p.rapidapi.com/market/v2/get-quotes",
      {
        params: { region: "IN", symbols: "^NSEI,^BSESN" },
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
        },
      }
    );
    // Extract only relevant info
    const quotes = response.data.quoteResponse.result.map((item) => ({
      symbol: item.symbol,
      name: item.shortName || item.longName,
      price: item.regularMarketPrice,
      change: item.regularMarketChange,
      changePercent: item.regularMarketChangePercent,
    }));

    res.json({ quotes });
  } catch (error) {
    console.error("Error fetching market data:", error.message);
    res.status(500).json({ error: "Failed to fetch market data" });
  }
});

export default router;
