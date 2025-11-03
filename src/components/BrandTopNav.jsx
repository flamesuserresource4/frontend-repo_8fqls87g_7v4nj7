import { Bell, Plus, ChevronDown, Settings, LogOut, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function BrandTopNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400" />
          <div>
            <h1 className="text-slate-900 font-semibold leading-tight">Adbridge</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Brand Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white text-sm px-3 py-2 hover:bg-slate-800">
            <Plus size={16} />
            Create Deal Group
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600" aria-label="Notifications">
            <Bell size={18} />
          </button>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 pl-3 ml-1 border-l border-slate-200"
            >
              <div className="h-8 w-8 rounded-full bg-slate-200 grid place-items-center">
                <User size={16} className="text-slate-600" />
              </div>
              <ChevronDown size={16} className="text-slate-600" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 rounded-lg border border-slate-200 bg-white shadow-lg overflow-hidden">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  <Settings size={16} /> Settings
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
