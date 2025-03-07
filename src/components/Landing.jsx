function Landing() {
  return (
    <div className="w-full md:min-h-screen flex justify-center items-center bg-cover bg-center">
      <div className="w-full md:h-screen mt-16 md:mt-10">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          controlsList="nodownload"
          className="w-full h-full object-cover"
          style={{ pointerEvents: "auto" }}
          onContextMenu={(e) => e.preventDefault()} // Disable right-click
          controls={false} // Hide video controls
        >
          <source src="/3D Animation1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Landing;
