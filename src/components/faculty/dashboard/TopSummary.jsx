import React from "react";
import { ExternalLink, Save } from "lucide-react";

const TopSummary = ({ profile, summary, message, onSave, onOpenPublic }) => {
  return (
    <>
      <header id="dashboard-header" className="rounded-3xl border border-stone-300 bg-white p-5 shadow-sm md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Faculty Portal</p>
            <h1 className="mt-1 text-2xl font-bold text-stone-900 md:text-3xl">Faculty Dashboard</h1>
            <p className="mt-1 text-sm text-stone-600">Manage complete faculty profile and tab data in one place.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={onOpenPublic} className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50">
              <ExternalLink className="h-4 w-4" /> Open Detail Page
            </button>
            <button onClick={onSave} className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-800">
              <Save className="h-4 w-4" /> Save Changes
            </button>
          </div>
        </div>
        {message ? <p className="mt-3 text-sm font-medium text-emerald-700">{message}</p> : null}
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summary.map((item) => (
          <div key={item.label} className="rounded-2xl border border-stone-300 bg-white p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-stone-500">{item.label}</p>
            <p className="mt-1 text-lg font-bold text-stone-900">{item.value}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default TopSummary;
