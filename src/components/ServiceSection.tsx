
import React from 'react';
import { Button } from '@/components/ui/button';

const ServiceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Logistics Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering seamless end-to-end solutions for all your logistics needs with reliability and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-garvish-lightgray p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Express Parcel</h3>
            <p className="text-gray-600 mb-4">
              Fast, reliable delivery for e-commerce and retail businesses across India.
            </p>
            <Button variant="outline" className="border-garvish-red text-garvish-red hover:bg-garvish-red hover:text-white">
              Learn More
            </Button>
          </div>
          
          <div className="bg-garvish-lightgray p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Part Truckload (PTL)</h3>
            <p className="text-gray-600 mb-4">
              Cost-effective shipping solutions for medium-sized freight across the country.
            </p>
            <Button variant="outline" className="border-garvish-red text-garvish-red hover:bg-garvish-red hover:text-white">
              Learn More
            </Button>
          </div>
          
          <div className="bg-garvish-lightgray p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Full Truckload (FTL)</h3>
            <p className="text-gray-600 mb-4">
              Dedicated vehicles for large shipments with end-to-end tracking capability.
            </p>
            <Button variant="outline" className="border-garvish-red text-garvish-red hover:bg-garvish-red hover:text-white">
              Learn More
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-garvish-red hover:bg-garvish-dark">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
