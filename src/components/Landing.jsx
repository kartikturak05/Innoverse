import React, { useEffect, useRef } from "react";

function Landing() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Try to play video with sound
    const playVideoWithSound = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch((err) => console.log("Autoplay with sound failed:", err));
      }
    };

    // Ensure video starts immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // If autoplay fails, wait for user interaction
        document.addEventListener("click", playVideoWithSound, { once: true });
        document.addEventListener("mouseover", playVideoWithSound, { once: true });
      });
    }

    return () => document.removeEventListener("click", playVideoWithSound);
  }, []);

  return (
    <div className="w-full md:min-h-screen flex justify-center items-center bg-cover bg-center">
      <div className="w-full md:h-screen mt-16 md:mt-10">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={false} // Ensure sound is ON
           preload="auto"
          controlsList="nodownload"
          className="w-full h-full object-cover"
          style={{ pointerEvents: "auto" }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/3D Animation1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Landing;
