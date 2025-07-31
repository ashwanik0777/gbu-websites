
import React, { useState, useEffect } from 'react';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const testimonials = [
  {
    name: "Priya Sharma",
    course: "Computer Science Engineering",
    year: "Final Year",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "The campus life here has been transformative. From participating in coding competitions to leading the robotics club, every day brings new opportunities to learn and grow."
  },
  {
    name: "Rahul Kumar",
    course: "Mechanical Engineering",
    year: "Third Year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "The hostel life and campus events have given me lifelong friendships. The annual tech fest and sports competitions create an atmosphere of healthy competition and collaboration."
  },
  {
    name: "Anita Patel",
    course: "Electronics Engineering",
    year: "Second Year",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    quote: "Being part of the cultural committee has helped me discover my creative side while maintaining academic excellence. The faculty support and peer learning environment are exceptional."
  }
];

const StudentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SearchableWrapper>
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Student Voices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students about their experiences, achievements, and the memories 
            they've created during their journey with us.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mx-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover shadow-lg"
                        />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="mb-6">
                          <svg className="w-12 h-12 text-blue-200 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>
                        
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                          "{testimonial.quote}"
                        </p>
                        
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-600 font-medium mb-1">
                            {testimonial.course}
                          </p>
                          <p className="text-gray-500">
                            {testimonial.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default StudentTestimonials;
