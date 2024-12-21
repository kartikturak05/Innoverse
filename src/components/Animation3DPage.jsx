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
          <h1 className="lg:text-6xl text-2xl font-extrabold text-white mb-4">
            Architectural 3D Services  <br /> that drive conversion
          </h1>
          <div className="text-white mt-2 lg:text-sm text-xs max-w-4xl mx-auto font-bold">
            Architectural 3D services bring architectural designs to life through detailed 3D modelling,
            rendering, and visualization. These services enable architects, designers, and developers to
            present realistic representations of projects before construction begins, enhancing
            communication, reducing design errors, and boosting marketing efforts.
            <br />
            <br />
            Key Offerings:
            <ul className="list-disc pl-6">
              <li>3D Modelling: Accurate creation of architectural elements, interiors, and exteriors.</li>
              <li>3D Rendering: Photorealistic visuals with precise lighting, textures, and materials.</li>
              <li>3D Walkthroughs & Animations: Interactive tours that showcase spatial design and functionality.</li>
              <li>Virtual & Augmented Reality Integration: Real-time project visualization for immersive experiences.</li>
              <li>BIM Integration: Comprehensive models for streamlined project management and coordination.</li>
            </ul>
            <br />
            With Architectural 3D Services, stakeholders gain a clear, compelling vision of their projects,
            facilitating better decision-making and impactful project presentations.
          </div>
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
          <h1 className="lg:text-5xl text-3xl  font-extrabold text-white">
            Precise and detailed visualisation  <br />with Augumented reality
          </h1>
          <div className='bg-slate-200 rounded-[40px] p-3 w-36 text-center justify-center mt-10 ' >Learn More</div>
        </div>
      </div>
    </div>
  )
}

export default Animation3DPage;