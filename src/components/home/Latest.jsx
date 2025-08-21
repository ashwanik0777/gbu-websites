import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LatestUpdates() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');
  const NOTICE_API = `${BASE}/landing/news-and-events/`;

  const mockData = [
    { id: 1, content_text: 'Orientation Program for First-Year Students will commence from 10th July.', category: 'Latest News', priority: 'high', date: '2025-06-25', url: '#' },
    { id: 2, content_text: 'Notice: University will remain closed on account of Diwali on 29th October.', category: 'Notice/Circulars', priority: 'medium', date: '2025-06-20', url: '#' },
    { id: 3, content_text: 'Annual Tech Fest “TechZenith 2025” registrations are now open for all branches.', category: 'Upcoming Events', priority: 'high', date: '2025-06-22', url: '#' },
    { id: 4, content_text: 'Guest Lecture on Artificial Intelligence by Dr. Rajeev Kumar, IIT Delhi.', category: 'Latest News', priority: 'medium', date: '2025-06-24', url: '#' },
    { id: 5, content_text: 'Blood Donation Camp organized by NSS Unit at University Auditorium.', category: 'Upcoming Events', priority: 'high', date: '2025-06-21', url: '#' },
    { id: 6, content_text: 'Library timing extended till 10 PM during the examination period.', category: 'Notice/Circulars', priority: 'low', date: '2025-06-18', url: '#' },
    { id: 7, content_text: 'Annual Sports Meet 2025 – Registration for track events and games open till 5th July.', category: 'Upcoming Events', priority: 'medium', date: '2025-06-27', url: '#' },
    { id: 8, content_text: 'MoU signed with IIT Delhi for collaborative research in Data Science.', category: 'Latest News', priority: 'high', date: '2025-06-26', url: '#' }
  ];

  const viewMoreUrls = {
    'Latest News': '/announcements/news-notifications',
    'Notice/Circulars': '/announcements/notices',
    'Upcoming Events': '/announcements/event-calendar'
  };

  useEffect(() => {
    setIsVisible(true);
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await axios.get(NOTICE_API);
      const json = res.data;
      const notices = Array.isArray(json) && json.length ? json : mockData;
      setData(notices);
      const uniqueCategories = [...new Map(notices.map(item => [item.category.trim(), item])).values()];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error('Error fetching notices:', err);
      setData(mockData);
      const uniqueCategories = [...new Map(mockData.map(item => [item.category.trim(), item])).values()];
      setCategories(uniqueCategories);
    }
  };

  const getPriorityIndicator = (priority = 'low') => {
    if (priority === 'high') return 'bg-red-500 animate-pulse';
    if (priority === 'medium') return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getTypeColor = (category) => {
    const colors = {
      'Latest News': 'bg-blue-100 text-blue-600 border-blue-200',
      'Notice/Circulars': 'bg-green-100 text-green-600 border-green-200',
      'Upcoming Events': 'bg-yellow-100 text-yellow-600 border-yellow-200'
    };
    return colors[category.trim()] || 'bg-gray-100 text-gray-600 border-gray-200';
  };

  const NoticeCard = ({ item, index, category }) => (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-start gap-3 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-blue-100 ${isVisible ? 'animate-slide-in' : 'opacity-0 translate-y-4'}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`w-1.5 h-16 ${getPriorityIndicator(item.priority)} rounded-full flex-shrink-0 mt-1 shadow-sm`}></div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-800 text-sm leading-snug mb-2 group-hover:text-blue-700 transition-colors duration-200">
          {item.content_text}
        </h4>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {new Date(item.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
        </p>
      </div>
      <span className={`px-3 py-1.5 rounded-full text-xs font-medium flex-shrink-0 border transition-all duration-200 group-hover:scale-105 ${getTypeColor(category)}`}>{category}</span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 transition-all duration-300"></div>
    </a>
  );

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 min-h-screen">
      <style jsx>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
        .marquee-wrapper {
          overflow: hidden;
          height: 350px;
          position: relative;
        }
        .marquee-content {
          display: flex;
          flex-direction: column;
          animation: scroll-up linear infinite;
        }
        @keyframes scroll-up {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      <div className={`text-center mb-12 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Latest Updates & Announcements
        </h2>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Stay informed with the latest news and important notices from our institution.
        </p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-lg"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((catItem, catIndex) => {
          const category = catItem.category.trim();
          const filtered = data.filter(item => item.category.trim() === category);

          return (
            <div key={catIndex} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden flex flex-col relative">
              <div className="p-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white">
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>

              <div className="relative flex-1 flex flex-col">
                <div className="marquee-wrapper">
                  <div className="marquee-content space-y-3" style={{ animationDuration: `${filtered.length * 5}s` }}>
                    {filtered.concat(filtered).map((item, i) => (
                      <NoticeCard key={`${item.id}-${i}`} item={item} index={i} category={category} />
                    ))}
                  </div>
                </div>

                <div className="flex align-middle justify-end z-10 mt-8 h-10">
                  <button
                    onClick={() => {
                      const url = viewMoreUrls[category] || '/announcements/news-notifications';
                      window.location.href = url;
                    }}
                    className="px-4 py-1 text-blue-600  rounded-2xl font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200 bg-transparent"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}