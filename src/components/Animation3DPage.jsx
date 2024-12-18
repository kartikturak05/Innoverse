import React from 'react'

const Animation3DPage = () => {
  return (
    <div >
      <div className=" min-h-screen p-4 md:p-12" style={{
        backgroundImage: "url('/d1.png')",
        backgroundSize: 'cover', // Ensures the image covers the entire background
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling
        cursor: 'grab',
      }}>

        {/* Top Heading */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-6xl font-extrabold text-white mb-4">
            Powerful 3D and AR tools <br /> that drive conversion
          </h1>
          <p className="text-white mt-2 text-sm max-w-4xl mx-auto font-bold">
            Bigsurmoon's  interactive and responsive engine is perfectly crafted to
            ensuring sustained audience engagement, create inspiration, educate
            audiences, and drive sales. Craft your visual storytelling to the next
            level.
          </p>
        </div>

        {/* Inner continer */}
        <div className="bg-white rounded-[40px] shadow-lg p-10 ">
          <div className="">
            {/* Video 1 */}
            <div className="text-center flex-wrap ">
              <img
                src="/car.jpg"
                alt="Video 1"
                className="mx-auto w-auto rounded-[40px]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
      <div className="text-center mt-12 flex content-center items-center flex-col ">
        <h1 className="text-5xl font-extrabold text-white">
          Precise and detailed visualisation  <br />with Augumented reality
        </h1>
        <div className='bg-slate-200 rounded-[40px] p-3 w-36 text-center justify-center mt-10 ' >Learn More</div>
      </div>
      </div>
    </div>
      )
}

      export default Animation3DPage;