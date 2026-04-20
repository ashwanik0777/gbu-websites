import React from 'react';
import { FileText, Newspaper, CalendarDays, FileDown, File, Archive, CircleCheck, ExternalLink } from 'lucide-react';

const RecruitmentContent = ({ tabId, data }) => {

  const baseData = {
    professors: { ref: 'GBU/Admn/2025/01', date: '15 May 2025', title: "Advertisement of Professor's", status: 'active' },
    retired: { ref: 'GBU/Admn/2025/02', date: '15 May 2025', title: "Advertisement of Professor's (Retired)", status: 'active' },
    associate: { ref: 'GBU/Admn/2025/03', date: '20 May 2025', title: "Advertisement of Associate Professor's", status: 'active' },
    assistant: { ref: 'GBU/Admn/2025/04', date: '22 May 2025', title: "Advertisement of Assistant Professor's", status: 'active' },
    assistants: { ref: 'GBU/Admn/2025/05', date: '15 May 2025', title: "Advertisement for Assistants", status: 'active' },
    interns: { ref: 'GBU/Admn/2025/06', date: '15 May 2025', title: "Advertisement for Interns", status: 'active' },
    workers: { ref: 'GBU/Admn/2025/07', date: '15 May 2025', title: "Advertisement of Workers", status: 'active' },
  };

  const archivedData = {
    archived2023: { ref: 'GBU/Admn/2023/01', date: '10 Jan 2023', title: "Archived Professor Recruitment 2023", status: 'archived' },
    archived2022: { ref: 'GBU/Admn/2022/05', date: '12 Aug 2022', title: "Archived Associate Recruitment 2022", status: 'archived' },
    archived2021: { ref: 'GBU/Admn/2021/12', date: '05 Dec 2021', title: "Archived Staff Recruitment 2021", status: 'archived' },
  };

  const isArchived = tabId.startsWith('archived');
  const fallbackData = isArchived
    ? archivedData[tabId] || archivedData.archived2023
    : baseData[tabId] || baseData.professors;
  const tabData = data && typeof data === 'object' ? data : fallbackData;

  const fallbackDocuments = [
    { name: 'Extension Notice', description: 'Official extension notification', icon: CalendarDays },
    { name: 'Detailed Advertisement', description: 'Complete vacancy details', icon: FileText },
    { name: 'Newspaper Publication', description: 'Published notice copy', icon: Newspaper },
    { name: 'Application Form (PDF)', description: 'Download PDF format', icon: FileDown },
    { name: 'Application Form (Word)', description: 'Download editable format', icon: File },
  ];

  const iconMap = {
    'Extension Notice': CalendarDays,
    'Detailed Advertisement': FileText,
    'Newspaper Publication': Newspaper,
    'Application Form (PDF)': FileDown,
    'Application Form (Word)': File,
  };

  const documents = Array.isArray(tabData.documents) && tabData.documents.length
    ? tabData.documents.map((doc) => ({
        name: doc.name || 'Document',
        description: doc.description || 'Official recruitment document',
        icon: iconMap[doc.name] || FileText,
        url: doc.url || '#',
      }))
    : fallbackDocuments.map((doc) => ({ ...doc, url: '#' }));

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{tabData.title}</h3>
            <p className="mt-1 text-xs text-slate-600">Reference: {tabData.ref}</p>
          </div>

          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
              isArchived
                ? 'bg-amber-100 text-amber-800'
                : 'bg-emerald-100 text-emerald-700'
            }`}
          >
            {isArchived ? <Archive className="h-3.5 w-3.5" /> : <CircleCheck className="h-3.5 w-3.5" />}
            {isArchived ? 'Archived' : 'Active'}
          </span>
        </div>

        <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-600">
          <CalendarDays className="h-4 w-4" />
          Published: {tabData.date}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
          <h4 className="text-sm font-semibold text-slate-900">Available Documents</h4>
        </div>

        <div className="divide-y divide-slate-100">
          {documents.map((doc) => {
            const Icon = doc.icon;
            return (
              <div
                key={doc.name}
                className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-slate-100 p-2">
                    <Icon className="h-4 w-4 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{doc.name}</p>
                    <p className="text-xs text-slate-500">{doc.description}</p>
                  </div>
                </div>

                <a
                  href={doc.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Open <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentContent;