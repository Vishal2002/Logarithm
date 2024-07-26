"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const UpgradePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Upgrade Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Plan</CardTitle>
            <CardDescription>For casual users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$9.99/month</p>
            <ul className="mt-4 space-y-2">
              <li>✓ Feature 1</li>
              <li>✓ Feature 2</li>
              <li>✓ Feature 3</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Plan</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pro Plan</CardTitle>
            <CardDescription>For power users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$19.99/month</p>
            <ul className="mt-4 space-y-2">
              <li>✓ All Basic features</li>
              <li>✓ Advanced Feature 1</li>
              <li>✓ Advanced Feature 2</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Plan</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Enterprise Plan</CardTitle>
            <CardDescription>For large teams</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">Custom Pricing</p>
            <ul className="mt-4 space-y-2">
              <li>✓ All Pro features</li>
              <li>✓ Custom integrations</li>
              <li>✓ Dedicated support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
      <div className='flex justify-center my-5'>
      <h1 className='text-red-400 font-bold text-2xl'>Currently Under Working</h1>
      </div>
    </div>
  )
}

export default UpgradePage