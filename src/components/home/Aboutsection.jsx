import { useEffect, useState } from "react";
import axios from "axios";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

const BASE_URL = import.meta.env.VITE_HOST || "";

export default function AboutSection() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/landing/about/`);
        const data = res.data;
        console.log("Fetched aboutData:", data);
        setAboutData(data[0]); 
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) return <div className="text-center py-10">Loading...</div>;

  const imageSrc = aboutData.image?.includes("http")
    ? aboutData.image
    : `${BASE_URL}/${aboutData.image.startsWith("media") ? "" : "media/"}${aboutData.image}`;

  return (
     <SearchableWrapper>
    <div className="bg-white py-12 px-6 sm:py-16 sm:px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-red-500 mb-6">
            {aboutData.title || "About Us"}
          </h2>

          {aboutData.description &&
            aboutData.description.split(/\r?\n\r?\n/).map((para, index) => (
              <p key={index} className="text-gray-700 text-base sm:text-lg mb-4">
                {para}
              </p>
            ))}

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
            {aboutData.button1_text && aboutData.button1_url && (
              <a
                href={aboutData.button1_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-blue-700 text-blue-700 px-5 py-3 rounded-md hover:bg-blue-50 transition w-full sm:w-auto">
                  {aboutData.button1_text}
                </button>
              </a>
            )}
           
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative flex justify-center">
          <img
            src={aboutData.image ? imageSrc : "https://via.placeholder.com/600x400?text=No+Image"}
            alt={aboutData.title || "About Section"}
            className="rounded-xl shadow-xl w-full object-cover"
          />

          <div className="absolute bottom-4 right-4 bg-orange-600 text-white text-center px-5 py-3 rounded-lg shadow-lg text-sm sm:text-base">
            <div className="text-xl sm:text-2xl font-bold">15+</div>
            <div>Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
    </SearchableWrapper>
  );
}
