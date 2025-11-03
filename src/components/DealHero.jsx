import React from 'react';
import Spline from '@splinetool/react-spline';

const DealHero = () => {
  return (
    <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 border border-slate-200">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
      <div className="relative h-full flex items-end">
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">Deal Overview</h1>
          <p className="text-slate-600 mt-1">Full breakdown of one brand–creator engagement</p>
        </div>
      </div>
    </div>
  );
};

export default DealHero;
