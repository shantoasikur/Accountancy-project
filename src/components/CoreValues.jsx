import React from "react";

const coreValues = [
  {
    title: "Integrity and Honesty",
    description:
      "At our accountancy firm, integrity and honesty are not just words—they are the foundation of everything we do. We believe that trust is the most valuable asset in any relationship, and we are committed to earning and maintaining that trust with every client we serve.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "At our firm, a Client-Centric Approach means that you are our top priority. We don’t just provide accounting services; we build partnerships. We take the time to truly understand your business, your financial goals, and your personal aspirations.",
  },
  {
    title: "Excellence and Professionalism",
    description:
      "Excellence and Professionalism are the cornerstones of our firm’s identity. We are committed to delivering services that not only meet but exceed expectations, ensuring every client receives the highest standard of care and precision.",
  },
  {
    title: "Innovation and Adaptability",
    description:
      "Innovation and Adaptability ensure that we stay ahead in a rapidly evolving financial landscape. By leveraging the latest accounting software, automation tools, and data analytics, we provide our clients with real-time insights and strategic advice that drive informed decision-making.",
  },
  {
    title: "Community and Responsibility",
    description:
      "Community and Responsibility are at the heart of who we are. We actively contribute to local initiatives and support causes that matter, making a positive impact in the communities we serve.",
  },
  {
    title: "Respect",
    description:
      "We treat everyone with respect and dignity, fostering an inclusive and supportive environment.",
  },
];

const CoreValues = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 md:px-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-left mb-4">
        Our Beliefs & Core Values
      </h2>
      <hr className="border-gray-600 mb-6" />

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg mb-2">{value.title}</h3>
            <p className="text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
