import React, { useState } from "react";

const faqs = [
  { question: "What is your return policy?", answer: "You can return any item within 30 days of purchase." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with standard international rates." },
  { question: "How can I track my order?", answer: "Once your order is shipped, you will receive a tracking link via email." },
  { question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, PayPal, and Apple Pay." },
];

const FeedbackPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-gray-900 text-white shadow-lg rounded-lg md:p-8 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full text-left py-3 px-4 text-lg md:text-xl font-semibold flex justify-between items-center hover:bg-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl md:text-2xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-3 text-gray-400 text-sm md:text-base">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
