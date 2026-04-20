import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RecruitmentContent from './RecruitmentContent';

const RecruitmentBlock = ({ title, type, icon, tabs: dynamicTabs = [] }) => {
  const Icon = icon;
  const [activeTab, setActiveTab] = useState('');

  const tabs = dynamicTabs;
  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0] || null;

  useEffect(() => {
    if (tabs[0]?.id) {
      setActiveTab(tabs[0].id);
    }
  }, [type, dynamicTabs]);

  return (
    <motion.div
      className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      whileHover={{ y: -2 }}
    >
      <div className="border-b border-slate-200 bg-slate-900 px-5 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white/15 p-2">
            <Icon className="h-5 w-5" />
          </div>
          <h2 className="text-base font-semibold tracking-wide">{title}</h2>
        </div>
      </div>

      <div className="flex flex-col h-full p-6">
        <div className="mb-5 flex min-h-[44px] items-center">
          {tabs.length > 1 ? (
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          ) : tabs.length === 1 ? (
            <div className="inline-block rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white">
              {tabs[0].label}
            </div>
          ) : (
            <p className="text-xs text-slate-500">No recruitment tabs available.</p>
          )}
        </div>

        <div className="flex-grow flex flex-col">
          <RecruitmentContent tabId={activeTab} blockType={type} data={activeTabData} />
        </div>
      </div>
    </motion.div>
  );
};

export default RecruitmentBlock;
