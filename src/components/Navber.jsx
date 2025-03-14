import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGoogle, FaLinkedin, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FiMenu } from "react-icons/fi";
import { ThemeContext } from "../Providers/ThemeContext";


const Navber = () => {
  const { user, logout } = useContext(AuthContext);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanySecretarialOpen, setIsCompanySecretarialOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Top Section */}
      <div className="flex md:justify-end  justify-center items-center p-4 text-center md:text-left">
        <div className="flex space-x-3">
          <a target="_blank" href="https://www.google.co.uk/maps/dir/''/''/@51.5189629,-0.1414672,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48761cb5ecc42131:0x715ecf8928199f76!2m2!1d-0.0714277!2d51.5189838?entry=ttu&g_ep=EgoyMDI1MDIyNi4wIKXMDSoASAFQAw%3D%3D" className="rounded-full border p-2"><FaGoogle /></a>
          <a target="_blank" href="https://hnsaccountancy.com/#" className="rounded-full border p-2"><FaLinkedin /></a>
          <a target="_blank" href="https://hnsaccountancy.com/#" className="rounded-full border p-2"><FaYoutube /></a>
          <a target="_blank" href="https://x.com/" className="rounded-full border p-2"><FaTwitter /></a>
          <a target="_blank" href="https://www.facebook.com/hnsactancy" className="rounded-full border p-2"><FaFacebook /></a>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white text-gray-800 px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="H & S Logo" className="h-14 md:h-16" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">H & S Accountancy</h2>
            <p className="text-green-600 italic text-sm md:text-base">Turning Your Vision into Value</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:flex space-x-10 text-gray-700">
          <div className="flex items-center space-x-2">
            <div className="rounded-full border p-2"><FaPhoneAlt className="text-gray-500" /></div>
            <div>
              <h3 className="font-semibold">CALL SUPPORT</h3>
              <p>020 7112 9327</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <a href="mailto:info@hnsaccountancy.com" className="rounded-full border p-2"><FaEnvelope className="text-gray-500" /></a>
            <div>
              <h3 className="font-semibold">EMAIL SUPPORT</h3>
              <p>info@hnsaccountancy.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-green-500 w-full">
        <nav className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between text-white py-3">
          {/* Menu Button (Mobile) */}
          <div className="md:hidden flex w-full justify-between items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
              <FiMenu />
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className={`md:flex md:space-x-6 ${menuOpen ? "block" : "hidden"} w-full md:w-auto text-center md:text-left`}>
            <NavLink to="/" className="block py-2 md:inline cursor-pointer hover:text-gray-300">HOME</NavLink>
            <NavLink to="/aboutus" className="block py-2 md:inline cursor-pointer hover:text-gray-300">ABOUT US</NavLink>

            {/* SERVICES DROPDOWN */}
            <div className="relative md:static">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="block w-full md:w-auto py-2 md:inline cursor-pointer text-white text-center"
              >
                SERVICES ▼
              </button>

              <div
                className={`absolute z-50 md:static left-0 md:w-auto w-full bg-green-500 text-white rounded-md shadow-lg transition-all duration-300 ${isServicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
                  }`}
              >
                <ul className="p-2 md:w-auto w-full">
                  <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer">
                    <a>Business Plan</a>
                  </li>
                  {/* COMPANY SECRETARIAL DROPDOWN */}
                  <li className="relative">
                    <button
                      onClick={() => setIsCompanySecretarialOpen(!isCompanySecretarialOpen)}
                      className="w-full text-center items-center py-2 px-4 border-b hover:bg-gray-200 cursor-pointer"
                    >
                      Company Secretarial {isCompanySecretarialOpen ? "▲" : "▼"}
                    </button>
                    <div
                      className={`md:absolute md:left-full md:top-0 w-full md:w-auto bg-green-600 text-white rounded-md shadow-md transition-all duration-300 ${isCompanySecretarialOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
                        }`}
                    >
                      <ul className="p-2 md:w-auto w-full">
                        <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer">
                          <a>Company Formation</a>
                        </li>
                        <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer">
                          <a>Capital & Share Re-Organisation</a>
                        </li>
                        <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer">
                          <a>Company Re-Organisation</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer"><a>Payroll</a></li>
                  <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer"><a>VAT</a></li>
                  <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer"><a>Management Accounts</a></li>
                  <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer"><a>Financial Accounts</a></li>
                  <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer"><a>Distribution</a></li>
                  <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer"><a>Striking Off & Restoration</a></li>
                  <li className="border-b py-2 px-4 hover:bg-gray-200 cursor-pointer"><a>Personal Tax</a></li>
                  <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer"><a>Outsourcing</a></li>
                </ul>
              </div>
            </div>

            <NavLink to="/contactus" className="block py-2 md:inline cursor-pointer hover:text-gray-300">CONTACT US</NavLink>
            <NavLink to="/feedback" className="block py-2 md:inline cursor-pointer hover:text-gray-300">FEEDBACK</NavLink>
          </ul>

          {/* Dark Mode Toggle Button */}


          {/* Authentication Buttons */}
          <div className="ml-auto flex items-center gap-2">
            <button onClick={toggleDarkMode} className="btn bg-green-500 hover:bg-green-300 border-2 border-white text-white font-bold  dark:text-white" style={{
              backgroundColor: isDarkMode ? "black" : "white",
              color: isDarkMode ? "white" : "black",
            }}>
              {isDarkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
            {user && user?.email ? (
              <div className="flex items-center gap-2">

                <ReactTooltip id="user-tooltip" place="bottom" />
                <button onClick={handleLogout} className="btn bg-green-500 hover:bg-green-300 border-2 border-white text-white font-bold">
                  Sign Out
                </button>
              </div>
            ) : (
              <Link to="/auth/login" className="btn bg-green-500 hover:bg-green-300 border-2 border-white text-white font-bold">
                Sign In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navber;
