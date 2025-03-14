import React, { useState } from "react";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  // Generate Calendar Days
  const daysArray = [];
  for (let i = 0; i < firstDayIndex; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    setCurrentYear((prev) => (currentMonth === 0 ? prev - 1 : prev));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    setCurrentYear((prev) => (currentMonth === 11 ? prev + 1 : prev));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow w-full">
      <div className="flex justify-between items-center mb-2">
        <button onClick={handlePrevMonth} className="text-gray-600 hover:text-gray-900">&lt;</button>
        <h3 className="text-lg font-semibold text-gray-700">
          {months[currentMonth]} {currentYear}
        </h3>
        <button onClick={handleNextMonth} className="text-gray-600 hover:text-gray-900">&gt;</button>
      </div>

      <table className="w-full text-gray-600 text-sm">
        <thead>
          <tr className="text-center font-semibold">
            <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(Math.ceil(daysArray.length / 7))].map((_, rowIndex) => (
            <tr key={rowIndex} className="text-center">
              {daysArray.slice(rowIndex * 7, (rowIndex + 1) * 7).map((day, index) => (
                <td key={index} className={`p-2 ${day ? "text-black" : "text-gray-400"}`}>
                  {day || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
