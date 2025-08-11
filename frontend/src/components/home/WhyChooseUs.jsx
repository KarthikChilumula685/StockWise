import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Why Choose StockWise?</h2>
        <p className="text-gray-600 text-lg mb-12">
          Stay in control of your financial future with powerful tools and a simple interface.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Investments</h3>
            <p className="text-gray-600 text-sm">
              Monitor all your stock purchases and performance in one place.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4">🔁</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Prices</h3>
            <p className="text-gray-600 text-sm">
              Get the latest stock prices directly from reliable financial APIs.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visual Analytics</h3>
            <p className="text-gray-600 text-sm">
              Visualize your portfolio’s growth using graphs and charts.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Access</h3>
            <p className="text-gray-600 text-sm">
              Role-based authentication keeps your investments secure and private.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
