import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
  const offers = [
    {
      title: "50% Off Premium Apps",
      description: "Boost your productivity and entertainment with top apps. Limited time offer!",
      image: "https://t3.ftcdn.net/jpg/05/74/27/66/360_F_574276675_Of3LJ0QVNZ5iFTuvxqXxTBwgcV52tc5c.jpg",
      link: "/50-off"
    },
    {
      title: "7-Day Free Trial",
      description: "Explore all top-rated apps without restrictions. Start your free trial now!",
      image: "https://static.vecteezy.com/system/resources/previews/024/116/576/non_2x/7-days-free-trial-banner-design-7-day-free-banner-background-vector.jpg",
      link: "/free-trial"
    },
    {
      title: "Exclusive Bundle Deals",
      description: "Get multiple apps at a discounted price and maximize your value.",
      image: "https://shop.rlss.org.uk/cdn/shop/collections/Bundle_1520x690_d43fdb05-126c-4da1-8b50-970e2d345bad_1000x400_crop_center.png?v=1740151846",
      link: "/bundle-deals"
    }
  ];

  return (
    <section id="offers" className="py-24 space-y-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Exclusive Offers</h2>

      <div className="space-y-16 max-w-7xl mx-auto">
        {offers.map((offer, idx) => (
          <div 
            key={idx} 
            className="relative group overflow-hidden rounded-3xl"
            style={{ minHeight: "300px" }}
          >
            <img 
              src={offer.image} 
              alt={offer.title} 
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 flex flex-col justify-center items-start p-10 md:p-20">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{offer.title}</h3>
              <p className="text-white text-lg md:text-xl mb-6 max-w-lg">{offer.description}</p>
              <Link 
                to={offer.link} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
