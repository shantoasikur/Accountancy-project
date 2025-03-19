import React from 'react';

const OurMission = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8 text-center">
          OUR MISSION
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center">
          Our mission is to empower individuals and businesses to achieve financial clarity and success through personalized, innovative, and reliable accounting solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            "We offer tailored solutions for your needs",
            "We believe in honest and expert advice",
            "We understand your business processes",
            "We offer cost-effective services",
            "We know how to face challenges",
            "We look for long-term business relationships",
            "We take responsibility",
            "Your business is important to us",
          ].map((text, index) => (
            <div key={index} className="bg-blue-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">{text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
