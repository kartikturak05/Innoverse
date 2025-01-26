import React from "react";

const AugmentedReality = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gradient-to-b from-purple-300 to-indigo-300 pt-48 z-0">
      <div className="bg-gray-800 shadow-xl rounded-3xl p-10 max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-6">Augmented Reality</h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Elevate Your Brand with Stunning 3D Visuals & AR, Experience the Future with 3D & Augmented Reality.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Revolutionize your business with cutting-edge 3D Animation and Augmented Reality solutions. Captivate your audience with immersive, lifelike visuals that boost engagement, drive sales, and elevate your brand's digital presence.
        </p>
      </div>

      <div className="rounded-3xl w-4/5 h-auto shadow-xl overflow-hidden flex justify-center items-center bg-gray-900">
        <img
          src={`/augumentedreality.jpg`}
          alt="Augmented Reality"
          className="w-full h-[80vh] object-fill"
        />
      </div>
    </div>
  );
};

export default AugmentedReality;