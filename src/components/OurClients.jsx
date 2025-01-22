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
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-gray-400 font-bold text-center mb-10">
          OUR CLIENTS
        </h1>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5  px-5 md:px-10 lg:gap-x-16 lg:gap-y-7 lg:ml-48 lg:mr-48">
          {/* Adjusted grid spacing */}
          {[
            'client1.jpg',
            'client2.jpg',
            'client3.jpg',
            'client4.jpg',
            'client5.jpg',
            'client6.png',
            'client7.jpg',
            'client1.jpg',
            'client2.jpg',
            'client3.jpg',
            'client4.jpg',
            'client5.jpg',
            'client6.png',
            'client7.jpg',
          ].map((client, index) => (
            <img
              key={index}
              src={`/clients/${client}`}
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-20 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
