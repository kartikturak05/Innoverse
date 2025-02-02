import React, { useState } from "react";
import { FcOk } from "react-icons/fc";
import emailjs from "@emailjs/browser";
import { TfiHeadphoneAlt } from "react-icons/tfi";

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
          <FcOk className="w-10 h-12" />
        </div>
        <h2 className="text-xl font-semibold mb-2 mt-2">Thank you!</h2>
        <p className="text-sm text-gray-600 mb-4">
          We will get back to you shortly.
        </p>
        {/* <div className="mt-6 text-center text-sm text-gray-600">
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
        </div> */}
      </div>
    </div>
  );
};

const CallbackRequest = ({ onSubmit, onClose }) => {
  const [mobileNo, setMobileNo] = useState("");
  const [name, setName] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const templateParams = {
    mobileNo: mobileNo, // Use 'message' as the key for the mobile number
    name: name,
    time: preferredTime,
  };

  const sendData = () => {
    // console.log('Mobile No:', mobileNo);
    console.log(templateParams);
    // console.log(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEIDCALL, import.meta.env.VITE_PUBLICKEY);

    emailjs
      .send(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEIDCALL,
        templateParams,
        import.meta.env.VITE_PUBLICKEY
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          onClose();
          onSubmit();
        },
        (error) => {
          console.error("Failed to send email", error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg sm:w-72 md:w-96 fixed bottom-5 right-5 z-50">
      {/* Close Button */}

      <div className="flex flex-col items-center justify-end  bg-[#384241] rounded-xl">
        <h2 className="text-4xl font-semibold mb-1 text-white">
          Request a callback
        </h2>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-100 font-bold hover:text-gray-800 focus:outline-none"
        >
          ✕
        </button>
        <div className="flex flex-row justify-center items-center mb-2">
          <div className="w-16 h-0.5 bg-white mr-1 "></div>
          <div className="text-2xl text-white font-normal">Let us help you</div>
          <div className=" ml-1 w-16 h-0.5 bg-white "></div>
        </div>
      </div>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          sendData();
        }}
      >
        <div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-gray-600 text-[11px] mb-6 mt-6">
              Need help?Request a callback, and our team will reach out to you
              shortly
            </label>
          </div>

          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your name
          </label>
          <div className="mt-2  mb-3">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="John Doe"
              className="flex-1 min-w-0 block w-full px-3 py-1 rounded-r-md rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <label htmlFor="phone ">Your Phone Number</label>
          <div className="mt-1 flex mb-3">
            <span className="inline-flex items-center px-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-600 mr-2">
              +91
            </span>
            <input
              onChange={(e) => setMobileNo(e.target.value)}
              type="text"
              id="phone"
              placeholder="9876543210"
              className="flex-1 min-w-0 block w-full px-3 py-1 rounded-r-md rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <label htmlFor="time">Preferred time to callback</label>
          <div className="mt-2 flex">
            <select
              id="timeRange"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPreferredTime(e.target.value)}
            >
              {/* Hardcoded time ranges */}
              <option value="9:00-10:00 AM" disabled>
                Select a time range
              </option>
              <option value="9-10 AM">9:00–10:00 AM</option>
              <option value="10-11 AM">10:00–11:00 AM</option>
              <option value="11-12 PM">11:00–12:00 PM</option>
              <option value="12-1 PM">12:00–1:00 PM</option>
              <option value="1-2 PM">1:00–2:00 PM</option>
              <option value="2-3 PM">2:00–3:00 PM</option>
              <option value="3-4 PM">3:00–4:00 PM</option>
              <option value="4-5 PM">4:00–5:00 PM</option>
              <option value="5-6 PM">5:00–6:00 PM</option>
              <option value="6-7 PM">6:00–7:00 PM</option>
              <option value="7-8 PM">7:00–8:00 PM</option>
              <option value="8-9 PM">8:00–9:00 PM</option>
            </select>
          </div>

          <p className="mt-2 text-[10px] text-gray-500">
            We respect your privacy. Your details will not be shared with any
            third parties.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center ">
          <button
            type="submit"
            className="w-auto bg-[#384241] align-middle text-center text-white py-2 px-4 rounded-md border-2 border-[#384241] hover:bg-white hover:text-[#384241] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            Request a callback
          </button>
        </div>
      </form>
      {/* <div className="mt-6 text-center text-sm text-gray-600">
        OR
      </div> */}
      {/* <div className="mt-4 text-sm text-gray-600">
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
      </div> */}
    </div>
  );
};

const ChatBot = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      {!isCallbackOpen && !isThankYouVisible && (
        <div className="fixed bottom-5 right-5 z-50 p-5  w-20 h-20 rounded-full ">
        <div
          onClick={() => setIsCallbackOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-16 h-16 rounded-full text-white bg-[#384241] flex items-center justify-center fixed bottom-5 right-5 cursor-pointer text-center font-bold "
        >
          <TfiHeadphoneAlt size={40} />
          
          {/* Sliding Text */}
          <span
            className={`absolute right-16 w-36 h-14  bg-white px-7 py-3 text-black text-base transition-transform duration-300  rounded-full ${
              isHovered ? "translate-x-0 opacity-100 " : "translate-x-10 opacity-0"
            }`}
          >
            Need Help?
          </span>
        </div>
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
        <ThankYouMessage onClose={() => setIsThankYouVisible(false)} />
      )}
    </div>
  );
};

export default ChatBot;
