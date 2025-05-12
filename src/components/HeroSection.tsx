
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-garvish-dark text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/d6145ff9-6145-4ddb-892f-e690f2d1b2ef.png")', 
          opacity: 0.3 
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We are India's largest fully integrated 
            <span className="block text-garvish-red">logistics services</span> provider
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-10">
            <div className="bg-black bg-opacity-30 px-4 py-2 rounded-full">
              Express Parcel
            </div>
            <div className="bg-black bg-opacity-30 px-4 py-2 rounded-full">
              PTL
            </div>
            <div className="bg-black bg-opacity-30 px-4 py-2 rounded-full">
              FTL
            </div>
            <div className="bg-black bg-opacity-30 px-4 py-2 rounded-full">
              Cross Border
            </div>
            <div className="bg-black bg-opacity-30 px-4 py-2 rounded-full">
              Supply Chain
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
