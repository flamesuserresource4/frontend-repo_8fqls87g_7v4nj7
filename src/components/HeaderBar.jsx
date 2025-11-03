import { Bell, Settings, User } from "lucide-react";

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400" />
          <div>
            <h1 className="text-slate-900 font-semibold leading-tight">Adbridge</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Contracts · Tasks · Payouts · Analytics</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600" aria-label="Notifications">
            <Bell size={18} />
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600" aria-label="Settings">
            <Settings size={18} />
          </button>
          <div className="flex items-center gap-2 pl-3 ml-1 border-l border-slate-200">
            <div className="h-8 w-8 rounded-full bg-slate-200 grid place-items-center">
              <User size={16} className="text-slate-600" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-medium text-slate-900">Demo User</div>
              <div className="text-xs text-slate-500">Brand Manager</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
