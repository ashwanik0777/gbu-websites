import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Leaf } from 'lucide-react';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const Card = ({ className = "", children, ...props }) => (
  <div className={`rounded-lg border-gray-300 bg-white text-black shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const EcoCampus = () => {
  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');
  const [intro, setIntro] = useState(null);
  const [stats, setStats] = useState([]);
  const [initiatives, setInitiatives] = useState([]);
  const [impacts, setImpacts] = useState([]);

  useEffect(() => {
    const fetchEcoCampusData = async () => {
      try {
        const [introRes, statsRes, initiativesRes, impactsRes] = await Promise.all([
          axios.get(`${BASE}/campuslife/eco-campus-stats/`),
          axios.get(`${BASE}/campuslife/eco-initiative-stats/`),
          axios.get(`${BASE}/campuslife/green-initiatives/`),
          axios.get(`${BASE}/campuslife/impact-stats/`)
        ]);

        setIntro(introRes.data[0] || null);
        setStats(statsRes.data || []);
        setInitiatives(initiativesRes.data || []);
        setImpacts(impactsRes.data || []);
      } catch (err) {
        console.error("Failed to fetch eco-campus data:", err);
      }
    };

    fetchEcoCampusData();
  }, []);

  if (!intro) return null;

  return (
    <SearchableWrapper>
    <section id="eco-campus" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        {/* Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Eco</span>-Campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{intro.description}</p>
        </div>

        {/* Environmental Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map(stat => (
            <Card key={stat.id} className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{stat.icon_class}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sustainability Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {initiatives.map(item => (
            <Card key={item.id} className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-2xl">
                        {item.icon_color === 'orange' ? '☀️' : '♻️'}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <div className="bg-green-100 rounded-lg p-4">
                      <div className="text-green-800 font-bold text-lg">{item.impact_value}</div>
                      <div className="text-green-600 text-sm">{item.impact_label}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infographic Style Visuals */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Environmental Impact</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map(impact => (
              <div key={impact.id} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {impact.icon === '(sun icon)' ? '☀️' :
                     impact.icon === '(water icon)' ? '💧' :
                     impact.icon === '(recycle icon)' ? '♻️' :
                     impact.icon === '(tree icon)' ? '🌳' : '🌿'}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{impact.title}</h4>
                <p className="text-sm text-gray-600">{impact.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-6 py-3">
              <Leaf className="text-green-600" size={24} />
              <span className="text-green-800 font-semibold">Carbon Neutral Campus by 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default EcoCampus;
