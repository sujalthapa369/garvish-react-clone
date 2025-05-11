
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-garvish-dark text-white">
      <div className="container mx-auto py-4 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <a href="/" className="text-white no-underline">
              GARVISH
            </a>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#services" className="text-white no-underline hover:text-garvish-red transition-colors">
              Services
            </a>
            <a href="#solutions" className="text-white no-underline hover:text-garvish-red transition-colors">
              Solutions
            </a>
            <a href="#partner" className="text-white no-underline hover:text-garvish-red transition-colors">
              Partner
            </a>
            <a href="#company" className="text-white no-underline hover:text-garvish-red transition-colors">
              Company
            </a>
            <a href="#track" className="text-white no-underline hover:text-garvish-red transition-colors">
              Track
            </a>
            <a href="#support" className="text-white no-underline hover:text-garvish-red transition-colors">
              Support
            </a>
            <Button className="bg-white text-garvish-dark hover:bg-garvish-red hover:text-white transition-colors">
              Ship Now
            </Button>
          </nav>
        </div>
      </div>
      <div className="bg-garvish-red py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-4 text-sm">
            SERVICE UPDATES: Grateful to armed forces for the ceasefire. Please track the latest updates on our service resumption from this link.
          </span>
          <span className="mx-4 text-sm">
            Services in some parts of North India will be disrupted due to recent developments along the Indian border and resulting restrictions.
          </span>
          <span className="mx-4 text-sm">
            Beware of emails or communications from any other websites.
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
