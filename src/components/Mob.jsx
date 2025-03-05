import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';  // You need to import useNavigate here


const Mob = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

  const handleNavigation = (hash) => {
    toggleDrawer();  // Close the drawer when a link is clicked
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


    return (
        <div className='bg-[#384241] text-white cursor-grab fixed w-full z-20 flex items-center justify-between h-16 sm:h-20' >
            {/* Toggle Button */}
            <button className='z-[999] relative m-3  cursor-grab ' onClick={toggleDrawer}>
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Logo section */}
            <div className="flex items-center">
                <img
                    src="/logo.png"
                    alt="Innoverse Logo"
                    className="h-16 sm:h-16 md:h-20 lg:h-24 mr-2"
                />
            </div>

            {/* AnimatePresence for smooth mounting and unmounting */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }} // Animation starts off-screen
                        animate={{ x: 0 }}       // Animates to visible
                        exit={{ x: '-100%' }}    // Exits off-screen
                        transition={{ duration: 0.3 }} // Animation duration
                        className='fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] text-white p-6  cursor-grab'
                    >
                        <ul>
                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={() => handleNavigation('#home')} ><a href="#home">Home</a></li>
                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={() => handleNavigation('#company-overview')} > <a href="#company-overview" >Products</a> </li>
                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={() => handleNavigation('#services')} >  <a href="#services" >Services</a> </li>

                            {/* <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={() =>{ 
                              toggleDrawer();
                              navigate('/FAQ')
                              }} >  <a onClick={()=> navigate('/FAQ')} >FAQs</a> </li> */}

                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={() => handleNavigation('#OurClients')} >  <a href="#OurClients" >Clientele</a> </li>
                           <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={() =>{ 
                              toggleDrawer();
                              navigate('/Careers')
                              }} >  <a onClick={()=> navigate('/Careers')} >Careers</a> </li>
                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold'  onClick={() => handleNavigation('#contact-us')} > <a href="#contact-us" >Contact Us</a>  </li>

                        </ul>
                        {/* Horizontal Line */}
                        <span className='block w-full h-[2px] bg-gray-600 mt-6'></span>


                        <div className='flex flex-row justify-between ml-5 mr-10 mt-5  cursor-grab'>
                            <a href="#" className='w-[4px] h-[4px] p-3 '><FaInstagram size={25} /></a>
                            <a href="#" className='w-[4px] h-[4px] p-3 '><CiLinkedin size={25} /></a>
                            <a href="#" className='w-[4px] h-[4px] p-3 '> <PiFacebookLogoDuotone size={25} /></a>
                            <a href="#" className='w-[4px] h-[4px] p-3 '><PiYoutubeLogo size={25} /></a>


                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Mob;
