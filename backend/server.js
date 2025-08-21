
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
import authRoutes from './routes/authRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import connectDB from './config/connectDB.js';

dotenv.config({ path: './.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', portfolioRoutes);

// Add this new route to fetch indices data
let cache = null;
let cacheTime = 0;
const CACHE_DURATION = 60 * 1000; // 60 seconds cache







//IDHI ROUTER ROUTES LO ESI CHEYYU RAA gorre 


app.get('/api/indices', async (req, res) => {
  // Serve from cache if fresh
  if (cache && (Date.now() - cacheTime) < CACHE_DURATION) {
    return res.json(cache);
  }

  try {
    const options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
  params: { region: 'IN', symbols: '^NSEI,^BSESN,^NSEBANK' },
  headers: {
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
  },
};

    const response = await axios.request(options);

    const results = response.data.quoteResponse.result;

    // Map results to desired format
    const data = results.map(quote => ({
      symbol: quote.symbol,
      name:
        quote.symbol === '^NSEI' ? 'NIFTY 50' :
        quote.symbol === '^BSESN' ? 'SENSEX' :
        'BANK NIFTY',
      price: quote.regularMarketPrice || null,
      changePercent: quote.regularMarketChangePercent || null,
    }));

    // Cache response
    cache = data;
    cacheTime = Date.now();

    res.json(data);
  } catch (error) {
    console.error('Error fetching indices:', error.message);
    res.status(500).json({ error: 'Failed to fetch indices data' });
  }
});

// MongoDB Connection and Server Start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB connection error:", err));
