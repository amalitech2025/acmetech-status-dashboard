
import React from 'react';
import { StatusDashboard } from '../components/StatusDashboard';
import { Header } from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <StatusDashboard />
    </div>
  );
};

export default Index;
