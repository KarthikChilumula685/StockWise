import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-section.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Side: Text and CTA */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Track Your Stocks with{" "}
            <span className="text-blue-600">StockWise</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Analyze your investments, monitor gains/losses, and stay updated
            with real-time stock data.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg hover:bg-gray-300 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <img
            src={heroImg}
            alt="Stock Market Graph"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
