import React, { useState } from "react";
import Accordion from "./Accordion";

const faqs3 = [
  {
    question: "What is Augmented Reality (AR)?",
    answer:
      "AR overlays digital content onto the real world, enhancing user experiences through interactive visuals and animations.",
  },
  {
    question: "Does INNOVERRESE offer app-based AR or web-based AR?",
    answer:
      "We specialize in both App-based Augmented Reality (Native AR) and Web-based Augmented Reality (Web AR), catering to your specific needs.",
  },
  {
    question: "How can AR improve e-commerce and marketing?",
    answer:
      "AR allows customers to visualize products in their environment, increasing confidence in purchases and creating immersive marketing campaigns.",
  },
  {
    question: "What industries can benefit from augmented reality?",
    answer:
      "AR is versatile and benefits various industries like e-commerce, real estate, retail, education, and gaming.",
  },
  {
    question: "Do I need special hardware to use INNOVERRESE’s AR solutions?",
    answer:
      "No, our Web-based AR solutions work seamlessly on most modern browsers and devices without the need for specialized hardware.",
  },
];

const faqs2 = [
  {
    question: "What is 3D modelling, and why is it important?",
    answer:
      "3D modelling is the process of creating realistic, three-dimensional representations of objects. It enhances visual appeal and improves communication in industries like e-commerce and architecture.",
  },
  {
    question: "What kind of 3D models does INNOVERRESE create?",
    answer:
      "We create detailed and lifelike 3D models for products, architectural designs, and animations to suit various industries, including e-commerce and marketing.",
  },
  {
    question: "Can 3D animations help improve customer engagement?",
    answer:
      "Yes, 3D animations provide a dynamic and interactive way of showcasing products, making them more engaging and memorable for customers.",
  },
  {
    question: "How do Architectural 3D Services work?",
    answer:
      "Our Architectural 3D Services turn architectural blueprints into stunning 3D visualizations, helping architects and designers present their ideas more effectively.",
  },
  {
    question: "Is 3D modelling compatible with augmented reality applications?",
    answer:
      "Absolutely! Our 3D models are optimized for integration with augmented reality experiences, making them perfect for interactive marketing and virtual try-ons.",
  },
];

const faqs1 = [
  {
    question: "What is INNOVERRESE’s Try-On Technology?",
    answer:
      'INNOVERRESE’s try-on technology allows customers to experience products virtually in real-time, enabling them to "try" products without physically holding them.',
  },
  {
    question: "How does the try-on process work for customers?",
    answer:
      "Customers can use their devices to upload an image or use their camera to see how a product fits or looks on them in seconds, with no app download required.",
  },
  {
    question: "What makes INNOVERRESE’s virtual try-on accurate and fast?",
    answer:
      "The system uses advanced algorithms and lightweight technology, ensuring high accuracy in product placement and instant responsiveness, making it user-friendly.",
  },
  {
    question: "Can customers use the try-on feature on mobile devices?",
    answer:
      "Yes, INNOVERRESE’s try-on technology is fully optimized for mobile devices, providing a seamless experience across smartphones, tablets, and desktops.",
  },
  {
    question: "How does this technology reduce product returns for brands?",
    answer:
      "By allowing customers to see how products look or fit before purchase, INNOVERRESE helps ensure satisfaction, leading to fewer mismatched expectations and reduced returns.",
  },
];

const FAQ = () => {
  const [faqs, setFaqs] = useState(null);

  const handleClick = (selectedFaqs) => {
    setFaqs(selectedFaqs); // Set the selected FAQs
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-4 rounded-lg bg-gray-100 flex items-center justify-center max-w-3xl">
        {!faqs ? (
          <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Explore Our FAQ Sections
            </h1>
            <div
              className="p-5 bg-blue-500 m-4 cursor-pointer text-white text-center rounded-lg shadow-lg hover:bg-blue-600 transition-all"
              onClick={() => handleClick(faqs1)}
            >
              <img
                src="/virtualTryOn.jpg" // Replace with your image path
                alt="Try-On Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h1 className="text-xl font-semibold">Try-On Technology</h1>
              <p>
                Learn how our technology creates seamless virtual try-on
                experiences for your customers.
              </p>
            </div>
            <div
              className="p-5 bg-green-500 m-4 cursor-pointer text-white text-center rounded-lg shadow-lg hover:bg-green-600 transition-all"
              onClick={() => handleClick(faqs2)}
            >
              <img
                src="/3dmodelingicon.webp" // Replace with your image path
                alt="3D Modelling Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h1 className="text-xl font-semibold">
                3D Modelling & Animation
              </h1>
              <p>
                Discover how our 3D solutions can elevate your brand's visual
                identity.
              </p>
            </div>
            <div
              className="p-5 bg-purple-500 m-4 cursor-pointer text-white text-center rounded-lg shadow-lg hover:bg-purple-600 transition-all"
              onClick={() => handleClick(faqs3)}
            >
              <img
                src="/augumentedRealityicon.jpg" // Replace with your image path
                alt="AR Icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h1 className="text-xl font-semibold">Augmented Reality</h1>
              <p>
                Uncover the potential of AR in transforming customer engagement
                and experiences.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <button
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition-all"
              onClick={() => setFaqs(null)}
            >
              Back to FAQ Categories
            </button>
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.question} answer={faq.answer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
