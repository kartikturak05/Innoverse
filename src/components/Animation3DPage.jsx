import {React,useState,useEffect} from 'react'

const Animation3DPage = () => {


  const images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.webp','image5.webp','image6.jpg','image7.jpg','image8.jpg','image9.jpg','image10.jpg','image11.jpg']

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

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
        <div className="bg-transparent rounded-[40px] w-4/3 h-[600px] shadow-lg p-4 ">
            {/* Video 1 */}
              <img
                src={`/3dServices/${images[currentIndex]}`}
                alt="Image 1"
                className="mx-auto w-full h-full object-cover   rounded-[40px] "
              />
        </div>

      </div>
    </div>
  )
}

export default Animation3DPage;