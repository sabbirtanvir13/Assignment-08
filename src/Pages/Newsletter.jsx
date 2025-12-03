import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
   
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-2xl max-w-7xl mx-auto text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Join Our Newsletter</h2>
        <p className="text-indigo-200 mb-8">
          Stay updated with the latest apps, exclusive offers, and free trials. Subscribe now!
        </p>

        {submitted && (
          <p className="mb-4 text-green-400 font-semibold">Thank you for subscribing! 🎉</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-white flex-1"
            required
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
