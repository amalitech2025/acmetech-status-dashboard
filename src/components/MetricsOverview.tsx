
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Activity, Cloud, Gauge } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ComponentType<any>;
}

const metrics: Metric[] = [
  {
    label: 'Active Users',
    value: '12,547',
    change: '+12.5%',
    trend: 'up',
    icon: Activity
  },
  {
    label: 'Requests/Min',
    value: '8,423',
    change: '+5.2%',
    trend: 'up',
    icon: TrendingUp
  },
  {
    label: 'Active Instances',
    value: '24',
    change: '+3',
    trend: 'up',
    icon: Cloud
  },
  {
    label: 'Avg Response',
    value: '32ms',
    change: '-8ms',
    trend: 'down',
    icon: Gauge
  }
];

export const MetricsOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5" />
          <span>Live Metrics</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <metric.icon className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">{metric.label}</span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{metric.value}</p>
                <p className={`text-xs ${
                  metric.trend === 'up' ? 'text-green-600' : 
                  metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
