import React from "react";
import stockImg from "../assets/stocklap.jpg";
import NavBar from "../components/layout/Navbar";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gray-50 min-h-screen px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Page Heading */}
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            About <span className="text-blue-600">StockWise</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            StockWise is your all-in-one platform to track your investments,
            monitor live stock prices, and analyze your portfolio with ease. We
            aim to make investing simple, insightful, and accessible for
            everyone.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t-4 border-amber-500 w-20 mx-auto my-10 rounded-full"></div>

        {/* Mission Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower individuals to make informed investment
              decisions by providing clear insights, real-time market data, and
              intuitive portfolio management tools. Whether you are a beginner
              or an experienced trader, StockWise offers features tailored to
              your needs.
            </p>
          </div>
          <img
            src={stockImg}
            alt="Stock Analysis"
            className="rounded-lg shadow-lg border border-gray-200 object-cover 
          max-w-sm mx-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-16"></div>

        {/* Values Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Transparency",
                desc: "We believe in clear, honest, and accurate information to help you make the best investment choices.",
              },
              {
                title: "Innovation",
                desc: "We continuously improve our tools to match the dynamic nature of financial markets.",
              },
              {
                title: "User Focus",
                desc: "Your success is our priority — we design StockWise to be intuitive, responsive, and powerful.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
