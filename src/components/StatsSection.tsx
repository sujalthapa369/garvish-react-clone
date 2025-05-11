
import React from 'react';

const StatCard = ({ number, description }: { number: string; description: string }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
      <div className="text-2xl md:text-3xl font-bold text-garvish-dark mb-2">
        {number}
      </div>
      <p className="text-garvish-gray text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-garvish-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexibility, Reliability and Scale
          </h2>
          <p className="text-xl font-medium text-garvish-red">
            The Answer is Garvish
          </p>
          <div className="w-20 h-1 bg-garvish-red mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            number="3.4 Bn+" 
            description="Shipments shipped since inception"
          />
          <StatCard 
            number="99.5%" 
            description="India's pin-code covered"
          />
          <StatCard 
            number="33K+" 
            description="Businesses served"
          />
          <StatCard 
            number="6.1 Mn+" 
            description="Tonnes freight shipped"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
