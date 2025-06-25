
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface ScalingEvent {
  time: string;
  action: 'scale-up' | 'scale-down';
  reason: string;
  instances: string;
}

const scalingEvents: ScalingEvent[] = [
  {
    time: '2 min ago',
    action: 'scale-up',
    reason: 'High CPU utilization (>75%)',
    instances: '20 → 24'
  },
  {
    time: '15 min ago',
    action: 'scale-up',
    reason: 'Increased request rate',
    instances: '16 → 20'
  },
  {
    time: '1 hour ago',
    action: 'scale-down',
    reason: 'Low traffic period',
    instances: '20 → 16'
  },
  {
    time: '2 hours ago',
    action: 'scale-up',
    reason: 'Peak hours detected',
    instances: '12 → 20'
  }
];

export const AutoScalingActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5" />
          <span>Auto-Scaling Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scalingEvents.map((event, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 mt-1">
                {event.action === 'scale-up' ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-blue-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {event.action === 'scale-up' ? 'Scaled Up' : 'Scaled Down'}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {event.instances}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">{event.reason}</p>
                <p className="text-xs text-gray-500 mt-1">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
