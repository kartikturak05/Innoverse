import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 min-h-screen flex items-center justify-center cursor-pointer">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-12 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-[-150px] right-[-150px] bg-blue-300 w-96 h-96 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-[-150px] left-[-150px] bg-pink-300 w-96 h-96 rounded-full opacity-40 blur-3xl"></div>

        {/* Header */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-8 mt-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Us
        </motion.h1>

        {/* Intro Section */}
        <motion.p
          className="text-lg md:text-2xl text-gray-700 text-center mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          At <span className="font-bold text-purple-700">Innoverrese</span>, we believe in turning complex ideas into powerful visual stories that are both stunning and simple to understand. That’s the core of our philosophy—<span className="font-semibold text-blue-600">Simple by Choice</span>.
        </motion.p>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Innoverrese?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We don’t just deliver projects; we craft masterpieces. Our dedication to quality and innovation has earned us a shelf full of awards and global recognition. Media outlets around the world have featured our work, and our collaborations with a diverse array of clients stand as a testament to our versatility and commitment to excellence.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">A Team Like No Other</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We’re not just creators; we’re dreamers, innovators, and storytellers who love what we do. Our team thrives on creativity, pushing the boundaries of technology and imagination to deliver results that are both visually breathtaking and functionally impactful.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Let’s Build Something Extraordinary Together</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Whether you’re a startup looking to make a splash or a global brand aiming to stay ahead, Innoverrese is your partner in innovation. From 3D animations that bring your ideas to life to AR solutions that redefine interaction, we’re here to help you make your mark in a competitive world.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.p
          className="text-gray-600 leading-relaxed mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          At <span className="font-bold text-purple-700">Innoverrese</span>, we’re not just creating content—we’re crafting experiences that inspire, engage, and transform. Let’s take your vision to the next dimension.
        </motion.p>

        {/* Background Information */}
        <motion.p
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-bold text-blue-600">Innoverrese</span> is a 3D Animation and Augmented Reality company. We noticed an opportunity during Covid and launched an application for schools for online teaching with the help of 3D Modelling. After the pandemic, we diversified into other services, continuing to innovate and adapt.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUs;
