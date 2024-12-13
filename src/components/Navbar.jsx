import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Connex Logo"
                            className="h-16 w-16 mr-2"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-12 text-xl ">
                        <a href="#/" className="hover:text-gray-400">
                            Home
                        </a>
                   <a href="#company-overview" className="hover:text-gray-400">
                            Products
                        </a>
                      <a href="#services" className="hover:text-gray-400 flex items-center">
                            <span className="mr-1">Services</span>
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
