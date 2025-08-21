import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const entrepreneurs = [
  {
    name: 'Priyansh Goel',
    title: 'Co founder at Frienducation',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUKfas9xlNLEpCZmq1Et-7qR1rQBE6XLo8g&s',
    bgColor: 'bg-black text-white',
  },
  {
    name: 'Sumit Kumar',
    title: 'Founder at Apex Byte',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUKfas9xlNLEpCZmq1Et-7qR1rQBE6XLo8g&s',
    bgColor: 'bg-black text-white',
  },
  {
    name: 'Gaurav Kumar Jha',
    title: 'Co founder at Driffle',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUKfas9xlNLEpCZmq1Et-7qR1rQBE6XLo8g&s',
    bgColor: 'bg-black text-white',
  },
  {
    name: 'Chetan Bhardwaj',
    title: 'CEO at Driffle',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUKfas9xlNLEpCZmq1Et-7qR1rQBE6XLo8g&s',
    bgColor: 'bg-black text-white',
  },
];

const OurEntrepreneurs = () => {
  return (
    <div className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">Our Entrepreneurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {entrepreneurs.map((person, index) => (
          <div
            key={index}
            className={`group relative rounded-xl overflow-hidden shadow-lg transform transition duration-500 ${person.bgColor}`}
          >
            <div className="overflow-hidden">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

            {/* Slide-up Info */}
            <div className="absolute bottom-0 w-full p-4 transform translate-y-10 group-hover:translate-y-0 transition-all duration-700 ease-out">
              <div className="flex gap-3 text-white mb-2">
                <FaInstagram className="cursor-pointer hover:text-pink-500 transition duration-300" />
                <FaXTwitter className="cursor-pointer hover:text-blue-400 transition duration-300" />
                <FaFacebookF className="cursor-pointer hover:text-blue-600 transition duration-300" />
              </div>
              <hr className="w-8 border-2 border-white mb-1" />
              <p className="text-sm font-semibold text-white">{person.name}</p>
              <p className="text-sm text-white">{person.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurEntrepreneurs;