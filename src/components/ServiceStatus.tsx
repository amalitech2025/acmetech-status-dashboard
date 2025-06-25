
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Cloud, Shield, Gauge } from 'lucide-react';

interface Service {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  icon: React.ComponentType<any>;
  responseTime: string;
}

const services: Service[] = [
  {
    name: 'Web Application',
    status: 'operational',
    uptime: '99.98%',
    icon: Monitor,
    responseTime: '42ms'
  },
  {
    name: 'API Gateway',
    status: 'operational',
    uptime: '99.99%',
    icon: Cloud,
    responseTime: '28ms'
  },
  {
    name: 'Authentication Service',
    status: 'operational',
    uptime: '99.97%',
    icon: Shield,
    responseTime: '15ms'
  },
  {
    name: 'Database Cluster',
    status: 'operational',
    uptime: '99.99%',
    icon: Gauge,
    responseTime: '8ms'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'degraded':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'outage':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const ServiceStatus = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Monitor className="h-5 w-5" />
          <span>Service Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <service.icon className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-600">Uptime: {service.uptime}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Response Time</p>
                  <p className="font-mono text-sm font-semibold">{service.responseTime}</p>
                </div>
                <Badge className={getStatusColor(service.status)}>
                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
