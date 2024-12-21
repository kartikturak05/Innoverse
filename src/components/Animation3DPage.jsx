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
          <div className="bg-white shadow-lg rounded-lg p-8 mt-6 max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-indigo-700 mb-6">
              Architectural 3D Services
            </h2>
            <p className="text-gray-700 text-lg lg:text-xl mb-8 leading-relaxed">
              Architectural 3D services bring architectural designs to life through detailed 3D modeling, rendering, and visualization. These services enable architects, designers, and developers to present realistic representations of projects before construction begins, enhancing communication, reducing design errors, and boosting marketing efforts.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Offerings:</h3>
            <ol className="list-disc pl-6 text-gray-700 text-lg lg:text-xl space-y-3">
              <li>
                <strong className="text-indigo-600">3D Modelling:</strong> Accurate creation of architectural elements, interiors, and exteriors.
              </li>
              <li>
                <strong className="text-indigo-600">3D Rendering:</strong> Photorealistic visuals with precise lighting, textures, and materials.
              </li>
              <li>
                <strong className="text-indigo-600">3D Walkthroughs & Animations:</strong> Interactive tours that showcase spatial design and functionality.
              </li>
              <li>
                <strong className="text-indigo-600">Virtual & Augmented Reality Integration:</strong> Real-time project visualization for immersive experiences.
              </li>
              <li>
                <strong className="text-indigo-600">BIM Integration:</strong> Comprehensive models for streamlined project management and coordination.
              </li>
            </ol>
            <p className="text-gray-700 text-lg lg:text-xl mt-6">
              With Architectural 3D Services, stakeholders gain a clear, compelling vision of their projects, facilitating better decision-making and impactful project presentations.
            </p>
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