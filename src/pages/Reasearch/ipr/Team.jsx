import React from 'react';
import { Linkedin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SearchableWrapper from '../../../components/Searchbar/SearchableWrapper';

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
    linkedin: 'https://www.linkedin.com/in/dr-vinay-kumar-litoria',
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
    image: 'https://via.placeholder.com/150?text=Manish+Bhardwaj'
  },
  {
    name: 'Mr. Shekhar Chandra',
    position: 'Office Attendant',
    linkedin: 'https://www.linkedin.com/in/shekhar-chandra-attendant',
    image: 'https://via.placeholder.com/150?text=Shekhar+Chandra'
  },
  {
    name: 'Mr. Rohit Sharma',
    position: 'Technical Support',
    linkedin: 'https://www.linkedin.com/in/rohit-sharma-tech',
    image: 'https://via.placeholder.com/150?text=Rohit+Sharma'
  },
  {
    name: 'Ms. Ananya Singh',
    position: 'Research Coordinator',
    linkedin: 'https://www.linkedin.com/in/ananya-singh-research',
    image: 'https://via.placeholder.com/150?text=Ananya+Singh'
  }
];

export default function Team() {
  return (
    <SearchableWrapper>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-30">

          <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white mb-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center">
                  <img
                    src={member.image || "https://cdn-icons-png.flaticon.com/512/21/21104.png"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
                  />
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">{member.position}</p>
                  <div className="flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </SearchableWrapper>
  );
}

