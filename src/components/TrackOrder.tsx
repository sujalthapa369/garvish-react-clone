
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TrackOrder = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto -mt-20 relative z-20">
      <h3 className="text-xl font-medium mb-4">Track your order through</h3>
      
      <Tabs defaultValue="mobile" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="vehicle">Truck/Vehicle Number</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mobile" className="space-y-4">
          <Input 
            type="tel" 
            placeholder="Enter your mobile number"
            className="w-full"
          />
          <Button className="w-full bg-garvish-dark hover:bg-garvish-red">
            Get OTP
          </Button>
        </TabsContent>
        
        <TabsContent value="vehicle" className="space-y-4">
          <Input 
            type="text" 
            placeholder="Enter Truck or Vehicle Number"
            className="w-full"
          />
          <Button className="w-full bg-garvish-dark hover:bg-garvish-red">
            Track
          </Button>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Live tracking updates in your support on our App</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="inline-block">
            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-10" />
          </a>
          <a href="#" className="inline-block">
            <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
