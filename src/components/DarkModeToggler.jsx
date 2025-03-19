import React from 'react';
import { useDarkMode } from '../Providers/ThemeContext';

const DarkModeToggler = () => {
    const { darkMode, setDarkMode } = useDarkMode(); // Change `setdarkMode` to `setDarkMode`
    
    return (
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)} // Corrected function name
            className='px-4 py-2  cursor-pointer bg-gray-200 dark:bg-white/10 rounded-md transition-all'
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
    );
};

export default DarkModeToggler;
