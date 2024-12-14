import React from "react";

const ContactUs = () => {
  console.log("Navigating to Contact Us");
  return (
    <div className=" min-h-screen flex flex-col items-center cursor-grab"
      style={{
        backgroundImage: "url('/d2.png')",
        backgroundSize: 'cover', // Ensures the image covers the entire background
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling
      }}>
      {/* Header */}
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold text-gray-800">CONTACT US</h1>
        <p className="text-gray-900 mt-3 text-2xl mb-2">
          A member of our team will get back to you shortly.
        </p>
      </div>

      {/* Form Section */}
      <form className="w-full max-w-lg mt-2 mb-10">
        <div className="flex flex-col space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-1 w-full font-semibold"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-2 w-full font-semibold"
            />
          </div>

          {/* Phone Input */}
          <div>
            <input
              type="text"
              placeholder="Phone"
              className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-2 w-full font-semibold"
            />
          </div>

          {/* Company Input */}
          <div>
            <input
              type="text"
              placeholder="Company"
              className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-2 w-full font-semibold"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              type="text"
              placeholder="Message"
              className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-2 w-full font-semibold"
            />
          </div>

          <div className="flex ">
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-bold py-3 rounded-full hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              SEND
            </button>

            {/* Privacy Policy */}
            <p className="text-xs text-gray-500 ml-2">
              We will process your personal information in accordance with our Privacy Policy. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>


        </div>
      </form>

      {/* Footer Section */}
      <div className="w-full bg-[#95B5B6] mt-4 pt-2 relative">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-center md:text-left space-y-4 md:space-y-0">
    {/* Information Section */}
    <div>
      <h1 className="font-bold text-gray-800 text-lg">Information</h1>
      <ul className="text-gray-700 mt-2">
        <li>Privacy Policy</li>
        <li>Press Kit</li>
      </ul>
    </div>

    {/* Social Links */}
    <div>
      <h3 className="font-bold text-gray-800 text-lg">Follow Us</h3>
      <ul className="text-gray-700 mt-2">
        <li>Instagram</li>
        <li>Facebook</li>
        <li>LinkedIn</li>
        <li>Pinterest</li>
        <li>YouTube</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="font-bold text-gray-800 text-lg">Contact Us</h3>
      <ul className="text-gray-700 mt-2">
        <li>+91 70553 59755</li>
        <li>Connex India</li>
        <li>2nd Floor, B 208, Block B, Yojna Vihar, Anand Vihar, Delhi,110092</li>
        <li> metaconnexindia@gmail.com</li>
      </ul>
    </div>
  </div>

  {/* Copyright Text */}
  <div className="absolute bottom-2 left-2 text-gray-700 text-medium">
    © 2024 Connex India . All Rights Reserved
  </div>
</div>

    </div>
  );
};

export default ContactUs;
