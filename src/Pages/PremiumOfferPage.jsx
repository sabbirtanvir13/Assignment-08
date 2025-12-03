

import React from "react";
import { Link } from "react-router-dom";
import useApps from "../hooks/useApps";

const PremiumOfferPage = () => {
  const { apps, loading, error } = useApps();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-4 text-xl font-semibold text-gray-600">Loading offers...</p>
      </div>
    );

  if (error) return <p className="text-center mt-10 text-red-500">Error loading offers!</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Exclusive Offers</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {apps.slice(0, 4).map((offer) => (
          <div
            key={offer.id}
            className="relative overflow-hidden rounded-3xl shadow-lg group hover:shadow-2xl transition-all"
            style={{ minHeight: "280px" }}
          >
            {/* Sticker */}
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
              {offer.sticker || "50% Off"} {/* ডিফল্ট স্টিকার */}
            </div>

            {/* Image */}
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 flex flex-col justify-center items-start p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{offer.title}</h3>
              <p className="text-white text-sm md:text-base max-w-xs">{offer.description}</p>
              <Link to={offer.link} className="hidden">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumOfferPage;
