import React from "react";

const VcMessage = () => {
  const vc = {
    name: "Prof. Rana Pratap Singh",
    title: "Hon'ble Vice Chancellor – Gautam Buddha University",
    description:
      "Centre of Drone is devoted to high-quality teaching, learning, and research. We are eager to solve challenging problems in service to make the country self-reliant in drone technology and boost research in the nearby regions. Thanks to our students, faculty, and people involved in this work.\n\nWe invite you to join us for more exploration.",
    image:
      "http://meow.tilchattaas.com/media/leadership/Screenshot_2025-06-24_at_10.41.43AM.png",  
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
             Vice Chancellor's Message
          </h2>
          
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full bg-white rounded-3xl shadow-xl border border-purple-200 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          <img
            src={vc.image}
            alt={vc.name}
            className="w-60 h-56 sm:w-48 sm:h-64 md:w-[220px] md:h-[300px] object-cover rounded-xl shadow-md"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-900">
              {vc.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
              {vc.title}
            </p>
            <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line">
              {vc.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VcMessage;
