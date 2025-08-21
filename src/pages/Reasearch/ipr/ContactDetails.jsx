import React from 'react';

import SearchableWrapper from '../../../components/Searchbar/SearchableWrapper';

export default function ContactDetails() {
  return (
    <SearchableWrapper>
      <section className="py-16   to-white">
        <div className="container mx-auto px-4 max-w-3xl">

          <h1 className="text-3xl font-bold text-center mb-8 ">Contact Details

          </h1>
          <div className="flex items-center bg-white shadow-md rounded-xl p-6 border border-gray-100">
            {/* Image Section */}
            <img
              src="https://www.gburif.org/mentors/shakti_sahi_edit.jpg"
              alt="Dr. Shakti Sahi"
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 mr-6"
            />

            {/* Details Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-700 mb-1">Dr. Shakti Sahi</h3>
              <p className="text-blue-600 font-medium mb-4">Nodal Officer</p>

              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Address :</span> IPR Cell, Gautam Buddha University, Greater Noida - 201310
              </p>

              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Email :</span> iprcell@gbu.ac.in
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Phone No. :</span> -
              </p>
            </div>
          </div>
        </div>
      </section>
    </SearchableWrapper>
  );
}
