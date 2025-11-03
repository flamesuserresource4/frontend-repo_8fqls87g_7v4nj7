import React from 'react';
import { Wallet, FileText, TrendingUp, BarChart3, LineChart, Clock } from 'lucide-react';

const InsightsPanel = () => {
  const payout = {
    totalEarned: 18750,
    bonus: 1250,
    upcoming: 3200,
    lastPayout: '2025-11-05',
    method: 'ACH',
  };

  const metrics = {
    conversions: 842,
    netSales: 234560,
    roi: 212,
    refundRate: 1.8,
    ctr: 3.2,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Payout Status</h3>
            <p className="text-sm text-slate-600">Financial snapshot for this deal</p>
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">
            <Wallet className="w-4 h-4" /> View Wallet
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Money label="Total Earned" amount={payout.totalEarned} highlight />
          <Money label="Bonus Payouts" amount={payout.bonus} />
          <Money label="Upcoming Payouts" amount={payout.upcoming} />
          <KV label="Last Payout Sent" value={payout.lastPayout} />
          <KV label="Payment Method" value={payout.method} />
          <div className="col-span-2">
            <button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">
              <FileText className="w-4 h-4" /> Export Payouts CSV
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Performance Analytics</h3>
            <p className="text-sm text-slate-600">Daily conversions and key metrics</p>
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">
            <LineChart className="w-4 h-4" /> Link Analytics Source
          </button>
        </div>
        <div className="mt-4">
          {/* Simple placeholder chart using CSS gradients for now */}
          <div className="h-32 w-full rounded-lg bg-gradient-to-tr from-indigo-100 via-indigo-200 to-purple-100 border border-slate-200 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,_#ffffff_1px,_transparent_0)] [background-size:16px_16px]" />
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Metric label="Conversion count" value={metrics.conversions} icon={<TrendingUp className="w-4 h-4 text-indigo-600" />} />
            <Metric label="Net Sales" value={`$${metrics.netSales.toLocaleString()}`} icon={<BarChart3 className="w-4 h-4 text-indigo-600" />} />
            <Metric label="ROI" value={`${metrics.roi}%`} icon={<TrendingUp className="w-4 h-4 text-emerald-600" />} />
            <Metric label="Refund Rate" value={`${metrics.refundRate}%`} icon={<Clock className="w-4 h-4 text-amber-600" />} />
            <Metric label="CTR" value={`${metrics.ctr}%`} icon={<TrendingUp className="w-4 h-4 text-slate-700" />} />
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Activity Log</h3>
            <p className="text-sm text-slate-600">Audit trail of all actions</p>
          </div>
        </div>
        <ul className="mt-4 space-y-3">
          {activity.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className={`mt-1 w-2 h-2 rounded-full ${dotColor(item.type)}`} />
              <div>
                <div className="text-slate-900 text-sm">{item.title}</div>
                <div className="text-slate-500 text-xs">{item.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const activity = [
  { type: 'created', title: 'Deal Created by Amelia Hart', time: 'Oct 01, 2025 10:12 AM' },
  { type: 'contract', title: 'Contract Sent to Creator', time: 'Oct 01, 2025 10:15 AM' },
  { type: 'signed', title: 'Creator Signed Contract', time: 'Oct 02, 2025 2:41 PM' },
  { type: 'task', title: 'Task "YouTube Dedicated Video" marked Verified', time: 'Nov 05, 2025 6:03 PM' },
  { type: 'payout', title: 'Payout Triggered: $7,500', time: 'Nov 05, 2025 6:05 PM' },
  { type: 'bonus', title: 'Bonus Achieved: $1,250', time: 'Nov 07, 2025 11:18 AM' },
  { type: 'message', title: 'Message sent to Creator', time: 'Nov 10, 2025 9:02 AM' },
];

const dotColor = (type) => {
  switch (type) {
    case 'created':
      return 'bg-slate-400';
    case 'contract':
      return 'bg-indigo-400';
    case 'signed':
      return 'bg-emerald-500';
    case 'task':
      return 'bg-blue-400';
    case 'payout':
      return 'bg-purple-400';
    case 'bonus':
      return 'bg-amber-400';
    case 'message':
      return 'bg-slate-600';
    default:
      return 'bg-slate-300';
  }
};

const Money = ({ label, amount, highlight }) => (
  <div className={`p-4 rounded-lg border ${highlight ? 'border-indigo-200 bg-indigo-50/60' : 'border-slate-200 bg-slate-50/60'}`}>
    <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    <div className="mt-1 text-lg font-semibold text-slate-900">${amount.toLocaleString()}</div>
  </div>
);

const KV = ({ label, value }) => (
  <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60">
    <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    <div className="mt-1 text-slate-900">{value}</div>
  </div>
);

const Metric = ({ label, value, icon }) => (
  <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60 flex items-center justify-between">
    <div>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-slate-900 font-semibold">{value}</div>
    </div>
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200">
      {icon}
    </span>
  </div>
);

export default InsightsPanel;
