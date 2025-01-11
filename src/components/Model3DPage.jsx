import { React, useState, useEffect } from "react";

const Model3DPage = () => {
  const images = [
    "NewLevelSequence.0002",
    "NewLevelSequence.0003",
    "NewLevelSequence.0017",
    "NewLevelSequence.0018",
    "NewLevelSequence.0021",
    "NewLevelSequence.0022",
    "NewLevelSequence.0026",
    "NewLevelSequence.0027",
    "NewLevelSequence.0033",
    "NewLevelSequence.0034",
    "NewLevelSequence.0038",
    "NewLevelSequence.0039",
  ];

  // Video Data Array
  const videos = [
    // { title: "Mobile Video", src: "/mobile2.mp4" },
    // { title: "Mobile Video ", src: "/3DModeling/green_jewellery.mp4" },
    // { title: "Mobile Video ", src: "/3DModeling/jewellery-finalrender.mp4" },
    // { title: "Mobile Video ", src: "/3DModeling/M2M_videofinal.mp4" },
    // { title: "Mobile Video ", src: "/3DModeling/mobile_cc.mp4" },
    // { title: "Mobile Video ", src: "/3DModeling/mobile_cc.mp4" },

    { title: "Mobile Video", src: "/mobile2.mp4" },
    { title: "Mobile Video ", src: "/mobile2.mp4" },
    { title: "Mobile Video ", src: "/mobile2.mp4" },
    { title: "Mobile Video ", src: "/mobile2.mp4" },
    { title: "Mobile Video ", src: "/mobile2.mp4" },
    { title: "Mobile Video ", src: "/mobile2.mp4" },


  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const openModal = (video) => {
    setModalVideo(video);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <div>
      <div
        className="min-h-screen p-4 md:p-12"
        style={{
          backgroundImage: "url('/d1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          cursor: "grab",
        }}
      >
        {/* Top Heading */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-3xl lg:text-6xl font-extrabold text-white">
            Discover the Joy of 3D Modeling And Animation
          </h1>
          <p className="text-white mt-2 text-base max-w-5xl mx-auto font-bold">
            Our 3D animations are more than just visuals—they are experiences.
            From dynamic product showcases and explainer videos to immersive
            storytelling, our animations blend technical precision with
            artistic creativity. We specialize in transforming raw concepts
            into polished, engaging narratives that resonate with audiences.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-200 via-green-200 to-blue-200 shadow-lg p-10">
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => openModal(video)}
              >
                {/* Thumbnail */}
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-[200px] object-cover rounded-lg shadow-md"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 rounded-lg">
                  <button className="text-white text-4xl font-extrabold">▶</button>
                  <h2 className="text-center text-lg font-extrabold mt-8 text-white">
                    {video.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-12">
            <h1 className="lg:text-5xl text-2xl font-extrabold text-white">
              Where Ideas Come to Life
            </h1>
            <h1 className="text-white lg:text-5xl text-2xl font-extrabold mt-2">
              in Three Dimensions
            </h1>
          </div>
        </div>

        {/* Modal */}
        {modalVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <button
                className="absolute lg:top-12 md:top-12 lg:right-60 md:right-60 top-24 right-16 text-black text-2xl font-bold p-4 hover:text-white"
                onClick={closeModal}
              >
                ✖
              </button>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-[60%] h-[50%] lg:h-[70%] md:h-[70%]">
              
              <video
                src={modalVideo.src}
                className="w-full h-full object-cover "
                controls
                autoPlay="true"
              ></video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Model3DPage;
