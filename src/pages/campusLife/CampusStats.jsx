 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const CampusStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_HOST}campuslife/campus-life-stats/`);
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching campus stats:', error);
      }
    };

    fetchStats();
  }, []);

  if (stats.length === 0) return null;

  return (
    <SearchableWrapper>
    <div className="mt-16 mb-12">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Life Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white text-center rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-3">{stat.icon_class}</div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600 font-medium">{stat.title}</div>
          </div>
        ))}
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default CampusStats;
