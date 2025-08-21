import React from 'react';

import SearchableWrapper from '../../../components/Searchbar/SearchableWrapper';

const iprCourses = [
  {
    school: 'School of Biotechnology',
    courseName: 'Intellectual Property Rights, Biosafety and Bioethics',
    credit: '03 Credit',
    offeredIn: '9th Semester (Integrated B.Tech.-M.Tech.) & 3rd Semester (M.Tech. Biotechnology)',
    objectives: [
      'Basic knowledge of IPR and its role in biological research.',
      'Familiarity with India’s IPR Policy.',
      'Understanding biosafety and biotech product regulations.',
      'Awareness of ethical issues in research.'
    ]
  },
  {
    school: 'School of Vocational Studies and Applied Sciences',
    courseName: 'Patent Law and IPR Issues',
    credit: '02 Credit',
    offeredIn: '3rd Semester (M.Sc. Applied Chemistry)',
    objectives: [
      'Understanding IPR dimensions and policy.',
      'Basic aspects of IP and associated rights.',
      'Awareness of IP protection and maintenance.',
      'Familiarity with international treaties and India’s position.'
    ]
  },
  {
    school: 'School of Vocational Studies and Applied Sciences',
    courseName: 'Intellectual Property Rights',
    credit: '02 Credit',
    offeredIn: 'B.Sc. Physical Sciences',
    objectives: [
      'Understanding IPR dimensions and policy.',
      'Basic aspects of IP and associated rights.',
      'Awareness of IP protection and maintenance.',
      'Familiarity with international treaties and India’s position.'
    ]
  }
];

export default function IprCourses() {
  return (
    <SearchableWrapper>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-30">

          <h1 className="text-3xl font-bold text-center mb-8">IPR Courses Offered</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {iprCourses.map((course, index) => (
              <div key={index} className="w-full md:w-[30%] bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-blue-500">
                <h2 className="text-lg font-semibold text-purple-700 mb-2">{course.school}</h2>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{course.courseName}</h3>
                <p className="text-sm text-gray-600 mb-2">{course.credit} | {course.offeredIn}</p>

                <div>
                  <h4 className="text-md font-semibold mb-2 text-blue-600">Objectives:</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                    {course.objectives.map((obj, idx) => (
                      <li key={idx}>{obj}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SearchableWrapper>
  );
}
