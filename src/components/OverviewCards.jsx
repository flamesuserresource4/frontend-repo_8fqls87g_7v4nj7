import { useState } from "react";
import { ArrowUpRight, Users, Wallet, BarChart3, Folder } from "lucide-react";

function StatCard({ icon: Icon, label, value, change }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 text-white">
            <Icon size={18} />
          </div>
          <div>
            <p className="text-sm text-slate-600">{label}</p>
            <p className="text-xl font-semibold text-slate-900">{value}</p>
          </div>
        </div>
        {change && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-full">
            <ArrowUpRight size={14} /> {change}
          </span>
        )}
      </div>
    </div>
  );
}

export default function OverviewCards() {
  const [range, setRange] = useState("Last 30 days");
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-slate-900">Overview</h2>
        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1">
          {["Last 30 days", "This quarter"].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`text-xs px-2 py-1 rounded-md ${
                range === r ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Folder} label="Total Campaigns" value="24" change="+8%" />
        <StatCard icon={Users} label="Active Creators" value="186" change="+12%" />
        <StatCard icon={Wallet} label="Payouts This Month" value="$142,300" change="+5%" />
        <StatCard icon={BarChart3} label="Conversion Rate" value="3.9%" change="+0.4%" />
      </div>
    </section>
  );
}
