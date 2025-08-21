import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import axios from "axios"; // <-- Added axios import

// Helper to safely build image URLs
const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');
const getImageUrl = (path) => {
  if (!path) return "https://via.placeholder.com/100x100?text=No+Logo";
  return path.includes("http")
    ? path
    : `${BASE}/${path.startsWith("media") ? "" : "media/"}${path}`;
};

const StatItem = ({ icon, end, duration, suffix = "", separator = "", text, start }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="text-center" ref={ref}>
      <img src={getImageUrl(icon)} className="w-10 h-10 mx-auto mb-3" alt="icon" />
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
        {inView ? (
          <CountUp end={end} duration={duration} suffix={suffix} separator={separator} start={start ?? 0} />
        ) : (
          "0"
        )}
        +
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mt-1">{text}</p>
    </div>
  );
};

const HiringSection = () => {
  const [companyData, setCompanyData] = useState([]);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [time, setTime] = useState(0);
  const animationRef = useRef();

  const API_URL = `${BASE}/landing/companies-hiring/`;

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const res = await axios.get(API_URL); 
        const data = res.data;
        if (Array.isArray(data)) {
          setCompanyData(data);
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, []);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      setContainerWidth(width > 1280 ? 1200 : width - 40);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const animate = () => {
      setTime((prev) => prev + 0.0005);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const radius = containerWidth / 2.2;
  const first = companyData[0];

  return (
    <>
    <div className="bg-[#f5f9ff]">
     <div className="text-center px-4 mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{first?.title || "Companies Hiring"}</h2>
        <p className="text-gray-600 text-sm sm:text-lg max-w-xl mx-auto">
          {first?.content_text || "Prestigious companies regularly hire students from G.B.U."}
        </p>
      </div>
    <section className="bg-[#f5f9ff] py-10 sm:py-32 overflow-hidden">

      {/* Animated Semicircle */}
      <div
        className="relative mx-auto mt-32 sm:mt-40"
        style={{
          width: containerWidth,
          height: radius / 2.5,
          marginBottom: `-${radius / 3.5}px`,
        }}
      >
        {companyData.map((company, i) => {
          const total = companyData.length;
          const offset = (time + i / total) % 1;
          const angle = Math.PI * offset;
          const x = radius * Math.cos(angle);
          const y = -radius * Math.sin(angle);

          return (
            <div
              key={company.id}
              className="absolute transition-transform duration-75"
              style={{
                left: `${containerWidth / 2 + x - 20}px`,
                top: `${radius / 1.3 + y - 70}px`,
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-md flex items-center justify-center">
                <img
                  src={getImageUrl(company.logo)}
                  alt={`Company ${company.id}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Placement Button */}
      <div className="text-center mt-16 sm:mt-20">
        <a href="https://gbu-website.vercel.app/placements"><button
          onClick={() => {
            console.log("View Placements clicked!");
          }}
          className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group overflow-hidden animate-pulse"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
          <span className="relative z-10 flex items-center gap-2">
            View Placements
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-30 bg-white animate-ping group-active:animate-pulse"></div>
        </button></a>
      </div>

      {/* Stats Section */}
      <div className="w-[90vw] max-w-4xl mx-auto mt-24 sm:mt-28 bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <StatItem
            icon="https://cdn.iconscout.com/icon/free/png-256/free-infosys-logo-icon-download-in-svg-png-gif-file-formats--multinational-company-brand-logos-icons-2370783.png"
            end={parseInt(first?.Companies_hiring?.replace(/\D/g, "") || 0)}
            duration={2}
            text="Companies hiring worldwide"
          />
          <StatItem
            icon="https://imgs.search.brave.com/anSX7MPt3oE9_CvMuzZYj0PIEtCLBHe8BE56bK-VkIQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZDF1SUNvNDk3/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTY2NzU2OTU3Njg3/Mw"
            end={parseInt(first?.alumini_count?.replace(/\D/g, "") || 0)}
            duration={3}
            separator=","
            text="Successful Alumni worldwide"
          />
          <StatItem
            icon="https://imgs.search.brave.com/gpzFly2lPEAGVUnvwsQkVqbIvTjIplHBojJUseMNT8w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vq/alRhRHh1dWdXTlZr/R0ozVDF5Rkd0N25S/bkI4bHVqbFlIMkxs/NndFX1A0d0FoTElR/TTdRRFBDT2laaVN5/Y1drbGtmTXBZV0hO/X1hSbnJHUEZaRE9N/dEItN2JVT3NGYnh1/a1YwdndYN0l2bXFN/S3NFME1NajQ4eDY5/U05SejBOMm5mYUR6/cFlZU3VoaWMvczYw/MC1ydy9JQk0rTG9n/bystK0Rvd25sb2Fk/K0ZyZWUrVmVjdG9y/K1NWRy53ZWJw"
            end={parseInt(first?.placement_rate?.replace(/\D/g, "") || 0)}
            start={65}
            duration={2.5}
            suffix="%"
            text="Placement program wise"
          />
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default HiringSection;
