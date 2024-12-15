import React from "react";

const Services = () => {
    return (
        <div
  className="min-h-screen flex flex-col items-center cursor-grab"
  style={{
    backgroundImage: "url('/d1.png')",
    backgroundSize: 'cover', // Ensures the image covers the entire background
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents tiling
    cursor: 'grab',
  }}
>
  {/* Heading Section */}
  <div className="text-center mt-10 cursor-grab">
    <h1 className="text-6xl font-bold text-[#353636]">OUR SERVICES</h1>
  </div>

  {/* Services Container */}
  <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center w-full max-w-6xl mt-12 gap-6 bg-white p-7 rounded-[40px]">
    {/* First Service */}
    <div className="relative w-full sm:w-[48%] md:w-1/3 bg-white rounded-3xl p-6 flex flex-col items-center cursor-grab">
      <h1 className="text-2xl font-bold text-gray-700 mb-3">AUGMENTED REALITY</h1>
      <p className="text-gray-900 text-center mb-6 font-semibold">
        We specialise in the development and deployment of both App-based
        Augmented Reality (Native AR) and Web-based Augmented Reality (Web AR) experiences.
      </p>
      <img
        src="/image1.png"
        alt="Augmented Reality"
        className="w-full h-auto rounded-lg rounded-b-[90px]"
      />
      <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-gray-300 to-transparent pointer-events-none"></div>
    </div>

    {/* Second Service */}
    <div className="relative w-full sm:w-[48%] md:w-1/3 bg-white rounded-3xl p-6 flex flex-col items-center cursor-grab">
      <video
        autoPlay
        muted
        loop
        className="w-full h-auto rounded-lg mb-4"
        controls
        controlsList="nodownload"
        style={{ pointerEvents: 'auto' }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="text-2xl font-bold text-gray-700 mt-4 mb-3">
        3D MODELLING <br />& ANIMATION
      </h1>
      <p className="text-gray-900 text-center font-semibold">
        3D modelling is the process of creating a three-dimensional
        representation of any object or surface.
      </p>
      <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-t from-gray-300 to-transparent pointer-events-none"></div>
    </div>

    {/* Third Service */}
    <div className="relative w-full sm:w-[48%] md:w-1/3 bg-white rounded-3xl p-6 flex flex-col items-center cursor-grab">
      <h1 className="text-2xl font-bold text-gray-700 mb-3 text-center">
        ARCHITECTURAL 3D SERVICES
      </h1>
      <p className="text-gray-900 text-center mb-6 font-semibold">
        Our Architectural 3D Services bring your architectural designs to
        life with stunning, realistic 3D models and visualisations.
      </p>
      <img
        src="/image2.jpg"
        alt="Architectural 3D Services"
        className="w-full h-full rounded-b-[90px]"
      />
    </div>
  </div>
</div>

    );
};

export default Services;
