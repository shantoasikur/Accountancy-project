import React from "react";

const services = [
  [
    "Bookkeeping",
    "Financial Accounting & Accounts Preparation for sole traders and partnerships",
    "Payroll",
    "Financial Accounting & Accounts Preparation for statutory purposes",
    "Management Accounting",
  ],
  [
    "Computerised Accountancy Systems",
    "Independent Examination",
    "Budgeting and Forecasting",
    "Value Added Tax",
    "Business Income Tax",
  ],
  [
    "Personal Income Tax",
    "Corporation Tax",
    "Capital Gains Tax",
    "Inheritance Tax",
    "Company Secretarial Services (Trust or Company Services Provider (TCSP))",
  ],
];

const ProfessionalServices = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#05254d] text-gray-900 dark:text-white py-12 px-8">
      <h2 className="text-center text-3xl font-bold text-green-500 mb-6">
        OUR PROFESSIONAL SERVICES INCLUDE:
      </h2>
      <div className="flex flex-wrap justify-center mb-6 gap-12">
        {services.map((column, index) => (
          <div
            key={index}
            className="border-l-2 border-green-500 pl-6 mb-6 w-full sm:w-1/2 md:w-1/3"
          >
            <ul className="list-disc list-inside space-y-2">
              {column.map((service, i) => (
                <li key={i} className="text-lg">{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalServices;
