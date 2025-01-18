import React, { useState } from 'react';
import { FcOk } from "react-icons/fc";

const ThankYouMessage = ({ onClose }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg sm:w-72 md:w-96 fixed bottom-5 right-5 z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        ✕
      </button>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2">
        <FcOk className='w-10 h-12'/>
        </div>
        <h2 className="text-xl font-semibold mb-2 mt-2">Thank you!</h2>
        <p className="text-sm text-gray-600 mb-4">
          We will get back to you shortly.
        </p>
        <div className="mt-6 text-center text-sm text-gray-600">
          OR
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Reach out to your Relationship Manager <span className="font-medium">Varun</span>, at{' '}
          <a
            href="tel:+919289218401"
            className="text-indigo-600 hover:underline"
          >
            +91 9289218401
          </a>{' '}
          or{' '}
          <a
            href="mailto:varun.gujral@internshala.com"
            className="text-indigo-600 hover:underline"
          >
            varun.gujral@internshala.com
          </a>
          , available from Mon-Fri, 9:30 AM to 6:30 PM.
        </div>
      </div>
    </div>
  );
};

const CallbackRequest = ({ onClose, onSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg sm:w-72 md:w-96 fixed bottom-5 right-5 z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        ✕
      </button>
      <h2 className="text-xl font-semibold mb-4">Request a callback</h2>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Your phone number
          </label>
          <div className="mt-2 flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-gray-300 bg-gray-100 text-gray-600">
              +91
            </span>
            <input
              type="text"
              id="phone"
              placeholder="9899542780"
              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-r-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            We'll use this number to call you back. Your account details will remain unchanged.
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          Get a callback
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-600">
        OR
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Reach out to your Relationship Manager <span className="font-medium">Varun</span>, at{' '}
        <a
          href="tel:+919289218401"
          className="text-indigo-600 hover:underline"
        >
          +91 9289218401
        </a>{' '}
        or{' '}
        <a
          href="mailto:varun.gujral@internshala.com"
          className="text-indigo-600 hover:underline"
        >
          varun.gujral@internshala.com
        </a>
        , available from Mon-Fri, 9:30 AM to 6:30 PM.
      </div>
    </div>
  );
};

const ChatBot = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      {!isCallbackOpen && !isThankYouVisible && (
        <div
          onClick={() => setIsCallbackOpen(true)}
          className="w-16 h-16 rounded-full text-white bg-[#384241] flex items-center justify-center fixed bottom-5 right-5 cursor-pointer z-50 text-center"
        >
          Need Help?
        </div>
      )}

      {/* Callback Request Component */}
      {isCallbackOpen && !isThankYouVisible && (
        <CallbackRequest
          onClose={() => setIsCallbackOpen(false)}
          onSubmit={() => {
            setIsCallbackOpen(false);
            setIsThankYouVisible(true);
          }}
        />
      )}

      {/* Thank You Message */}
      {isThankYouVisible && (
        <ThankYouMessage
          onClose={() => setIsThankYouVisible(false)}
        />
      )}
    </div>
  );
};

export default ChatBot;
