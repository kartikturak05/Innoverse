import React from "react";

const Services = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            {/* Heading Section */}
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold text-amber-950">OUR SERVICES</h1>
            </div>

            {/* Services Container */}
            <div className="flex  justify-center w-full max-w-4xl mt-12 gap-2 bg-white p-7 rounded-3xl sm:flex-wrap md:flex-nowrap">
                {/* First Service */}
                <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">AUGMENTED REALITY</h2>
                    <p className="text-gray-600 text-center mb-6">
                        We specialise in the development and deployment of both App-based
                        Augmented Reality (Native AR) and Web-based Augmented Reality (Web AR) experiences.
                    </p>
                    <img
                        src="/image1.png"
                        alt="Augmented Reality"
                        className="w-full h-auto rounded-lg rounded-b-3xl"
                    />
                </div>

                {/* Second Service */}
                <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                    <video autoPlay muted loop className="w-full h-auto rounded-lg mb-4">
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className="text-xl font-bold text-gray-700 mt-4">
                        3D MODELLING <br />& ANIMATION
                    </h2>
                    <p className="text-gray-600 text-center">
                        3D modelling is the process of creating a three-dimensional
                        representation of any object or surface.
                    </p>
                </div>

                {/* Third Service */}
                <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">
                        ARCHITECTURAL 3D SERVICES
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Our Architectural 3D Services bring your architectural designs to
                        life with stunning, realistic 3D models and visualisations.
                    </p>
                    <img
                        src="/image2.jpg"
                        alt="Architectural 3D Services"
                        className="w-full h-auto rounded-lg rounded-b-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
