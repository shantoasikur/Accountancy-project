import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 md:px-6 py-6">
      <div className="bg-gray-800 shadow-md rounded-lg p-6 sm:p-8 w-full max-w-lg md:max-w-2xl">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-white">
          HAVE AN ENQUIRY? <span className="text-gray-400">DROP US A LINE</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname*"
            value={formData.surname}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md h-28 sm:h-32 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-md font-bold text-lg hover:bg-cyan-600 transition"
          >
            SUBMIT MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
