import React from 'react';
import DealHero from './components/DealHero';
import DealHeaderAndMetadata from './components/DealHeaderAndMetadata';
import TasksPanel from './components/TasksPanel';
import InsightsPanel from './components/InsightsPanel';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <DealHero />
        <DealHeaderAndMetadata />
        <TasksPanel />
        <InsightsPanel />
        <footer className="pt-8 pb-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Adbridge — Deal Overview
        </footer>
      </div>
    </div>
  );
}

export default App;
