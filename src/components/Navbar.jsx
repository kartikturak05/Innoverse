import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react'; // Icons for dark mode toggle

const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleNavigation = (hash) => {
    if (window.location.pathname === '/') {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const handleAboutUs = () => {
    navigate("/AboutUs");
  };

  return (
    <nav className={`${darkMode ? 'bg-gray-900' : 'bg-[#384241]'} text-white cursor-grab fixed w-full z-10`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Connex Logo" className="h-12 sm:h-16 md:h-20 lg:h-24 mr-2" />
          </div>

          <div className="flex space-x-4 sm:space-x-4 md:space-x-8 lg:space-x-12 text-sm sm:text-base md:text-lg font-semibold">
            <a className="hover:text-gray-400 cursor-pointer" onClick={() => handleNavigation('#home')}>Home</a>
            <a className="hover:text-gray-400 cursor-pointer" onClick={handleAboutUs}>About Us</a>
            <a className="hover:text-gray-400 cursor-pointer" onClick={() => handleNavigation('#company-overview')}>Products</a>
            <a className="hover:text-gray-400 cursor-pointer" onClick={() => handleNavigation('#services')}>Services</a>
            <a className="hover:text-gray-400 cursor-pointer" onClick={() => handleNavigation('#OurClients')}>Clientele</a>
            <a className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/Careers')}>Carriers</a>
            <a className="hover:text-gray-400 cursor-pointer" onClick={() => handleNavigation('#contact-us')}>Contact Us</a>
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600">
              {darkMode ? <Sun className="text-yellow-400" size={25} /> : <Moon className="text-white" size={25} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
