import BrandTopNav from "./components/BrandTopNav";
import HeroSection from "./components/HeroSection";
import OverviewCards from "./components/OverviewCards";
import MainPanel from "./components/MainPanel";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      <BrandTopNav />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="py-6 space-y-6">
          <HeroSection />
          <OverviewCards />
          <MainPanel />
        </main>
      </div>
      <footer className="mt-10 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Adbridge — Standardize and automate performance-based brand–creator deals.
      </footer>
    </div>
  );
}

export default App;
