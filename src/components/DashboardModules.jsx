import { FileText, Users, Wallet, BarChart3, Download } from "lucide-react";

function ModuleCard({ icon: Icon, title, desc, actionLabel }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 text-white">
            <Icon size={18} />
          </div>
          <div>
            <h3 className="text-slate-900 font-medium">{title}</h3>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        </div>
        {actionLabel && (
          <button className="text-indigo-600 text-sm font-medium hover:underline">{actionLabel}</button>
        )}
      </div>
    </div>
  );
}

function MiniTable() {
  const rows = [
    { campaign: "Spring Launch", task: "IG Story", status: "Pending", amount: "$450" },
    { campaign: "App UA", task: "YouTube Mention", status: "Completed", amount: "$1,200" },
    { campaign: "Referral", task: "Promo Code", status: "In Review", amount: "$320" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <h4 className="font-medium text-slate-900">Recent Payouts</h4>
        <button className="inline-flex items-center gap-2 text-sm text-slate-700 hover:underline">
          <Download size={16} /> Export CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-600">
              <th className="text-left px-4 py-2 font-medium">Campaign</th>
              <th className="text-left px-4 py-2 font-medium">Task</th>
              <th className="text-left px-4 py-2 font-medium">Status</th>
              <th className="text-right px-4 py-2 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="px-4 py-2">{r.campaign}</td>
                <td className="px-4 py-2">{r.task}</td>
                <td className="px-4 py-2">
                  <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs border border-slate-200 bg-slate-50 text-slate-700">
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-right font-medium text-slate-900">{r.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function DashboardModules() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <ModuleCard
            icon={FileText}
            title="Contract & Deal Flow"
            desc="Upload PDFs, parse JSON, assign to deal groups and preview tasks."
            actionLabel="Start"
          />
          <ModuleCard
            icon={Users}
            title="Creator Dashboard"
            desc="Send invites, track acceptances, and collect proof-of-completion."
            actionLabel="Manage"
          />
        </div>
        <MiniTable />
      </div>
      <div className="space-y-5">
        <ModuleCard
          icon={Wallet}
          title="Payout & Wallet Overview"
          desc="Pending and completed payouts with bonus/base/referral breakdowns."
          actionLabel="Review"
        />
        <ModuleCard
          icon={BarChart3}
          title="Analytics"
          desc="Campaign performance, ROI, and creator heatmaps with filters."
          actionLabel="Open"
        />
      </div>
    </div>
  );
}
