import {React,useState} from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const ThankYou = () => {
  return (
    <div className="text-center mt-20 bg-fuchsia-50 mb-20 p-10">
      <h1 className="text-4xl font-bold text-green-600">Thank You!</h1>
      <p className="text-gray-700 mt-4 text-2xl font-medium">
        Your email has been sent successfully. <br /> We will get back to you shortly.
      </p>
    </div>
  );
};

const FormSection = ({setIsEmailSent}) => {

  const [verified,setVerified] = useState(false);  // Track email status
  const [captchaToken, setCaptchaToken] = useState(''); // Captcha token
  const [formValid, setFormValid] = useState(false); // Overall form validity
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  
  // Track changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: value };
      validateForm(updatedForm); // Validate form after every change
      return updatedForm;
    });
  };

  // Validate form fields
  const validateForm = (data) => {
    const { name, email, phone, company, message } = data;
    const isFormFilled =
      name.trim() !== '' &&
      email.trim() !== '' &&
      phone.trim() !== '' &&
      company.trim() !== '' &&
      message.trim() !== '';
    setFormValid(isFormFilled && verified);
  };

  // Handle reCAPTCHA success
  const handleCaptcha = (token) => {
    console.log('reCAPTCHA Token:', token);
    setCaptchaToken(token);
    setVerified(true);
    validateForm(formData); // Revalidate form when captcha is verified
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ensure the keys match the placeholders in your EmailJS template
    const emailData = {
      from_name: formData.name,       // Matches {{name}}
      reply_to: formData.email,     // Matches {{email}}
      phone: formData.phone,     // Matches {{phone}}
      company: formData.company, // Matches {{company}} if added to template
      message: formData.message, // Matches {{message}}
    };
  
    // Send email using EmailJS
    emailjs
      // .send('service_bo4okgc', 'template_ecmn7nk', emailData, 'rUUIpRU0yBIUb2LUX')
      .send(import.meta.env.VITE_SERVICEID,import.meta.env.VITE_TEMPLATEID , emailData, import.meta.env.VITE_PUBLICKEY)
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setIsEmailSent(true); // Notify parent to replace component
        },
        (error) => {
          console.error('Failed to send email', error.text);
          alert('Something went wrong, please try again.');
        }
      );
  };
  

  return <>
    <form onSubmit={handleSubmit} className="w-full max-w-lg mt-2 mb-10 px-4 sm:px-6">
    <div className="flex flex-col space-y-4">
      {/* Name Input */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-1 w-full font-semibold"
        />
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-2 w-full font-semibold"
        />
      </div>

      {/* Phone Input */}
      <div>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-2 w-full font-semibold"
        />
      </div>

      {/* Company Input */}
      <div>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-2 w-full font-semibold"
        />
      </div>

      {/* Message Input */}
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="bg-transparent border-b-2 border-gray-900 placeholder-gray-900 focus:outline-none focus:border-blue-500 px-2 py-2 w-full font-semibold"
        />
      </div>

      <ReCAPTCHA
      sitekey={import.meta.env.VITE_CAPTCHAKEY}
      onChange={handleCaptcha}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-4">
        <button
          type="submit"
          className="w-full sm:w-auto bg-gray-800 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" disabled={!formValid}
        >
          SEND
        </button>

        <p className="text-xs text-gray-500 mt-2 sm:mt-0">
          We will process your personal information in accordance with our Privacy Policy. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </div>
  </form>
  </>
}



const ContactUs = () => {

  const [isEmailSent, setIsEmailSent] = useState(false);

  
  return (
    <div
  className="min-h-screen flex flex-col items-center"
  style={{
    backgroundImage: "url('/d2.png')",
    backgroundSize: 'cover', // Ensures the image covers the entire background
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents tiling
  }}
>
  {/* Header */}
  <div className="text-center mt-10">
    <h1 className="text-5xl font-bold text-gray-800">CONTACT US</h1>
    <p className="text-gray-900 mt-3 text-2xl mb-2">
      A member of our team will get back to you shortly.
    </p>
  </div>


   {/* Conditionally Render FormSection or ThankYou */}
   {!isEmailSent ? (
        <FormSection setIsEmailSent={setIsEmailSent} />
      ) : (
        <ThankYou />
      )}
  

  {/* Footer Section */}
  <div className="w-full bg-[#95B5B6] mt-4 pt-4 relative">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-center md:text-left space-y-4 md:space-y-0 px-4">
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
          <li>metaconnexindia@gmail.com</li>
        </ul>
      </div>
    </div>

    {/* Copyright Text */}
    <div className="text-center text-gray-700 text-sm mt-4 px-4 pb-4">
      © 2024 Connex India . All Rights Reserved
    </div>
  </div>
</div>

  );
};

export default ContactUs;
