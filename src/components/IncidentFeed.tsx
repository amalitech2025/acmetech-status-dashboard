
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface Incident {
  id: string;
  title: string;
  status: 'resolved' | 'investigating' | 'monitoring' | 'identified';
  severity: 'low' | 'medium' | 'high' | 'critical';
  time: string;
  description: string;
}

const incidents: Incident[] = [
  {
    id: '1',
    title: 'All Systems Operational',
    status: 'resolved',
    severity: 'low',
    time: '30 days ago',
    description: 'No incidents reported in the last 30 days. All systems running smoothly.'
  },
  {
    id: '2',
    title: 'Scheduled Maintenance - Database Optimization',
    status: 'resolved',
    severity: 'low',
    time: '7 days ago',
    description: 'Completed routine database optimization during low-traffic hours. No user impact.'
  },
  {
    id: '3',
    title: 'Performance Improvement Deployment',
    status: 'resolved',
    severity: 'low',
    time: '14 days ago',
    description: 'Successfully deployed performance improvements across all regions.'
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'resolved':
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case 'investigating':
      return <AlertCircle className="h-4 w-4 text-yellow-600" />;
    case 'monitoring':
      return <Info className="h-4 w-4 text-blue-600" />;
    default:
      return <AlertCircle className="h-4 w-4 text-red-600" />;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'low':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'high':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'critical':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const IncidentFeed = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {incidents.length === 0 ? (
          <div className="text-center py-8">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <p className="text-gray-600">No incidents to report</p>
            <p className="text-sm text-gray-500">All systems are operating normally</p>
          </div>
        ) : (
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="border-l-4 border-green-500 pl-4 py-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {getStatusIcon(incident.status)}
                    <div>
                      <h4 className="font-semibold text-gray-900">{incident.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{incident.description}</p>
                      <p className="text-xs text-gray-500 mt-2">{incident.time}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Badge className={getSeverityColor(incident.severity)}>
                      {incident.severity.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">
                      {incident.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
