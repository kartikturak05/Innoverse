import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enable sound after user interaction
  useEffect(() => {
    const enableSound = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch((err) => console.log("Autoplay with sound failed:", err));
      }
    };

    document.addEventListener("click", enableSound, { once: true });

    return () => document.removeEventListener("click", enableSound);
  }, []);

  return (
    <div className="w-full md:min-h-screen sm:h-[800px] flex justify-center items-center bg-cover bg-center bg-no-repeat">
      <div className="w-full sm:h-[800px] md:h-screen mt-10 md:mt-1">
        <video
          ref={videoRef}
          autoPlay
          loop
          className="w-full h-full object-cover"
          controlsList="nodownload"
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
