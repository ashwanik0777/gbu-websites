
import React from 'react';
// import { LucideIcon } from 'lucide-react';

/**
 * @typedef {Object} SummaryStatProps
 * @property {React.ElementType} icon
 * @property {string} value
 * @property {string} label
 * @property {string} color
 * @property {string} bgColor
 */

/**
 * @typedef {Object} SummaryDashboardProps
 * @property {SummaryStatProps[]} summaryStats
 */

const SummaryDashboard = ({ summaryStats }) => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Summary Dashboard</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {summaryStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryDashboard;
