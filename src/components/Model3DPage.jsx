import React, { useState, useRef, useEffect } from "react";

const Bike360Viewer = ({ openInModal = false, onOpen, isModal = false }) => {
  const images = Array.from({ length: 36 }, (_, i) => `/bike/00${i + 1}.png`);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragSpeed] = useState(5); // Adjust sensitivity
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const loadImages = () => {
      let loadedCount = 0;
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setIsLoaded(true);
          }
        };
      });
    };
    loadImages();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0]?.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isLoaded) return;
    const currentX = e.clientX || e.touches[0]?.clientX;
    const difference = startX - currentX;

    if (Math.abs(difference) > dragSpeed) {
      if (difference > 0) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      setStartX(currentX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const containerClasses = isModal
    ? "w-full h-full bg-gray-800 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
    : "w-full h-[250px] bg-gray-800 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing";

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onClick={!isModal ? onOpen : undefined}
    >
      {isLoaded ? (
        <img src={images[currentIndex]} alt="360° Bike View" className="w-full h-full object-contain" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white font-bold">
          Loading...
        </div>
      )}
    </div>
  );
};

const Model3DPage = () => {
  const videos = [
    { title: "Mobile Video", src: "/mobile2.mp4" },
    { title: "Green Jewellery", src: "/3DModeling/green_jewellery.mp4" },
    { title: "Jewellery Final", src: "/3DModeling/jewellery-finalrender.mp4" },
    { title: "M2M Video", src: "/3DModeling/M2M_videofinal.mp4" },
    { title: "Connex Animation", src: "/3DModeling/Connex2.mp4" },
    { title: "Aeroplane Model", src: "/3DModeling/aeroplane.mp4" },
  ];

  const [modalVideo, setModalVideo] = useState(null);
  const [bikeModalOpen, setBikeModalOpen] = useState(false);

  const openModal = (video) => setModalVideo(video);
  const closeModal = () => setModalVideo(null);
  const openBikeModal = () => setBikeModalOpen(true);
  const closeBikeModal = () => setBikeModalOpen(false);

  return (
    <div>
      <div
        className="min-h-screen p-4 md:p-12"
        style={{
          backgroundImage: "url('/d1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center mb-16 mt-20">
          <h1 className="text-3xl lg:text-6xl font-extrabold text-white">
            Discover the Joy of 3D Modeling And Animation
          </h1>
          <p className="text-white mt-2 text-base max-w-5xl mx-auto font-bold">
            Our 3D animations are more than just visuals—they are experiences.
            From dynamic product showcases and explainer videos to immersive
            storytelling, our animations blend technical precision with
            artistic creativity.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-200 via-green-200 to-blue-200 shadow-lg p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => openModal(video)}
              >
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
            {/* 360° Image Display with Click to Open Modal */}


            <div
                className="relative group cursor-pointer"
                onClick={openBikeModal}
              >
              <Bike360Viewer openInModal={true} onOpen={openBikeModal} isModal={false} />
               
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 rounded-lg">
                  {/* <button className="text-white text-4xl font-extrabold">▶</button> */}
                  <h2 className="text-center text-xl font-extrabold mt-5 text-white">
                    Bike 360° View
                  </h2>
                </div>
              </div>
          </div>

          <div className="text-center mt-12">
            <h1 className="lg:text-5xl text-2xl font-extrabold text-white">
              Where Ideas Come to Life
            </h1>
            <h1 className="text-white lg:text-5xl text-2xl font-extrabold mt-2">
              in Three Dimensions
            </h1>
          </div>
        </div>

        {/* Video Modal */}
        {modalVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <button
              className="absolute lg:top-12 md:top-12 lg:right-60 md:right-60 top-24 right-16 text-white text-2xl font-bold p-4 hover:text-gray-300"
              onClick={closeModal}
            >
              ✖
            </button>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-[60%] h-[50%] lg:h-[70%] md:h-[70%]">
              <video src={modalVideo.src} className="w-full h-full object-cover" controls autoPlay></video>
            </div>
          </div>
        )}

        {/* Bike 360° Modal */}
        {bikeModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <button
              className="absolute lg:top-12 md:top-12 lg:right-60 md:right-60 top-24 right-16 text-white text-2xl font-bold p-4 hover:text-gray-300"
              onClick={closeBikeModal}
            >
              ✖
            </button>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-[60%] h-[50%] lg:h-[70%] md:h-[70%] flex items-center justify-center">
              <Bike360Viewer openInModal={true} isModal={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Model3DPage;