
import React, { useState, useEffect } from 'react';
import { ServiceStatus } from './ServiceStatus';
import { RegionalStatus } from './RegionalStatus';
import { MetricsOverview } from './MetricsOverview';
import { IncidentFeed } from './IncidentFeed';
import { AutoScalingActivity } from './AutoScalingActivity';

export const StatusDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          System Status Dashboard
        </h2>
        <p className="text-xl text-gray-600 mb-2">
          Real-time monitoring across West Africa
        </p>
        <p className="text-sm text-gray-500">
          Last updated: {currentTime.toLocaleString()}
        </p>
      </div>

      {/* Main Status Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <ServiceStatus />
        </div>
        <div>
          <MetricsOverview />
        </div>
      </div>

      {/* Regional and Scaling Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <RegionalStatus />
        <AutoScalingActivity />
      </div>

      {/* Incident Feed */}
      <IncidentFeed />
    </div>
  );
};
