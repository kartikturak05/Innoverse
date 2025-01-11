import React from 'react';

const OurClients = () => {
  return (
    <div
      className="pt-16 pb-20"
      style={{
        backgroundImage: "url('/d2.png')",
        backgroundSize: 'cover', // Ensures the image covers the entire background
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling
        cursor: 'grab',
      }}
    >
      <div className='flex flex-col items-center justify-center'>
      <h1 className="text-8xl text-gray-400 font-bold text-left mb-10 ">
        OUR CLIENTS
      </h1>
      <div className="grid grid-cols-8 gap-x-16 gap-y-7 ml-48 mr-48"> {/* Adjusted grid spacing */}
        <img src="/clients/client1.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client2.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client3.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client4.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client5.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client6.png" className="w-auto h-20 object-contain" />


        <img src="/clients/client1.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client2.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client3.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client4.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client5.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client6.png" className="w-auto h-20 object-contain" />
        <img src="/clients/client1.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client2.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client3.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client4.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client5.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client6.png" className="w-auto h-20 object-contain" />
        <img src="/clients/client1.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client2.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client3.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client4.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client5.jpg" className="w-auto h-20 object-contain" />
        <img src="/clients/client6.png" className="w-auto h-20 object-contain" />
        
      </div>
      </div>
      
    </div>
  );
};

export default OurClients;
