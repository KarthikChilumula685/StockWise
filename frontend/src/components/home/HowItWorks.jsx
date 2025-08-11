import React from "react";
import { motion } from "framer-motion";

// Replace with your actual image path
// const dashboardImg = "/images/dashboard-preview.png";

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Animated Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* <img
            src={dashboardImg}
            alt="StockWise Dashboard Preview"
            className="w-full h-auto rounded-lg shadow-xl"
          /> */}
        </motion.div>

        {/* Right: Steps */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-6">How StockWise Works</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-1">1️⃣ Add Your Investments</h3>
              <p className="text-sm">Sign up and easily enter the stocks you’ve purchased with quantity and price.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">2️⃣ Live Market Tracking</h3>
              <p className="text-sm">StockWise fetches live stock prices from trusted APIs, updating your portfolio instantly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">3️⃣ Visualize Your Growth</h3>
              <p className="text-sm">Get real-time performance charts, gains/losses, and smart insights to track your journey.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
