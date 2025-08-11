import React from "react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center bg-[#F9FAFB] p-10 rounded-xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Ready to take control of your investments?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Log in to StockWise and start tracking your portfolio with confidence and clarity.
        </p>
        <Link
          to="/login"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login to Your Account
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
