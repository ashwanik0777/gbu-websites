import React from 'react';
import Meditation from '../../../assets/Meditation.jpeg';

import SearchableWrapper from '../../../components/Searchbar/SearchableWrapper';

export default function Services() {
  const content = [
    {
      title: 'Library',
      description: "Bodhisattva Dr. B.R.Ambedkar Library is the heart of academic and research activities of the Gautam Buddha University. It has been catering to the needs of faculty members, research scholars, and students on campus effectively.",
      image: 'https://library.gbu.ac.in/img/Artboard%201library1.jpg',
    },
    {
      title: 'Meditation Centre',
      description: 'The centre is looking forward to organize seminars, lectures and experiential workshops in meditation, positive values, stress free living and self management.',
      image: Meditation,
    },
    {
      title: 'Central Computer Center',
      description: 'The Central Computer Center of Gautam Buddha University is a central facility that caters the IT needs of the University and provides access to internet resources as well as telecommunication facilities. ',
      image: 'https://www.gbu.ac.in/Content/gbudata/ccc/assets/img/banner3.jpg',
    },
  ];

  return (
    <SearchableWrapper>
      <div className="lg:px-15 md:px-20 py-15 bg-gray-50">
        <h1 className="text-3xl font-bold text-center mb-8">SERVICES</h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SearchableWrapper>
  );
}
