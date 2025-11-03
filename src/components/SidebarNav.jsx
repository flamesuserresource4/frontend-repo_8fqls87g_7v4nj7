import { Home, FileText, Users, Wallet, BarChart3, Settings } from "lucide-react";

const navItems = [
  { icon: Home, label: "Overview" },
  { icon: FileText, label: "Contracts" },
  { icon: Users, label: "Creators" },
  { icon: Wallet, label: "Payouts" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Admin" },
];

export default function SidebarNav() {
  return (
    <aside className="hidden md:block md:w-64 border-r border-slate-200 bg-white/70 backdrop-blur h-[calc(100vh-4rem)] sticky top-16">
      <nav className="p-4 space-y-1">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            <Icon size={18} />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </nav>
      <div className="px-4">
        <div className="mt-4 rounded-lg border border-slate-200 p-3">
          <p className="text-xs text-slate-500">Quick tip</p>
          <p className="text-sm text-slate-700 mt-1">Standardize deal terms, automate task triggers, and sync payouts.</p>
        </div>
      </div>
    </aside>
  );
}
