import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 h-5 w-5 bg-gray-800 rounded-full opacity-20 transition-transform duration-450 ease-out z-20"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
