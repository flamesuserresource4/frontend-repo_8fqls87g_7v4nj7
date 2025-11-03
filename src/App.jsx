import React from 'react';
import CreatorHero from './components/CreatorHero';
import WelcomeStrip from './components/WelcomeStrip';
import CreatorMain from './components/CreatorMain';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <CreatorHero />
        <WelcomeStrip />
        <CreatorMain />
        <footer className="pt-8 pb-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Adbridge — Creator Dashboard</footer>
      </div>
    </div>
  );
}

export default App;
