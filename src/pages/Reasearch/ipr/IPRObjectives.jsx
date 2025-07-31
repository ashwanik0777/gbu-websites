import React from 'react';
import { Lightbulb, Search, Calendar, Users, Send, Link2 } from 'lucide-react';

import SearchableWrapper from '../../../components/Searchbar/SearchableWrapper';

const objectives = [
  {
    icon: <Lightbulb className="text-orange-500 w-8 h-8" />,
    title: 'IPR Awareness',
    description: 'Promote basic understanding of patents and copyrights among researchers and students.',
  },
  {
    icon: <Search className="text-blue-500 w-8 h-8" />,
    title: 'Patent Search',
    description: 'Encourage in-house patent searches and refine research objectives.',
  },
  {
    icon: <Calendar className="text-green-500 w-8 h-8" />,
    title: 'Workshops & Seminars',
    description: 'Organize interactive sessions on IP-related topics and trends.',
  },
  {
    icon: <Users className="text-purple-500 w-8 h-8" />,
    title: 'Innovation Support',
    description: 'Motivate innovators and guide them through the Incubation Center.',
  },
  {
    icon: <Send className="text-pink-500 w-8 h-8" />,
    title: 'IP Filing Assistance',
    description: 'Assist in filing patents with timely approvals and submissions.',
  },
  {
    icon: <Link2 className="text-yellow-500 w-8 h-8" />,
    title: 'Building Connections',
    description: 'Bridge the University with Patent Information Centre, CST, UP.',
  },
];

const IPRObjectives = () => {
  return (
    <SearchableWrapper>
    <section className="container mx-auto px-30 pb-20 py-10">
       
       <h1 className="text-3xl font-bold text-center mb-8">Objectives of IPR Cell</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((obj, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl p-6 transition-transform transform hover:scale-105 cursor-pointer"
          >
            <div className="flex items-center mb-4">{obj.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{obj.title}</h3>
            <p className="text-gray-600 text-sm">{obj.description}</p>
          </div>
        ))}
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default IPRObjectives;
