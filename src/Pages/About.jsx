import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-100 rounded-2xl p-8 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          alt="community"
          className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
        />
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
            About HERO.IO
          </h1>
          <p className="text-gray-700 mb-4 text-lg">
            HERO.IO is a social platform built to bring people closer together.
            Connect, share, and grow your community in a safe and interactive environment.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            Discover ideas, interact with like-minded individuals, and participate
            in meaningful conversations. HERO.IO makes social engagement simple and fun.
          </p>
          <p className="text-gray-700 text-lg">
            Join us today and be part of a growing community that values
            collaboration, creativity, and connection.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 text-center shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800">
          Join HERO.IO Today!
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Start connecting with your community, sharing ideas, and making
          meaningful connections effortlessly.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="#"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Get Started
          </a>
          <a
            href="#"
            className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
