import React from 'react';
import { useNavigate } from 'react-router-dom';  // You need to import useNavigate here

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (hash) => {
    if (window.location.pathname === '/') {
      // Scroll to the section if already on the HomePage
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Go to the HomePage first, then scroll to the section
      navigate('/');  // This takes you to the HomePage
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const handleAboutUs = ()=>{
    navigate("/AboutUs")
  }

  return (
    <nav className="bg-[#384241] text-white cursor-grab fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Connex Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 mr-2"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 sm:space-x-4 md:space-x-8 lg:space-x-12 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            <a
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => handleNavigation('#home')}
            >
              Home
            </a>
            <a
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => handleAboutUs('#home')}
            >
              About Us
            </a>
            <a
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => handleNavigation('#company-overview')}
            >
              Products
            </a>
            <a
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => handleNavigation('#services')}
            >
              Services
            </a>
            <a
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => handleNavigation('#contact-us')}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
