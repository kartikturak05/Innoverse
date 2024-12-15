import React from 'react';

const Navbar = () => {
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
      <div className="flex space-x-4 sm:space-x-4 md:space-x-8 lg:space-x-12 text-sm sm:text-base md:text-xl lg:text-2xl font-semibold">
        <a href="#home" className="hover:text-gray-400">
          Home
        </a>
        <a href="#company-overview" className="hover:text-gray-400">
          Products
        </a>
        <a href="#services" className="hover:text-gray-400">
          Services
        </a>
        <a href="#contact-us" className="hover:text-gray-400">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</nav>

    );
};

export default Navbar;
