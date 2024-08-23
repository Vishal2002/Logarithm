"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UpgradePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Upgrade Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-800 text-white rounded-lg shadow-lg">
          <CardHeader className="bg-gray-700 p-4 rounded-t-lg">
            <CardTitle className="text-2xl font-bold">Basic Plan</CardTitle>
            <CardDescription className="text-gray-400">For casual users</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-3xl font-bold mb-4">$9.99/month</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Feature 1</li>
              <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Feature 2</li>
              <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Feature 3</li>
            </ul>
          </CardContent>
          <CardFooter className="p-4 bg-gray-700 rounded-b-lg">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Choose Plan</Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-800 text-white rounded-lg shadow-lg">
          <CardHeader className="bg-gray-700 p-4 rounded-t-lg">
            <CardTitle className="text-2xl font-bold">Pro Plan</CardTitle>
            <CardDescription className="text-gray-400">For power users</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-3xl font-bold mb-4">$19.99/month</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> All Basic features</li>
              <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Advanced Feature 1</li>
              <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Advanced Feature 2</li>
            </ul>
          </CardContent>
          <CardFooter className="p-4 bg-gray-700 rounded-b-lg">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Choose Plan</Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-800 text-white rounded-lg shadow-lg">
          <CardHeader className="bg-gray-700 p-4 rounded-t-lg">
            <CardTitle className="text-2xl font-bold">Enterprise Plan</CardTitle>
            <CardDescription className="text-gray-400">For large teams</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-3xl font-bold mb-4">Custom Pricing</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> All Pro features</li>
              <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Custom integrations</li>
              <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Dedicated support</li>
            </ul>
          </CardContent>
          <CardFooter className="p-4 bg-gray-700 rounded-b-lg">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center my-8">
        <h1 className="text-red-400 font-bold text-2xl">Currently Under Working</h1>
      </div>
    </div>
  );
};

export default UpgradePage;
