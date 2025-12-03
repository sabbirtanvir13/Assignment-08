import React, { useState, useEffect } from "react";
import useApps from "../hooks/useApps";

const FreeTrialPage = () => {
  const { apps, loading, error } = useApps();
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    if (apps.length > 0) setAppList(apps);
  }, [apps]);

  const handleInstall = (app) => {
    alert(`${app.title} installed successfully!`);
    const existing = JSON.parse(localStorage.getItem("installation") || "[]");
    const isExist = existing.find((p) => p.id === app.id);
    if (!isExist) {
      const updated = [...existing, app];
      localStorage.setItem("installation", JSON.stringify(updated));
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-4 text-xl font-semibold text-gray-600">Loading apps...</p>
      </div>
    );

  if (error) return <p className="text-center mt-10 text-red-500">Error loading apps!</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-32 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">7-Day Free Trial</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Explore all top-rated apps without restrictions. Start your free trial now!
        </p>
      </section>

      {/* Apps List */}
      <section id="apps-list" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Apps Included in Trial</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appList.slice(0, 5).map((app) => (
            <div
              key={app.id}
              className="relative bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              {/* Sticker */}
              <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Free Trial
              </div>

              <img src={app.image} alt={app.title} className="w-24 h-24 object-contain mb-4" />
              <h3 className="font-bold text-xl mb-2">{app.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{app.description}</p>
              <div className="flex justify-between items-center w-full text-sm text-gray-700 mb-4">
                <span>⭐ {app.ratingAvg}</span>
                <span>⬇ {app.downloads}</span>
                <span>{app.size}MB</span>
              </div>
              <button
                onClick={() => handleInstall(app)}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
              >
                Install Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FreeTrialPage;
