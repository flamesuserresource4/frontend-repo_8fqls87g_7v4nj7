import React from 'react';
import { Hand, Briefcase, CalendarCheck, DollarSign, Mail } from 'lucide-react';

const WelcomeStrip = () => {
  const creator = { name: 'Ben' };
  const stats = {
    activeDeals: 3,
    upcomingTasks: 5,
    mtdEarned: 4820,
    invites: 2,
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
            <Hand className="w-5 h-5" />
          </div>
          <div>
            <div className="text-slate-900 font-semibold text-lg">Welcome back, {creator.name} 👋</div>
            <div className="text-slate-600 text-sm">Here's a quick look at your performance</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full md:w-auto">
          <Stat icon={<Briefcase className="w-4 h-4 text-indigo-600" />} label="Active Deals" value={stats.activeDeals} />
          <Stat icon={<CalendarCheck className="w-4 h-4 text-amber-600" />} label="Upcoming Tasks" value={stats.upcomingTasks} />
          <Stat icon={<DollarSign className="w-4 h-4 text-emerald-600" />} label="Total Earned (MTD)" value={`$${stats.mtdEarned.toLocaleString()}`} />
          <Stat icon={<Mail className="w-4 h-4 text-slate-700" />} label="Invites Pending" value={stats.invites} />
        </div>
      </div>
    </div>
  );
};

const Stat = ({ icon, label, value }) => (
  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/60">
    <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    <div className="mt-1 flex items-center justify-between text-slate-900">
      <span className="font-semibold">{value}</span>
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white border border-slate-200">{icon}</span>
    </div>
  </div>
);

export default WelcomeStrip;
