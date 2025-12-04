import React from "react";

const Support = () => {
  return (
    <div className="max-w-4xl  mx-auto p-6">

      <img 
        src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-professional-stylish-asian-businesswoman-fixing-project-her-way-office-using-laptop-standing-whtie-background_1258-59124.jpg" 
        alt="gaming" 
        className="rounded-xl mb-6 shadow-lg"
      />

      <h1 className="text-3xl font-bold mb-4">Support</h1>

      <p className="text-gray-700 mb-4">
        Need help? We're here to assist you.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Game installation issues</li>
        <li>App installation problems</li>
        <li>Login or account errors</li>
        <li>Technical bugs & glitches</li>
      </ul>

      <p className="text-gray-700 mt-4">
        If you need more help, message us from the Contact page.
      </p>
    </div>
  );
};

export default Support;
