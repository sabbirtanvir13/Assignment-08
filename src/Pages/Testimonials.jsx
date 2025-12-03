import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "This platform has completely transformed how I discover and install apps. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sadia Rahman",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "Amazing selection of apps and the free trial made it so easy to test before committing.",
    rating: 4,
  },
  {
    id: 3,
    name: "Rifat Hossain",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    review: "I love the bundles! Got multiple apps at discounted prices. Great value for money.",
    rating: 5,
  },
  {
    id: 4,
    name: "Fatema Akter",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    review: "The interface is clean and user-friendly. Installing apps is now hassle-free.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        What Our Users Say
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg mb-2">{t.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{t.review}</p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.963c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.963a1 1 0 00-.364-1.118L2.037 9.39c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.963z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
