import React from "react";
import ntrImg from "../../assets/ntr.jpg";
import prabhasImg from "../../assets/prabhas.jpg";
import ramCharanImg from "../../assets/ram-charan.jpg";

const testimonials = [
  {
    name: "Tarak Rao",
    role: "Finance Student",
    image: ntrImg,
    quote:
      "StockWise made managing my portfolio super easy. The visuals helped me finally understand my gains!",
  },
  {
    name: "Prabhas",
    role: "Full-time Trader",
    image: prabhasImg,
    quote:
      "The real-time prices are accurate and fast. I use StockWise daily to track my swing trades.",
  },
  {
    name: "Ram Charan",
    role: "Beginner Investor",
    image: ramCharanImg,
    quote:
      "As a newbie, I loved how simple and intuitive StockWise is. I now track all my stocks in one place!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-12">What Our Users Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#4F46E5]"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/48";
                  }}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
