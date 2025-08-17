import React from "react";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  DollarSign,
} from "lucide-react";
import NavBar from "@/components/layout/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
        {/* Page Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-3">
            <BarChart3 className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Dashboard Overview
            </h1>
          </div>
          <p className="text-gray-600 text-lg mt-2">
            Manage and analyze your stocks in real-time with{" "}
            <span className="font-semibold text-blue-600">StockWise</span>
          </p>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Investment</p>
              <h2 className="text-2xl font-semibold">₹1,07,350</h2>
            </div>
            <DollarSign className="text-blue-600 w-10 h-10" />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Current Value</p>
              <h2 className="text-2xl font-semibold">₹1,08,850</h2>
            </div>
            <TrendingUp className="text-green-600 w-10 h-10" />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
            <div>
              <p className="text-gray-500">Net Profit</p>
              <h2 className="text-2xl font-semibold text-green-600">
                ₹1,500 (1.40%)
              </h2>
            </div>
            <TrendingDown className="text-red-500 w-10 h-10" />
          </div>
        </div>

        {/* Portfolio Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">
              Portfolio Allocation
            </h2>
            <div className="flex justify-center">
              {/* Placeholder Pie Chart */}
              <PieChart className="w-40 h-40 text-blue-500" />
            </div>
            <p className="text-center text-gray-500 mt-3">
              Stocks • Mutual Funds • ETFs
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">
              Recent Activity
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Bought TCS - ₹10,000</li>
              <li>✅ Bought Reliance - ₹5,000</li>
              <li>❌ Sold Infosys - ₹8,000</li>
              <li>📈 Dividend from HDFC Bank - ₹500</li>
            </ul>
          </div>
        </div>

        {/* Market Trends Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-10">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Market Trends
          </h2>
          <div className="flex justify-center">
            {/* Placeholder Bar Chart */}
            <BarChart3 className="w-60 h-40 text-green-500" />
          </div>
          <p className="text-center text-gray-500 mt-3">
            Real-time stock movement overview
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
