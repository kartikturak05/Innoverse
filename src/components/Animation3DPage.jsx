import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Animation3DPage = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.webp",
    "image5.webp",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div>
      <div
        className=" min-h-screen p-4 md:p-12"
        style={{
          backgroundImage: "url('/d1.png')",
          backgroundSize: "cover", // Ensures the image covers the entire background
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling
          cursor: "grab",
        }}
      >
        {/* Top Heading */}
        <div className="text-center mb-16 mt-20">
          <h1 className="lg:text-6xl text-2xl font-extrabold text-white mb-4">
            Architectural 3D Services <br /> that drive conversion
          </h1>

          <div className="flex flex-col items-center justify-center pl-20 pr-20 pt-10 pb-10 bg-slate-600 bg-transparent border-2 border-white rounded-[50px]">
            <div className="flex bg-transparent flex-col  justify-center ">
              <div className="flex lg:items-center lg:justify-center  flex-col lg:m-10 m-1 text-gray-50 font-bold lg:text-xl sm:text-base">
                Architectural 3D services bring architectural designs to life
                through detailed 3D modeling, rendering, and visualization.
                These services enable architects, designers, and developers to
                present realistic representations of projects before
                construction begins, enhancing communication, reducing design
                errors, and boosting marketing efforts.
              </div>
              <h1 className="text-4xl font-bold text-white mb-10 mt-10 text-left">
                Key Offerings :
              </h1>

              <div className="flex flex-col md:flex-row justify-around  items-center mb-16 ">
                <div className="group [perspective:1000px] flex justify-center items-center mb-10 md:mb-1">
                  <div className="relative h-72 w-56 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="absolute inset-0 flex flex-col bg-white rounded-lg [backface-visibility:hidden]">
                      <h1 className="text-gray-700 text-xl p-4 pt-10 pb-10">3D Modeling:</h1>
                      <div className="flex-1">
                        <img
                          className="w-full h-full object-cover rounded-b-lg"
                          src="/3dServices/image1.jpg"
                          alt="3D Modeling"
                        />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 px-6 py-4 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex flex-col items-center justify-center h-full">
                       
                        <p className="text-sm mb-4 text-gray-900">
                          Accurate creation of architectural elements interiors , exteriors
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group [perspective:1000px] flex justify-center items-center mb-10 md:mb-1">
                  <div className="relative h-72 w-56 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="absolute inset-0 flex flex-col bg-white rounded-lg [backface-visibility:hidden]">
                      <h1 className="text-gray-700 text-xl p-4 pt-10 pb-10">3D Rendering:</h1>
                      <div className="flex-1">
                        <img
                          className="w-full h-full object-cover rounded-b-lg"
                          src="/3dServices/image1.jpg"
                          alt="3D Modeling"
                        />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 px-6 py-4 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex flex-col items-center justify-center h-full">
                       
                        <p className="text-sm mb-4 text-gray-900">
                            Photorealistic visuals with precise lighting , textures , materials
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>


                <div className="group [perspective:1000px] flex justify-center items-center mb-10 md:mb-1">
                  <div className="relative h-72 w-56 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="absolute inset-0 flex flex-col bg-white rounded-lg [backface-visibility:hidden]">
                      <h1 className="text-gray-700 text-xl p-4 pt-6 pb-6">3D Walkthroughs & Animations:</h1>
                      <div className="flex-1">
                        <img
                          className="w-full h-full object-cover rounded-b-lg"
                          src="/3dServices/image1.jpg"
                          alt="3D Modeling"
                        />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 px-6 py-4 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex flex-col items-center justify-center h-full">
                       
                        <p className="text-sm mb-4 text-gray-900">
                            Interactive tours that showcase spatial design and functionality
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>


                <div className="group [perspective:1000px] flex justify-center items-center mb-10 md:mb-1">
                  <div className="relative h-72 w-56 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="absolute inset-0 flex flex-col bg-white rounded-lg [backface-visibility:hidden]">
                      <h1 className="text-gray-700 text-xl p-4">Virtual & Augumented Reality Integration:</h1>
                      <div className="flex-1">
                        <img
                          className="w-full h-full object-cover rounded-b-lg"
                          src="/3dServices/image1.jpg"
                          alt="3D Modeling"
                        />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 px-6 py-4 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex flex-col items-center justify-center h-full">
                       
                        <p className="text-sm mb-4 text-gray-900">
                          Real time project visualization for immersive experiences.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>


                <div className="group [perspective:1000px] flex justify-center items-center mb-10 md:mb-1">
                  <div className="relative h-72 w-56 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="absolute inset-0 flex flex-col bg-white rounded-lg [backface-visibility:hidden]">
                      <h1 className="text-gray-700 text-xl p-4 pt-10 pb-10">BIM Integration:</h1>
                      <div className="flex-1">
                        <img
                          className="w-full h-full object-cover rounded-b-lg"
                          src="/3dServices/image1.jpg"
                          alt="3D Modeling"
                        />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-100 px-6 py-4 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex flex-col items-center justify-center h-full">
                       
                        <p className="text-sm mb-4 text-gray-900">
                            Comprehensive models for streamlined project management and coordination
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-base text-white font-bold">
                With Architectural 3D Services , stakeholders gain a clear ,
                compelling vision of their projects , facilitating better
                decision-making and impactful project presentations
              </div>
            </div>
          </div>

          {/* <div className="bg-white shadow-lg rounded-lg p-8 mt-6 max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-indigo-700 mb-6">
              Architectural 3D Services
            </h2>
            <p className="text-gray-700 text-lg lg:text-xl mb-8 leading-relaxed">
              Architectural 3D services bring architectural designs to life through detailed 3D modeling, rendering, and visualization. These services enable architects, designers, and developers to present realistic representations of projects before construction begins, enhancing communication, reducing design errors, and boosting marketing efforts.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Offerings:</h3>
            <ol className="list-disc pl-6 text-gray-700 text-lg lg:text-xl space-y-3">
              <li>
                <strong className="text-indigo-600">3D Modelling:</strong> Accurate creation of architectural elements, interiors, and exteriors.
              </li>
              <li>
                <strong className="text-indigo-600">3D Rendering:</strong> Photorealistic visuals with precise lighting, textures, and materials.
              </li>
              <li>
                <strong className="text-indigo-600">3D Walkthroughs & Animations:</strong> Interactive tours that showcase spatial design and functionality.
              </li>
              <li>
                <strong className="text-indigo-600">Virtual & Augmented Reality Integration:</strong> Real-time project visualization for immersive experiences.
              </li>
              <li>
                <strong className="text-indigo-600">BIM Integration:</strong> Comprehensive models for streamlined project management and coordination.
              </li>
            </ol>
            <p className="text-gray-700 text-lg lg:text-xl mt-6">
              With Architectural 3D Services, stakeholders gain a clear, compelling vision of their projects, facilitating better decision-making and impactful project presentations.
            </p>
          </div> */}

          {/* <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 flex items-center justify-center py-10 px-4">
            <div className="max-w-4xl text-white p-4">
              <motion.h2
                className="text-5xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Architectural 3D Services
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl leading-relaxed text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Architectural 3D services bring architectural designs to life
                through detailed 3D modeling, rendering, and visualization.
                These services enable architects, designers, and developers to
                present realistic representations of projects before
                construction begins, enhancing communication, reducing design
                errors, and boosting marketing efforts.
              </motion.p>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-semibold mb-6 text-center">
                  Key Offerings:
                </h3>
                <ul className="list-disc pl-6 space-y-4 text-lg md:text-xl">
                  <li>
                    <strong className="text-yellow-300">3D Modelling:</strong>{" "}
                    Accurate creation of architectural elements, interiors, and
                    exteriors.
                  </li>
                  <li>
                    <strong className="text-yellow-300">3D Rendering:</strong>{" "}
                    Photorealistic visuals with precise lighting, textures, and
                    materials.
                  </li>
                  <li>
                    <strong className="text-yellow-300">
                      3D Walkthroughs & Animations:
                    </strong>{" "}
                    Interactive tours that showcase spatial design and
                    functionality.
                  </li>
                  <li>
                    <strong className="text-yellow-300">
                      Virtual & Augmented Reality Integration:
                    </strong>{" "}
                    Real-time project visualization for immersive experiences.
                  </li>
                  <li>
                    <strong className="text-yellow-300">
                      BIM Integration:
                    </strong>{" "}
                    Comprehensive models for streamlined project management and
                    coordination.
                  </li>
                </ul>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                With Architectural 3D Services, stakeholders gain a clear,
                compelling vision of their projects, facilitating better
                decision-making and impactful project presentations.
              </motion.p>
            </div>
          </div> */}
        </div>

        {/* Inner continer */}
        {/* Video 1 */}
        {/* <div className="bg-transparent rounded-[40px] w-4/3 h-[600px] shadow-lg p-4 ">
          <img
            src={`/3dServices/${images[currentIndex]}`}
            alt="Image 1"
            className="mx-auto w-full h-full object-cover   rounded-[40px] "
          />
        </div> */}
      </div>
    </div>
  );
};

export default Animation3DPage;
