import React from "react";
import pic from '../assets/pic1.png'
import Calendar from "./Calender";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-10  dark:bg-gray-900 dark:text-gray-200">
      {/* Responsive Flex/Grid Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Left Content Section */}
        <div className="w-full md:w-2/3 space-y-5">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            @ H & S Accountancy, we work closely with our clients, establish & maintain
            a solid reputation for quality & value by providing complete bookkeeping & accountancy service.
          </h2>

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Why Choose Us:</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We believe that owners of Small & Medium-Sized Enterprises (SME) should have a better understanding
            of their business’s activities, finance & financial drivers. Our consultants are happy to listen and 
            learn about your business to enable us to design an accounting solution especially for you.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc text-gray-700 dark:text-gray-400 pl-5">
            <li>Approachable bookkeepers & accountants</li>
            <li>Team of experienced professionals</li>
            <li>Offer wide range of services at competitive prices</li>
            <li>Tailor-made service according to client’s needs & satisfaction</li>
            <li>Construct a strong relationship with our clients</li>
          </ul>
        </div>

        {/* Right Sidebar Section */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Image */}
          <img src={pic} alt="Mission & Vision" className="w-full rounded-lg shadow-md" />

          <Calendar />

          {/* Latest News */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 border-b-2 pb-2 dark:border-gray-700">LATEST NEWS</h3>
            <ul className="mt-2 text-gray-700 dark:text-gray-400 space-y-3">
              <li>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline block">
                  Coronavirus (COVID-19): What To Do If You’re Self-Employed And Getting Less Work Or No Work
                </a>
                <p className="text-gray-500 dark:text-gray-500 text-sm">April 12, 2020</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline block">
                  New Rules For Taxation Of Termination Payments
                </a>
                <p className="text-gray-500 dark:text-gray-500 text-sm">April 9, 2018</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline block">
                  Income Tax When You Let Property
                </a>
                <p className="text-gray-500 dark:text-gray-500 text-sm">April 9, 2018</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline block">
                  Income Tax And National Insurance Contributions: Treatment Of Termination Payments
                </a>
                <p className="text-gray-500 dark:text-gray-500 text-sm">April 4, 2018</p>
              </li>
            </ul>
          </div>

          {/* Client's View */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 border-b-2 pb-2 dark:border-gray-700">WHAT IS OUR CLIENT’S VIEW:</h3>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              <span className="text-green-600 dark:text-green-400 font-bold">Excellent service</span> & eager to listen to clients' needs. "Value for money"
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
