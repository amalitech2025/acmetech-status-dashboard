
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Wifi } from 'lucide-react';

interface Region {
  name: string;
  country: string;
  status: 'healthy' | 'warning' | 'critical';
  latency: string;
  availability: string;
}

const regions: Region[] = [
  {
    name: 'Lagos',
    country: 'Nigeria',
    status: 'healthy',
    latency: '12ms',
    availability: '99.99%'
  },
  {
    name: 'Accra',
    country: 'Ghana',
    status: 'healthy',
    latency: '18ms',
    availability: '99.97%'
  },
  {
    name: 'Abidjan',
    country: 'Côte d\'Ivoire',
    status: 'healthy',
    latency: '24ms',
    availability: '99.95%'
  },
  {
    name: 'Dakar',
    country: 'Senegal',
    status: 'warning',
    latency: '45ms',
    availability: '99.89%'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'healthy':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'critical':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const RegionalStatus = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5" />
          <span>Regional Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {regions.map((region, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Wifi className="h-5 w-5 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">{region.name}</h4>
                  <p className="text-sm text-gray-600">{region.country}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right text-sm">
                  <p className="text-gray-600">{region.latency}</p>
                  <p className="text-gray-600">{region.availability}</p>
                </div>
                <Badge className={getStatusColor(region.status)}>
                  {region.status.charAt(0).toUpperCase() + region.status.slice(1)}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
