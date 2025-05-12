
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
    </div>
  );
};

export default TrackOrder;
