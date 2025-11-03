import React from 'react';
import { BadgeCheck, Download, ExternalLink, Pause, Edit, MessageSquare, Youtube, Twitch, Linkedin, Building2, User, Calendar, CreditCard } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const map = {
    Draft: 'bg-slate-100 text-slate-700 border-slate-200',
    Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Completed: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Paused: 'bg-amber-50 text-amber-700 border-amber-200',
  };
  return (
    <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-sm ${map[status] || map.Draft}`}>
      <BadgeCheck className="w-4 h-4" /> {status}
    </span>
  );
};

const PlatformIcons = ({ platforms }) => {
  const iconMap = {
    YouTube: Youtube,
    Twitch: Twitch,
    LinkedIn: Linkedin,
  };
  return (
    <div className="flex items-center gap-2">
      {platforms.map((p) => {
        const Icon = iconMap[p] || Youtube;
        return (
          <span key={p} title={p} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700">
            <Icon className="w-4 h-4" />
          </span>
        );
      })}
    </div>
  );
};

const DealHeaderAndMetadata = () => {
  const deal = {
    title: 'Q4 Product Launch with Creator Nova',
    status: 'Active',
    creator: { name: 'Nova Chen', handle: '@nova', url: '#' },
    platforms: ['YouTube', 'LinkedIn'],
    contractSigned: true,
  };

  const meta = {
    id: 'a3f2d4c8-9b1e-4f76-82c1-1b2c3d4e5f6a',
    group: 'Holiday Launch Bundle',
    creatorCompany: 'Nova Media LLC',
    brandUser: 'Amelia Hart (Brand Manager)',
    campaign: 'Q4 Launch Blitz',
    start: '2025-10-01',
    end: '2025-12-15',
    currency: 'USD',
    signedBy: 'Amelia Hart, Manager',
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-6">
      <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <input
                defaultValue={deal.title}
                aria-label="Deal Title"
                className="w-full md:w-auto text-xl md:text-2xl font-semibold text-slate-900 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-200 rounded px-1"
              />
              <StatusBadge status={deal.status} />
            </div>
            <div className="flex flex-wrap items-center gap-3 text-slate-600">
              <a href={deal.creator.url} className="font-medium text-slate-900 hover:text-indigo-600">{deal.creator.name}</a>
              <span className="text-slate-500">{deal.creator.handle}</span>
              <PlatformIcons platforms={deal.platforms} />
              <span className={`inline-flex items-center gap-2 px-2 py-1 rounded border text-xs ${deal.contractSigned ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                <CreditCard className="w-3.5 h-3.5" /> {deal.contractSigned ? 'Contract: Signed' : 'Contract: Unsigned'}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">
              <Download className="w-4 h-4" /> Download PDF
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
              <Edit className="w-4 h-4" /> Edit Deal
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100">
              <Pause className="w-4 h-4" /> Pause Deal
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700">
              <MessageSquare className="w-4 h-4" /> Send Message
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MetaItem label="Deal ID" value={meta.id} mono />
          <MetaItem label="Deal Group" value={meta.group} />
          <MetaItem label="Creator Company" value={<a href="#" className="text-indigo-600 hover:underline inline-flex items-center gap-1">{meta.creatorCompany} <ExternalLink className="w-3.5 h-3.5" /></a>} />
          <MetaItem label="Brand User" value={<span className="inline-flex items-center gap-2"><User className="w-4 h-4 text-slate-500" />{meta.brandUser}</span>} />
          <MetaItem label="Campaign" value={meta.campaign} />
          <MetaItem label="Start / End" value={<span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-500" />{meta.start} – {meta.end}</span>} />
          <MetaItem label="Currency" value={meta.currency} />
          <MetaItem label="Contract Signed by" value={meta.signedBy} />
          <MetaItem label="View Contract" value={<button className="text-indigo-600 hover:underline inline-flex items-center gap-1">Open PDF Preview <ExternalLink className="w-3.5 h-3.5" /></button>} />
        </div>
      </div>
    </div>
  );
};

const MetaItem = ({ label, value, mono }) => (
  <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60">
    <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    <div className={`mt-1 text-sm ${mono ? 'font-mono text-slate-700 break-all' : 'text-slate-900'}`}>{value}</div>
  </div>
);

export default DealHeaderAndMetadata;
