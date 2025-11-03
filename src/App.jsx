import HeaderBar from "./components/HeaderBar";
import SidebarNav from "./components/SidebarNav";
import HeroSection from "./components/HeroSection";
import DashboardModules from "./components/DashboardModules";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      <HeaderBar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <SidebarNav />
          <main className="flex-1 py-6 space-y-6">
            <HeroSection />
            <DashboardModules />
          </main>
        </div>
      </div>
      <footer className="mt-10 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Adbridge — Standardize and automate performance-based brand–creator deals.
      </footer>
    </div>
  );
}

export default App;
