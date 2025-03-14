import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Define page routes
  const routes = {
    home: "/",
    aboutus: "/aboutus",
    mission: "/mission",
    contact: "/contactus",
    feedback: "/feedback",
    service: "/services",
  };

  // Convert routes object into an array for filtering
  const routeKeys = Object.keys(routes);

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase().replace(/\s+/g, "");
    setQuery(e.target.value);

    if (input === "") {
      setSuggestions([]);
      return;
    }

    // Filter routes based on input
    const filteredRoutes = routeKeys.filter((route) =>
      route.startsWith(input)
    );

    setSuggestions(filteredRoutes);
  };

  const handleSearch = () => {
    const normalizedQuery = query.toLowerCase().replace(/\s+/g, "");

    if (routes[normalizedQuery]) {
      navigate(routes[normalizedQuery]); // Navigate if match is found
    } else {
      setShowModal(true); // Show modal if no result is found
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black p-6">
      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <div className="flex items-center bg-white rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            className="w-full p-3 text-gray-700 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 p-3 flex items-center justify-center"
          >
            <svg
              className="h-5 w-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 011.546 7.695l4.243 4.242a1 1 0 11-1.415 1.415l-4.242-4.243A4 4 0 118 4zm0 2a2 2 0 100 4 2 2 0 000-4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer text-gray-700"
                onClick={() => {
                  setQuery(item);
                  navigate(routes[item]); // Navigate on selection
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr className="w-full border-gray-600 mt-6" />

      {/* Modal for No Result Found */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center   items-center">
          <div className="w-[70vw] h-[30vw] max-w-[500px] max-h-[500px] bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <p className="text-red-500 text-lg font-semibold">
              No result found
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-6 text-gray-400 text-sm text-center sm:text-left">
        <span>2025 | Developed by React: </span>
        <span className="text-blue-400">Enlighten</span>
      </footer>
    </div>
  );
};

export default Footer;
