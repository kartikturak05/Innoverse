import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#384241] text-white cursor-grab fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Connex Logo"
                            className=" h-24 mr-2"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex space-x-12 text-2xl font-semibold">
                        <a href="#home" className="hover:text-gray-400">
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
