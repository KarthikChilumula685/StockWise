import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/layout/NavBar";

// shadcn components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const Portfolio = () => {
  const [indices, setIndices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyPortfolio = [
    { symbol: "TCS", name: "Tata Consultancy Services", quantity: 10, avgPrice: 3400, currentPrice: 3550 },
    { symbol: "INFY", name: "Infosys", quantity: 15, avgPrice: 1450, currentPrice: 1390 },
    { symbol: "RELI", name: "Reliance Industries", quantity: 8, avgPrice: 2450, currentPrice: 2600 },
    { symbol: "HDFCB", name: "HDFC Bank", quantity: 20, avgPrice: 1600, currentPrice: 1585 },
  ];

  // 📊 Portfolio summary calculations
  const totalInvestment = dummyPortfolio.reduce((acc, stock) => acc + stock.quantity * stock.avgPrice, 0);
  const totalCurrentValue = dummyPortfolio.reduce((acc, stock) => acc + stock.quantity * stock.currentPrice, 0);
  const netPnL = totalCurrentValue - totalInvestment;
  const netPnLPercent = (netPnL / totalInvestment) * 100;

  useEffect(() => {
    const fetchIndices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/indices");
        setIndices(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch market data");
        setLoading(false);
      }
    };

    fetchIndices();
  }, []);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
              📊
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Portfolio Overview
              </span>
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              Track your indices in real-time with{" "}
              <span className="text-blue-600 font-semibold">StockWise</span>
            </p>
          </div>

          {/* Error */}
          {error && <p className="text-center text-red-500 text-lg mt-10">{error}</p>}

          {/* Indices Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">📈 Market Indices</h2>
            {loading ? (
              // Skeleton Loader
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-6 shadow-lg rounded-2xl bg-white border-0 animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {indices.map(({ symbol, name, price, changePercent }) => (
                  <Card
                    key={symbol}
                    className="p-6 shadow-lg rounded-2xl bg-white border-0 transition-transform transform hover:scale-105 hover:shadow-2xl"
                  >
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {name}
                        <span className="text-gray-500 text-base ml-2">({symbol})</span>
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className={`text-sm font-semibold ${
                          changePercent >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {changePercent >= 0 ? "Gain" : "Loss"}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg mb-2">
                        Price:{" "}
                        <span className="font-mono font-bold text-xl text-gray-800">
                          ₹{price !== null ? price.toFixed(2) : "N/A"}
                        </span>
                      </p>
                      <p className="text-lg">
                        Change:{" "}
                        <span
                          className={`font-extrabold text-xl ${
                            changePercent >= 0 ? "text-green-700" : "text-red-700"
                          }`}
                        >
                          {changePercent !== null ? changePercent.toFixed(2) : "N/A"}%
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Personal Portfolio */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Your Portfolio
            </h2>

            {/* Portfolio Summary */}
            <div className="mb-12 grid md:grid-cols-3 gap-6 text-center">
              <Card className="p-6 shadow-lg rounded-2xl bg-white border-0 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Investment</h3>
                <p className="text-2xl font-extrabold text-gray-900">₹{totalInvestment.toFixed(2)}</p>
              </Card>
              <Card className="p-6 shadow-lg rounded-2xl bg-white border-0 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Current Value</h3>
                <p className="text-2xl font-extrabold text-gray-900">₹{totalCurrentValue.toFixed(2)}</p>
              </Card>
              <Card
                className={`p-6 shadow-lg rounded-2xl border-0 transition-transform transform hover:scale-105 hover:shadow-2xl ${
                  netPnL >= 0 ? "bg-green-50" : "bg-red-50"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  {netPnL >= 0 ? "Net Profit" : "Net Loss"}
                </h3>
                <p className={`text-2xl font-extrabold ${netPnL >= 0 ? "text-green-700" : "text-red-700"}`}>
                  ₹{netPnL.toFixed(2)} ({netPnLPercent.toFixed(2)}%)
                </p>
              </Card>
            </div>

            {/* Stock Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dummyPortfolio.map(({ symbol, name, quantity, avgPrice, currentPrice }) => {
                const investment = quantity * avgPrice;
                const currentValue = quantity * currentPrice;
                const pnl = currentValue - investment;
                const changePercent = (pnl / investment) * 100;

                return (
                  <Card
                    key={symbol}
                    className="p-6 shadow-lg rounded-2xl bg-white border-0 transition-transform transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {name} <span className="text-gray-500 text-base">({symbol})</span>
                      </h3>
                      <Badge
                        className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          pnl >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {pnl >= 0 ? "Profit" : "Loss"}
                      </Badge>
                    </div>
                    <div className="mb-4">
                      <p className="text-lg text-gray-600">Current Price</p>
                      <p className="text-2xl font-extrabold text-gray-900">₹{currentPrice.toFixed(2)}</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-lg text-gray-600">P&L</p>
                      <p className={`text-2xl font-extrabold ${pnl >= 0 ? "text-green-600" : "text-red-600"}`}>
                        ₹{pnl.toFixed(2)} ({changePercent.toFixed(2)}%)
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                      <div>
                        <p className="font-medium">Quantity</p>
                        <p>{quantity}</p>
                      </div>
                      <div>
                        <p className="font-medium">Avg Price</p>
                        <p>₹{avgPrice}</p>
                      </div>
                      <div>
                        <p className="font-medium">Investment</p>
                        <p>₹{investment.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="font-medium">Current Value</p>
                        <p>₹{currentValue.toFixed(2)}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
