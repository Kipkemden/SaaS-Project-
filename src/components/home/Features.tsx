import React from 'react';
import { Wallet, Users, Tool, BarChart3 } from 'lucide-react';

const features = [
  {
    name: 'M-Pesa Rent Collection',
    description: 'Seamlessly collect rent payments through M-Pesa integration, with automatic reconciliation and receipt generation.',
    icon: Wallet,
  },
  {
    name: 'Tenant Screening & Management',
    description: 'Comprehensive tenant screening process with background checks and digital lease management.',
    icon: Users,
  },
  {
    name: 'Maintenance Tracking',
    description: 'Digital maintenance request system with real-time updates and contractor management.',
    icon: Tool,
  },
  {
    name: 'Financial Reporting',
    description: 'Detailed financial reports and analytics to track your property performance and ROI.',
    icon: BarChart3,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your properties
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of tools helps you streamline your property management operations.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;