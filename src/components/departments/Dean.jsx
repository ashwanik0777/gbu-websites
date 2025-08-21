import React from "react";
import { Link } from "react-router-dom";

const LeadershipCard = ({ name, title, image, description }) => {
  const safeName = name || "Dr. Arpit Bhardwaj";
  const safeTitle = title || "Dean, School of Information and Communication Technology, Gautam Buddha University";
  const safeImage = image || "https://www.gbu.ac.in/USICT/media/img/arpit%20bhardwaj.jpg"; 
  const safeDescription = description || `University School of Information and Communication Technology came into existence in 2008 with the primary objective of catering to all academic and research requirements in fields of electronics communication and computer science. The first academic session consisting of post-graduate program started in July 2009, and at present, it is successfully running undergraduate, post-graduate, and research programs in all emerging areas related to information and communication technology. The school is committed towards providing highest quality teaching education and producing technocrats who can work on the latest available technologies in the global context. To fulfill this aim and to provide education according to industrial requirement the extra academic activities like lectures from outside expert / workshops / symposiums / conferences are organized on a regular basis. First batch of postgraduate students has success fully passed in 2011, School has wonderful infrastructure having classrooms equipped with state of the art audio visual support and large number of functional laboratories equipped with state of the are instruments / hardware software and highly committed and dedicated faculty. School has already made a roadmap for its development for next 10 years in the form of “Vision 2020” document and is in real spirit marching on this roadmap for fulfilling the defined objectives. School aims to become a hub of higher end research activities and has started successfully its research program and have many research scholars on its roll, carrying research in all prominent areas of electronics / communication / computer engineering.\n\nI am more than confident to tell you that the best, most effective and finest weapon an academic organization can ever have is “knowledge” and it is a common quote in ICT field that “knowledge is power”. The USICT works on the sole objective of acquiring and propagating as much knowledge as possible to the students.`;

  return (
    <section className="py-12 sm:py-16 ">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">
          Dean's <span className="text-blue-800">Message</span>
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full bg-white rounded-3xl shadow-xl border border-blue-200 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          <img
            src={safeImage}
            alt={safeName}
            className="w-60 h-56 sm:w-48 sm:h-64 md:w-[220px] md:h-[300px] object-cover rounded-xl shadow-md"
          />
          <div className="text-center md:text-left">
            <Link to="/academics/faculty/2"><h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              {safeName}
            </h3></Link>
            <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
              {safeTitle}
            </p>
            <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line text-justify">
              {safeDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCard;
