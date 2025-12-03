import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 ">

      <img 
        src="https://img.freepik.com/premium-vector/vector-illustration-boy-radio-host-cartoon-scene-with-radio-host-sitting-table-with-microphone-headphones-communicating-online-through-laptop-isolated-white-background_812561-892.jpg" 
        alt="gaming" 
        className="rounded-xl mb-6 shadow-lg"
      />

      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="text-gray-700 mb-6">
        Need help? Feel free to contact us anytime.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full h-32"
        ></textarea>

        <button className="btn bg-primary text-white w-full">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
