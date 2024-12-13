import React from "react";

const ContactUs = () => {
    console.log("Navigating to Contact Us");
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">CONTACT US</h1>
        <p className="text-gray-600 mt-2">
          A member of our team will get back to you shortly.
        </p>
      </div>

      {/* Form Section */}
      <form className="w-full max-w-lg mt-2">
        <div className="flex flex-col space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full border  rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none outline-none "
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Phone Input */}
          <div>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Company Input */}
          <div>
            <input
              type="text"
              id="company"
              placeholder="Enter your company name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            SEND
          </button>

          {/* Privacy Policy */}
          <p className="text-xs text-gray-500 mt-4">
            We will process your personal information in accordance with our Privacy Policy. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </form>

      {/* Footer Section */}
      <div className="w-full bg-teal-300 py-8 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-center md:text-left space-y-4 md:space-y-0">
          {/* Information Section */}
          <div>
            <h3 className="font-semibold text-gray-800">Information</h3>
            <ul className="text-gray-700 mt-2">
              <li>Privacy Policy</li>
              <li>Press Kit</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-800">Follow Us</h3>
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
            <h3 className="font-semibold text-gray-800">Contact Us</h3>
            <ul className="text-gray-700 mt-2">
              <li>+1 (646) 980 6348</li>
              <li>Trillion Technology LLC 16192</li>
              <li>Coastal Highway, Lewes, DE 19958</li>
              <li>info@trillion.jewelry</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
