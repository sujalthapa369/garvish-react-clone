
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrackOrder from '@/components/TrackOrder';
import StatsSection from '@/components/StatsSection';
import ServiceSection from '@/components/ServiceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className="container mx-auto px-4">
          <TrackOrder />
        </div>
        
        <StatsSection />
        <ServiceSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
