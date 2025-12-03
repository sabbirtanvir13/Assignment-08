import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bundel = () => {
  const bundles = [
    {
      id: 1,
      title: "Social Media Bundle",
      image: "https://b4151260.smushcdn.com/4151260/wp-content/uploads/2024/04/Content-Blog-Banner_Q1-2024_1125x600_129_Social-Media-Icons.png?lossy=1&strip=1&webp=1",
      description: "Facebook, Instagram, and WhatsApp all together at a discounted price.",
      price: "$9.99",
    },
    {
      id: 2,
      title: "Productivity Bundle",
      image: "https://i.pinimg.com/736x/ee/8f/b3/ee8fb3cd5c46eb8d7cc0348d4ca17942.jpg",
      description: "Evernote, Trello, and Notion combined for efficient workflow.",
      price: "$14.99",
    },
    {
      id: 3,
      title: "Entertainment Bundle",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6w0bwbpW7LjVl_BZrURwfWDbiMSCktGjZXg&s",
      description: "Spotify, YouTube, and TikTok at one discounted package.",
      price: "$12.99",
    }
  ];

  const [selectedBundle, setSelectedBundle] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-purple-600 text-white py-32 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Bundle Deals</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Get multiple apps at a discounted price and maximize your value.
        </p>
        <Link
          to="#bundle-list" 
          className="inline-block bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Explore Bundles
        </Link>
      </section>

      {/* Bundle List */}
      <section id="bundle-list" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Available Bundles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition relative">
              <img 
                src={bundle.image} 
                alt={bundle.title} 
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="font-bold text-xl mb-2">{bundle.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{bundle.description}</p>
              <p className="text-indigo-600 font-semibold text-lg mb-4">{bundle.price}</p>
              <button
                onClick={() => setSelectedBundle(bundle)}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
              >
                Grab Bundle
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-purple-50 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Maximize Your Value!</h2>
        <p className="text-gray-700 mb-6">Don't miss out on these exclusive bundle deals. Save money while enjoying multiple apps.</p>
        <Link 
          to="#bundle-list" 
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition"
        >
          Claim Bundle
        </Link>
      </section>

      {/* Modal */}
      {selectedBundle && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 w-11/12 max-w-md relative">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
              onClick={() => setSelectedBundle(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedBundle.title}</h3>
            <p className="text-gray-700 mb-6">{selectedBundle.description}</p>
            <p className="text-indigo-600 font-semibold text-lg mb-6">{selectedBundle.price}</p>

            {/* Payment form (dummy) */}
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Card Number" 
                className="w-full border rounded p-2"
              />
              <input 
                type="text" 
                placeholder="Card Holder Name" 
                className="w-full border rounded p-2"
              />
              <input 
                type="text" 
                placeholder="Expiry Date" 
                className="w-full border rounded p-2"
              />
              <input 
                type="text" 
                placeholder="CVV" 
                className="w-full border rounded p-2"
              />
              <button 
                type="submit" 
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Payment for ${selectedBundle.title} successful!`);
                  setSelectedBundle(null);
                }}
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bundel;
