import {React,useState,useEffect} from 'react'

const Model3DPage = () => {

  const images = ['NewLevelSequence.0002','NewLevelSequence.0003','NewLevelSequence.0017','NewLevelSequence.0018','NewLevelSequence.0021','NewLevelSequence.0022','NewLevelSequence.0026','NewLevelSequence.0027','NewLevelSequence.0033','NewLevelSequence.0034','NewLevelSequence.0038','NewLevelSequence.0039']

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);


  
  return (
    <div>
      <div className=" min-h-screen p-4 md:p-12" style={{
        backgroundImage: "url('/d1.png')",
        backgroundSize: 'cover', // Ensures the image covers the entire background
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling
        cursor: 'grab',
      }}>
        {/* Top Heading */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-3xl lg:text-6xl font-extrabold text-white mb-4">
            Discover the Joy of 3D Modeling And Animation
          </h1>
          <p className="text-white mt-2 text-base  max-w-5xl mx-auto font-bold">
            Our 3D animations are more than just visuals—they are experiences. From dynamic product
            showcases and explainer videos to immersive storytelling, our animations blend technical
            precision with artistic creativity. We specialize in transforming raw concepts into polished,
            engaging narratives that resonate with audiences.
            Whether you need a cinematic introduction, a detailed walkthrough, or a jaw-dropping
            promotional piece, our team has the expertise to bring your vision to life.
            By partnering with a reliable 3D animation agency, your business can leverage this versatile
            medium to maximize the potential of your videos across every frame.
          </p>
        </div>

        {/* Video Container */}
        <div className="bg-white rounded-[40px] shadow-lg p-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Video 1 */}
            <div className="text-center flex-wrap ">
              <img
               src={`/3DModeling/1/${images[currentIndex]}.jpeg`}
                alt="Video 1"
                className="mx-auto w-auto h-[350px] rounded-[40px]"
              />
              <h2 className="text-xl font-bold mt-4">VIDEO : 1</h2>
              <p className="text-gray-900 mt-2 text-sm font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Video 2 */}
            <div className="text-center">
              <video
                autoPlay
                muted
                loop
                className="w-full h-[350px] rounded-[40px] mb-4"
                controls
                controlsList="nodownload"
                style={{ pointerEvents: 'auto' }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="/3DModeling/jewellery-finalrender.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2 className="text-xl font-bold mt-4">VIDEO : 2</h2>
              <p className="text-gray-900 mt-2 text-sm font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Video 3 */}
            <div className="text-center">
              <video
                autoPlay
                muted
                loop
                className="w-full h-[350px] rounded-[40px] mb-4"
                controls
                controlsList="nodownload"
                style={{ pointerEvents: 'auto' }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="/3DModeling/M2M_videofinal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <h2 className="text-xl font-bold mt-4">VIDEO : 3</h2>
              <p className="text-gray-900 mt-2 text-sm font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Video 4 */}
            <div className="text-center">
              <video
                autoPlay
                muted
                loop
                className="w-full h-[350px] rounded-[40px] mb-4"
                controls
                controlsList="nodownload"
                style={{ pointerEvents: 'auto' }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="/3DModeling/mobile_cc.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h2 className="text-xl font-bold mt-4">VIDEO : 4</h2>
              <p className="text-gray-900 mt-2 text-sm font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
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
    </div>
  )
}

export default Model3DPage