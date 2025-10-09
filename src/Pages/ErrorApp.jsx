import React from 'react';

const ErrorApp = () => {
    return (
       <div className="text-center mt-20">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4">App Not Found</h2>
      <p className="mt-2 text-gray-600">The app you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-block px-6 py-3 bg-[#00D390] text-white rounded-lg hover:bg-[#00b67a]">
        Back to Home
      </Link>
    </div>
    );
};

export default ErrorApp;