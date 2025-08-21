 import React from "react";

import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper";

const logos = [
  { name: "Amazon", logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png" },
  { name: "Apple", logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png" },
  { name: "Myntra", logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png" },
  { name: "Grow", logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png" },
  { name: "Flipkart", logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png" },
  { name: "Meesho", logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png" },
];

export default function StartupsCarousel() {
  return (
    <SearchableWrapper>
    <div className="bg-gray-50 py-10 mt-10 mr-15 ml-20">
      <h2 className="text-3xl font-bold text-center mb-6">STARTUPS/INCUBATEES</h2>
      
      <div className="overflow-hidden relative w-full">
        <div
          className="flex w-max animate-[scroll_15s_linear_infinite] space-x-20"
          style={{
            animation: "scroll 15s linear infinite"
          }}
        >
          {[...logos, ...logos].map((item, idx) => (
            <img
              key={idx}
              src={item.logo}
              alt={item.name}
              className="h-20 object-contain"
            />
          ))}
        </div>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>
    </div>
    </SearchableWrapper>
  );
}
