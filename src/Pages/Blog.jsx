import React, { useState } from 'react';

const Blog = () => {
  const posts = [
    { 
      title: "How to choose the best apps?", 
      date: "Dec 4, 2025", 
      image: "https://images.unsplash.com/photo-1581091870623-ef7b6de0ef34?auto=format&fit=crop&w=800&q=80",
      content: "Choosing the best apps requires understanding your needs, reading reviews, checking ratings, and considering app size and permissions. Always download from official app stores to ensure safety."
    },
    { 
      title: "Top 10 trending apps this week", 
      date: "Dec 2, 2025", 
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
      content: "This week, trending apps include social media, productivity tools, and entertainment apps. Some apps are gaining popularity due to new features, while others trend due to viral content or challenges."
    },
    { 
      title: "Tips to save storage on your phone", 
      date: "Nov 28, 2025", 
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
      content: "To save storage, delete unused apps, clear cache, move photos/videos to cloud storage, and avoid keeping duplicate files. Regularly reviewing your storage can help maintain phone performance."
    }
  ];

  // Track which posts are expanded
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (idx) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="blog" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Latest Blog Posts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Blog Image */}
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />

            {/* Blog Content */}
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2 text-gray-800">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>

              {/* Conditional content */}
              <p className="text-gray-600 text-sm mb-4">
                {expanded[idx] ? post.content : `${post.content.slice(0, 100)}...`}
              </p>

              <button 
                className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
                onClick={() => toggleReadMore(idx)}
              >
                {expanded[idx] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
