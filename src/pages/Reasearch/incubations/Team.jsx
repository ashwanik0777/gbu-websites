 import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper";

const teamMembers = [
  {
    name: 'Dr. Shakti Sahi',
    position: 'Chief Technology Officer',
    linkedin: 'https://www.linkedin.com/in/shakti-sahi-32255a9/',
    image: 'https://www.gburif.org/mentors/shakti_sahi_edit.jpg'
  },
  {
    name: 'Dr. Satish K Mittal',
    position: 'Chief Operations Officer',
    linkedin: 'https://www.linkedin.com/in/drsatishkmittal/',
    image: 'https://www.gburif.org/mentors/satish_mittal.jpg'
  },
  {
    name: 'Dr. Vinay Kumar Litoria',
    position: 'Nodal Officer',
    linkedin: 'https://www.linkedin.com/in/vinay-kumar-litoria/',
    image: 'https://summit.careerguide.com/wp-content/uploads/2022/06/vinay-litoria.jpeg'
  },
  {
    name: 'Mr. Raj Kumar',
    position: 'Manager',
    linkedin: 'https://www.linkedin.com/in/raj-kumar-manager',
    image: 'https://gburif.org/mentors/raj_kumar_edit.jpg'
  },
  {
    name: 'Mr. Manish Bhardwaj',
    position: 'Office Assistant',
    linkedin: 'https://www.linkedin.com/in/manish-bhardwaj-office',
    image: ''
  },
  {
    name: 'Mr. Shekhar Chandra',
    position: 'Office Attendant',
    linkedin: 'https://www.linkedin.com/in/shekhar-chandra-attendant',
    image: ''
  }
];

// Duplicate for infinite scrolling
const repeatedTeam = [...teamMembers, ...teamMembers];

export default function TeamSlider() {
  const [x, setX] = useState(0);
  const cardWidth = 220;
  const gap = 24;
  const moveBy = cardWidth + gap;
  const totalCards = repeatedTeam.length;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setX((prevX) => {
      const nextX = prevX - moveBy;
      const maxOffset = -moveBy * teamMembers.length;
      return nextX <= maxOffset ? 0 : nextX;
    });
  };

  const handlePrev = () => {
    setX((prevX) => {
      const maxOffset = -moveBy * (teamMembers.length - 1);
      const nextX = prevX + moveBy;
      return nextX > 0 ? maxOffset : nextX;
    });
  };

  return (
    <SearchableWrapper>
    <section className="py-10 bg-gray-50 overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-8">MEET OUR TEAM</h1>

      <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>

        <motion.div
          animate={{ x }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="flex py-4"
          style={{
            width: `${(cardWidth + gap) * totalCards}px`,
            columnGap: `${gap}px`,
          }}
        >
          {repeatedTeam.map((member, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-xl shadow-md border border-blue-100 p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-lg hover:scale-105 transform transition-all duration-300"
              style={{ width: `${cardWidth}px` }}
            >
              <img
                src={member.image || "https://cdn-icons-png.flaticon.com/512/21/21104.png"}
                alt={member.name}
                className="w-24 h-28 object-cover rounded-md shadow mb-3"
              />
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{member.position}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-medium"
                aria-label={`View ${member.name}'s LinkedIn`}
              >
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    </SearchableWrapper>
  );
}
