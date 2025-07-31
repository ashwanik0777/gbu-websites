import React, { useEffect, useState } from "react";
import axios from "axios";

const Glance = () => {
  const [glanceData, setGlanceData] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');
        const res = await axios.get(`${BASE}/landing/glance-stat/`);
        setGlanceData(res.data[0]);
      } catch (err) {
        console.error("Failed to fetch glance data:", err);
      }
    };

    fetchStats();
  }, []);

  const formatStat = (label, value) => (
    <div
      tabIndex={0}
      key={label}
      className="rounded-xl p-6 bg-white backdrop-blur-2xl border border-white/20 shadow-lg hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-300"
    >
      <p className="text-3xl font-bold text-green-600">{value}</p>
      <p className="mt-2 text-sm text-">{label}</p>
    </div>
  );

  return (
    <section
      aria-label="GBU statistics overview"
      className="relative py-16 text-indigo-700 bg-gray-100"
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          {glanceData?.label || "GBU at a Glance"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
   {glanceData &&
            formatStat("Acres Campus", glanceData.acres_camus)}
               {glanceData &&
            formatStat("Schools", 8)}
             {glanceData &&
            formatStat("Programs", glanceData.programs_count)}
          {glanceData &&
            formatStat("Students", glanceData.student_count)}
         
          {glanceData &&
            formatStat("Faculty Members", glanceData.faculty_member)}
       
          {glanceData &&
            formatStat("Placement Rate", glanceData.placement_rate)}
        </div>
      </div>
    </section>
  );
};

export default Glance;
