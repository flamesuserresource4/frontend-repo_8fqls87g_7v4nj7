import { useState } from "react";
import { Search, Filter, Calendar, Eye, Download } from "lucide-react";

function CampaignsTable() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [dateRange, setDateRange] = useState("This quarter");

  const rows = [
    { name: "Spring Launch", status: "Active", creators: 42, start: "2025-03-01", end: "2025-06-01", spend: "$85,000", roi: "142%" },
    { name: "App UA", status: "Draft", creators: 18, start: "2025-05-12", end: "2025-07-31", spend: "$22,400", roi: "—" },
    { name: "Referral Push", status: "Active", creators: 73, start: "2025-02-10", end: "2025-05-20", spend: "$64,900", roi: "126%" },
    { name: "Holiday Teasers", status: "Closed", creators: 120, start: "2024-11-01", end: "2025-01-05", spend: "$210,000", roi: "189%" },
  ];

  const filtered = rows.filter((r) => {
    const matchesQuery = r.name.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "All" ? true : r.status === status;
    return matchesQuery && matchesStatus;
  });

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 w-full lg:w-auto">
            <div className="flex items-center gap-2 flex-1 rounded-lg border border-slate-200 px-3 py-2 bg-white">
              <Search size={16} className="text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search campaigns..."
                className="w-full outline-none text-sm text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-1 bg-white">
              <Filter size={16} className="text-slate-600" />
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="text-sm text-slate-700 bg-transparent outline-none"
              >
                {['All','Draft','Active','Closed'].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-1 bg-white">
              <Calendar size={16} className="text-slate-600" />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="text-sm text-slate-700 bg-transparent outline-none"
              >
                {['This quarter','Last 30 days','This year'].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <p className="text-xs text-slate-500">{filtered.length} results • {dateRange}</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-600">
              <th className="text-left px-4 py-2 font-medium">Campaign Name</th>
              <th className="text-left px-4 py-2 font-medium">Status</th>
              <th className="text-left px-4 py-2 font-medium">Creators</th>
              <th className="text-left px-4 py-2 font-medium">Start Date</th>
              <th className="text-left px-4 py-2 font-medium">End Date</th>
              <th className="text-left px-4 py-2 font-medium">Total Spend</th>
              <th className="text-left px-4 py-2 font-medium">ROI (%)</th>
              <th className="text-right px-4 py-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={i} className="border-t border-slate-100 hover:bg-slate-50/60">
                <td className="px-4 py-2 font-medium text-slate-900">{r.name}</td>
                <td className="px-4 py-2">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs border ${
                    r.status === 'Active' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' :
                    r.status === 'Draft' ? 'border-slate-200 bg-slate-50 text-slate-700' :
                    'border-amber-200 bg-amber-50 text-amber-700'
                  }`}>
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-2">{r.creators}</td>
                <td className="px-4 py-2">{r.start}</td>
                <td className="px-4 py-2">{r.end}</td>
                <td className="px-4 py-2">{r.spend}</td>
                <td className="px-4 py-2">{r.roi}</td>
                <td className="px-4 py-2 text-right">
                  <button className="inline-flex items-center gap-2 text-indigo-600 hover:underline text-sm">
                    <Eye size={16} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ActivityFeed() {
  const items = [
    { type: "join", text: "@sarah_l joined ‘Spring Launch’", time: "2m" },
    { type: "task", text: "@mkdesign completed ‘UGC Video #2’", time: "18m" },
    { type: "payout", text: "New payout triggered: $1,200 for @devonm", time: "1h" },
    { type: "contract", text: "Contract signed by @kevin_io for ‘Referral Push’", time: "3h" },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200">
        <h4 className="font-medium text-slate-900">Recent Creator Activity</h4>
      </div>
      <ul className="divide-y divide-slate-100">
        {items.map((it, i) => (
          <li key={i} className="px-4 py-3 text-sm">
            <p className="text-slate-800">
              <span className="text-indigo-600 hover:underline cursor-pointer">{it.text.split(" ")[0]}</span>{" "}
              {it.text.split(" ").slice(1).join(" ")}
            </p>
            <p className="text-xs text-slate-500 mt-1">{it.time} ago</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PayoutsSnapshot() {
  const rows = [
    { campaign: "Spring Launch", base: "$34,200", bonus: "$3,400", upcoming: "$5,000" },
    { campaign: "App UA", base: "$12,800", bonus: "$900", upcoming: "$2,200" },
    { campaign: "Referral Push", base: "$22,100", bonus: "$1,750", upcoming: "$3,100" },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <h4 className="font-medium text-slate-900">Payouts Snapshot</h4>
        <button className="inline-flex items-center gap-2 text-sm text-slate-700 hover:underline">
          <Download size={16} /> Export CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-600">
              <th className="text-left px-4 py-2 font-medium">Campaign</th>
              <th className="text-left px-4 py-2 font-medium">Base</th>
              <th className="text-left px-4 py-2 font-medium">Bonus</th>
              <th className="text-left px-4 py-2 font-medium">Upcoming</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="px-4 py-2">{r.campaign}</td>
                <td className="px-4 py-2">{r.base}</td>
                <td className="px-4 py-2">{r.bonus}</td>
                <td className="px-4 py-2">{r.upcoming}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function MainPanel() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 space-y-5">
        <CampaignsTable />
      </div>
      <div className="space-y-5">
        <ActivityFeed />
        <PayoutsSnapshot />
      </div>
    </section>
  );
}
