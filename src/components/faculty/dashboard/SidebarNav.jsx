import React from "react";
import { BookOpen, Building2, Globe, GraduationCap, Mail, User } from "lucide-react";

const iconMap = {
  "dashboard-header": Building2,
  "personal-details": User,
  "contact-links": Mail,
  "academic-content": GraduationCap,
  "research-areas": BookOpen,
  "tab-data-editors": BookOpen,
  "profile-preview": Globe,
};

const SidebarNav = ({ sections, activeSection, onSelect, onSave, onReset, onViewPublic, onLogout }) => {
  return (
    <aside className="lg:sticky lg:top-0 lg:w-72 lg:min-h-screen lg:self-start">
      <div className="flex h-full min-h-screen flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Faculty Navigation</h2>
        <p className="mt-1 text-xs text-slate-500">Profile management panel</p>
        <div className="mt-3 space-y-2">
          {sections.map((section) => {
            const Icon = iconMap[section.id] || Building2;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelect(section.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                  isActive ? "bg-slate-900 text-white shadow" : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {section.label}
              </button>
            );
          })}
        </div>

        <div className="mt-auto rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Quick Actions</p>
          <div className="mt-2 space-y-2">
            <button onClick={onSave} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Save
            </button>
            {/* <button onClick={onReset} className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Reset
            </button> */}
            <button onClick={onViewPublic} className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              View Public Profile
            </button>
            <button onClick={onLogout} className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 hover:bg-rose-100">
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
