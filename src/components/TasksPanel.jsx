import React from 'react';
import { CheckCircle2, AlertCircle, XCircle, Search, Calendar } from 'lucide-react';

const sampleTasks = [
  {
    title: 'YouTube Dedicated Video',
    trigger: 'post_publish',
    basis: 'views',
    unit: 'USD',
    rate: 2500,
    integration: '60s mid-roll',
    deadline: '2025-11-20',
    status: 'Verified',
  },
  {
    title: 'Trackable Link Conversions',
    trigger: 'conversion',
    basis: 'net_sales',
    unit: '% of net',
    rate: 8,
    integration: 'N/A',
    deadline: 'Ongoing',
    status: 'In Progress',
  },
  {
    title: 'Instagram Story Set',
    trigger: 'post_publish',
    basis: 'views',
    unit: 'USD',
    rate: 600,
    integration: '3 frames',
    deadline: '2025-12-01',
    status: 'Not Started',
  },
];

const TasksPanel = () => {
  const totals = {
    completed: sampleTasks.filter((t) => t.status === 'Verified').length,
    inProgress: sampleTasks.filter((t) => t.status === 'In Progress').length,
    pending: sampleTasks.filter((t) => t.status === 'Not Started').length,
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Tasks</h2>
          <p className="text-slate-600 text-sm">Assigned deliverables within this deal</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input className="pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Search tasks" />
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">
            <Calendar className="w-4 h-4" /> Timeline
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <KpiCard icon={<CheckCircle2 className="w-4 h-4 text-emerald-600" />} label="Completed" value={totals.completed} tone="emerald" />
        <KpiCard icon={<AlertCircle className="w-4 h-4 text-amber-600" />} label="In Progress" value={totals.inProgress} tone="amber" />
        <KpiCard icon={<XCircle className="w-4 h-4 text-slate-600" />} label="Pending" value={totals.pending} tone="slate" />
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              {['Task Title','Trigger Type','Basis','Payout Unit','Payout Rate','Integration Length','Deadline / Timeline','Status','']
                .map((h) => (<th key={h} className="px-3 py-2 font-medium">{h}</th>))}
            </tr>
          </thead>
          <tbody>
            {sampleTasks.map((t, i) => (
              <tr key={i} className="border-t border-slate-200">
                <td className="px-3 py-3 text-slate-900 font-medium">{t.title}</td>
                <td className="px-3 py-3 text-slate-700">{t.trigger}</td>
                <td className="px-3 py-3 text-slate-700">{t.basis}</td>
                <td className="px-3 py-3 text-slate-700">{t.unit}</td>
                <td className="px-3 py-3 text-slate-700">{t.rate}{t.unit === '% of net' ? '%' : ''}</td>
                <td className="px-3 py-3 text-slate-700">{t.integration}</td>
                <td className="px-3 py-3 text-slate-700">{t.deadline}</td>
                <td className="px-3 py-3">
                  <StatusPill status={t.status} />
                </td>
                <td className="px-3 py-3 text-right">
                  <button className="text-indigo-600 hover:underline">View Task</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const KpiCard = ({ icon, label, value }) => (
  <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60">
    <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    <div className="mt-1 flex items-center gap-2 text-slate-900"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-slate-200">{icon}</span><span className="text-lg font-semibold">{value}</span></div>
  </div>
);

const StatusPill = ({ status }) => {
  const map = {
    'Verified': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'In Progress': 'bg-amber-50 text-amber-700 border-amber-200',
    'Not Started': 'bg-slate-100 text-slate-700 border-slate-200',
  };
  return <span className={`inline-flex px-2 py-1 rounded-full border text-xs ${map[status] || map['Not Started']}`}>{status}</span>;
};

export default TasksPanel;
