import React, { useMemo, useState } from 'react';
import { Badge, Briefcase, Calendar, DollarSign, Filter, Play, Pause, CheckCircle2, AlertCircle, XCircle, ChevronDown, ChevronRight, MessageSquare, LineChart, Wallet, Star, Mail } from 'lucide-react';

const dealsSample = [
  { id: 'd1', title: 'Holiday Launch', brand: 'Acme Co', status: 'Active', earnings: 7250 },
  { id: 'd2', title: 'Winter Affiliate', brand: 'NorthPeak', status: 'Active', earnings: 3120 },
  { id: 'd3', title: 'Back-to-School', brand: 'Paperly', status: 'Completed', earnings: 15400 },
  { id: 'd4', title: 'Q1 Awareness', brand: 'Hydra', status: 'Paused', earnings: 0 },
];

const tasksSample = [
  { id: 't1', title: 'YouTube Integration 60s', deal: 'Holiday Launch', dueInDays: 6, amount: 2500 },
  { id: 't2', title: 'IG Story Set', deal: 'Winter Affiliate', dueInDays: 2, amount: 600 },
  { id: 't3', title: 'Trackable Link Setup', deal: 'Holiday Launch', dueInDays: -1, amount: 0 },
];

const invitesSample = [
  { id: 'i1', brand: 'Lumen', group: 'Q4 Bundle', tags: ['#UGC', '#Affiliate'], comp: 'Base $1,500 + 8% net', range: 'Nov 15 – Dec 31' },
  { id: 'i2', brand: 'Zephyr', group: 'Holiday CPM Run', tags: ['#CPM'], comp: '$45 CPM, 2x Stories', range: 'Dec 01 – Dec 31' },
];

const messagesSample = [
  { id: 'm1', brand: 'Acme Co', deal: 'Holiday Launch', preview: 'Quick reminder about the draft review...' },
  { id: 'm2', brand: 'NorthPeak', deal: 'Winter Affiliate', preview: 'Your link looks good. Can we also...' },
  { id: 'm3', brand: 'Zephyr', deal: 'Holiday CPM Run', preview: 'Invite details attached. Let us know...' },
];

const CreatorMain = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <DealsSection />
      <TasksSection />
      <InvitesSection />
      <InsightsAndLedger />
      <MessagesSection />
    </div>
  );
};

const DealsSection = () => {
  const [filter, setFilter] = useState('Active');
  const filtered = useMemo(() => {
    if (filter === 'All') return dealsSample;
    return dealsSample.filter((d) => d.status === filter);
  }, [filter]);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">My Deals</h2>
          <p className="text-sm text-slate-600">Showing {filter.toLowerCase()} deals</p>
        </div>
        <div className="flex items-center gap-2">
          {['All','Active','Completed','Paused'].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-full text-sm border ${filter===f? 'bg-indigo-600 text-white border-indigo-600':'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}>{f}</button>
          ))}
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          {filtered.map((d) => (
            <DealCard key={d.id} deal={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DealCard = ({ deal }) => {
  return (
    <div className="w-72 shrink-0 p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-slate-900 font-semibold">{deal.title}</div>
          <div className="text-slate-600 text-sm">{deal.brand}</div>
        </div>
        <StatusBadge status={deal.status} />
      </div>
      <div className="mt-4 text-sm text-slate-600">Total Earnings</div>
      <div className="text-xl font-semibold text-slate-900">${deal.earnings.toLocaleString()}</div>
      <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">View Deal</button>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const map = {
    Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Completed: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Paused: 'bg-amber-50 text-amber-700 border-amber-200',
  };
  return <span className={`inline-flex items-center px-2 py-1 rounded-full border text-xs ${map[status] || 'bg-slate-100 text-slate-700 border-slate-200'}`}>{status}</span>;
};

const TasksSection = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Tasks Due Soon</h2>
          <p className="text-sm text-slate-600">Stay ahead of your deadlines</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {tasksSample.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
      </div>
    </div>
  );
};

const TaskCard = ({ task }) => {
  const urgency = task.dueInDays > 4 ? 'green' : task.dueInDays >= 1 ? 'amber' : 'red';
  const badge = {
    green: { text: 'Due in ' + task.dueInDays + ' days', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    amber: { text: 'Due in ' + task.dueInDays + ' days', cls: 'bg-amber-50 text-amber-700 border-amber-200' },
    red: { text: 'Overdue', cls: 'bg-rose-50 text-rose-700 border-rose-200' },
  }[urgency];

  return (
    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-semibold text-slate-900">{task.title}</div>
          <div className="text-sm text-slate-600">Deal: {task.deal}</div>
        </div>
        <span className={`inline-flex px-2 py-1 rounded-full border text-xs ${badge.cls}`}>{badge.text}</span>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <div className="text-slate-600">Payout</div>
        <div className="font-medium text-slate-900">${task.amount.toLocaleString()}</div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Submit Task</button>
        <button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Mark Complete</button>
      </div>
    </div>
  );
};

const InvitesSection = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
      <button className="w-full flex items-center justify-between" onClick={() => setOpen((v) => !v)}>
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Invites From Brands</h2>
          <p className="text-sm text-slate-600">Deal group invitations awaiting your review</p>
        </div>
        {open ? <ChevronDown className="w-5 h-5 text-slate-500" /> : <ChevronRight className="w-5 h-5 text-slate-500" />}
      </button>
      {open && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {invitesSample.map((inv) => (
            <InviteCard key={inv.id} inv={inv} />
          ))}
        </div>
      )}
    </div>
  );
};

const InviteCard = ({ inv }) => (
  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <div className="font-semibold text-slate-900">{inv.brand}</div>
        <div className="text-sm text-slate-600">{inv.group}</div>
      </div>
      <div className="flex items-center gap-1">
        {inv.tags.map((t) => (
          <span key={t} className="inline-flex px-2 py-0.5 rounded-full border border-slate-200 text-xs bg-slate-50 text-slate-700">{t}</span>
        ))}
      </div>
    </div>
    <div className="mt-3 text-sm text-slate-700">{inv.comp}</div>
    <div className="mt-1 text-xs text-slate-500">{inv.range}</div>
    <div className="mt-3 flex items-center gap-2">
      <button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Review & Accept</button>
      <button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">Decline</button>
    </div>
  </div>
);

const InsightsAndLedger = () => {
  const metrics = { conversions: 184, topDeal: 'Holiday Launch', progress: 6, goal: 10 };
  const ledger = { last: 'Nov 05, 2025 — $1,750', next: 'Nov 20, 2025 — ACH', pending: 3200 };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 p-5 md:p-6 rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Performance Overview</h3>
            <p className="text-sm text-slate-600">Weekly conversions and earnings trend</p>
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"><LineChart className="w-4 h-4" /> View Full Analytics</button>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-28 rounded-lg border border-slate-200 bg-gradient-to-tr from-indigo-100 via-indigo-200 to-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,_#ffffff_1px,_transparent_0)] [background-size:16px_16px]" />
          </div>
          <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60">
            <div className="text-xs uppercase tracking-wide text-slate-500">Conversions This Week</div>
            <div className="mt-1 text-2xl font-semibold">{metrics.conversions}</div>
            <div className="mt-4 text-xs uppercase tracking-wide text-slate-500">Top Performing Deal</div>
            <div className="mt-1 flex items-center gap-2 text-slate-900"><Star className="w-4 h-4 text-amber-500" /> {metrics.topDeal}</div>
            <div className="mt-4 text-xs uppercase tracking-wide text-slate-500">Bonus Progress</div>
            <div className="mt-1 w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${(metrics.progress / metrics.goal) * 100}%` }} />
            </div>
            <div className="mt-1 text-sm text-slate-600">{metrics.progress}/{metrics.goal} sales to unlock bonus</div>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6 rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Payout Ledger Summary</h3>
            <p className="text-sm text-slate-600">Recent and upcoming payouts</p>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <KV label="Last Payout Received" value={ledger.last} />
          <KV label="Next Scheduled Payout" value={ledger.next} />
          <KV label="Total Pending Payout" value={`$${ledger.pending.toLocaleString()}`} />
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 w-full"><Wallet className="w-4 h-4" /> View Ledger</button>
            <button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 w-full">Connect Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const KV = ({ label, value }) => (
  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/60">
    <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    <div className="mt-1 text-slate-900">{value}</div>
  </div>
);

const MessagesSection = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Messages</h2>
          <p className="text-sm text-slate-600">Latest updates from brands</p>
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"><Mail className="w-4 h-4" /> Go to Inbox</button>
      </div>
      <div className="mt-4 space-y-3">
        {messagesSample.map((m) => (
          <div key={m.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50/60">
            <div className="font-medium text-slate-900">{m.brand} • <span className="text-slate-700">{m.deal}</span></div>
            <div className="text-sm text-slate-600 mt-0.5 line-clamp-2">{m.preview}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorMain;
