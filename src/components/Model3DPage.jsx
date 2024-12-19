import React from 'react'

const Model3DPage = () => {
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
          Discover the Joy of 3D Printing
        </h1>
        <p className="text-white mt-2 text-sm  max-w-4xl mx-auto font-bold">
          Bigsurmoon's  interactive and responsive engine is perfectly crafted to
          ensuring sustained audience engagement, create inspiration, educate
          audiences, and drive sales. Craft your visual storytelling to the next
          level.
        </p>
      </div>

      {/* Video Container */}
      <div className="bg-white rounded-[40px] shadow-lg p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Video 1 */}
          <div className="text-center flex-wrap ">
            <img
              src="/car.jpg"
              alt="Video 1"
              className="mx-auto w-auto rounded-[40px]"
            />
            <h2 className="text-xl font-bold mt-4">VIDEO : 1</h2>
            <p className="text-gray-900 mt-2 text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Video 2 */}
          <div className="text-center">
            <img
              src="/car.jpg"
              alt="Video 2"
              className="rounded-[40px] mx-auto"
            />
            <h2 className="text-xl font-bold mt-4">VIDEO : 2</h2>
            <p className="text-gray-900 mt-2 text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Video 3 */}
          <div className="text-center">
            <img
              src="/car.jpg"
              alt="Video 3"
              className="rounded-[40px] mx-auto"
            />
            <h2 className="text-xl font-bold mt-4">VIDEO : 3</h2>
            <p className="text-gray-900 mt-2 text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Video 4 */}
          <div className="text-center">
            <img
              src="/car.jpg"
              alt="Video 4"
              className="rounded-[40px] mx-auto"
            />
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