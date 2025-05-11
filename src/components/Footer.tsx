
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-garvish-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="text-xl font-bold mb-4">GARVISH</h5>
            <p className="text-gray-300 mb-4">
              India's largest fully integrated logistics services provider.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-garvish-red">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-garvish-red">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-garvish-red">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-garvish-red">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Our Services</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-garvish-red">Express Parcel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-garvish-red">PTL</a></li>
              <li><a href="#" className="text-gray-300 hover:text-garvish-red">FTL</a></li>
              <li><a href="#" className="text-gray-300 hover:text-garvish-red">Cross Border</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@garvish.com</li>
              <li className="text-gray-300">Phone: +91 1800 000 0000</li>
              <li className="text-gray-300">Corporate Office: Delhi, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Garvish. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-garvish-red">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-garvish-red">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
