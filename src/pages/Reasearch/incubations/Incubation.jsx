import React from "react";
import Focus from "./Focus";
import Services from "./Services";
import StartupsCarousel from "./StartupsCarousel";
import { Lightbulb } from "lucide-react";
import StartUp from "./StartUp";

import Team from "./Team";
import ImageGallery from "./ImageGallery";
import EventSlider from "./EventSlider";
import ContactUs from "./ContactUs";
// import IncubationNav from "./IncubationNav";

import BannerSection from "../../../components/HeroBanner.jsx";
import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper.jsx";

const Incubation = () => {
  return (
    <SearchableWrapper>
      <div>
        {/* Banner Section */}
        <BannerSection
          title="Incubation Center"
          subtitle="Transforming research into real-world solutions through innovation and entrepreneurship"
          bgTheme={5} // Pick any theme (1 to 10) as per your design
        />

        {/* About Section */}
        <div className="bg-white py-12 lg:px-40 sm:py-16 sm:px-10 md:px-20">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-red-500 mb-10">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

            <div className="md:w-1/2 text-center md:text-left">

              <p className="text-gray-700 text-base sm:text-lg mb-4">
                GBU started setting up its Incubation Centre in year 2018 which
                got StartinUP (Govt of Uttar Pradesh) recognition in year 2023 in
                the name of GBURIF (GBU Research and Innovation Foundation). Later
                on GBU got shortlisted for ATAL Incubation Centre subsequent to
                the application and presentation to ATAL Mission of NITI AAYOG.
                Then it was renamed as per the directions of Niti Aayog as AIC-GBU
                Incubation Centre.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                The AIC-GBU Incubation Center primarily aims to support startups,
                encourage entrepreneurhip, and early stage businesses by providing
                available resources, mentorship, and infrastructure to help them
                grow and succeed. The incubation Centre support technological
                facilities and advises, network linkages, co-working spaces, lab
                facilities, mentoring, advisory support and initial growth funds
                (mainly from AIC grant to the university).
              </p>
            </div>

            <div className="relative md:w-1/2 w-full mt-8 md:mt-0">
              <img
                src="https://www.gburif.org/images/intro-carousel/dsf8939-b-copy.jpg"
                alt="Library"
                className="rounded-xl shadow-xl w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-orange-600 text-white text-center px-5 py-3 rounded-lg shadow-lg text-sm sm:text-base">
                <div className="text-xl sm:text-2xl font-bold">15+</div>
                <div>Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        <Focus />

        <Services />

        <Team />

        <StartupsCarousel />

        <StartUp />

        <div class="text-center mb-15">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2dX1NwPluJ1A1-2cHY39ck3CYhrdCskgIQZUxCj981eDwew/viewform"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-300">
            < Lightbulb size={80} className="w-5 h-5" />
            Submit Your Idea
          </a>
        </div>
        <ImageGallery />

        <EventSlider />

        <ContactUs />

      </div>
    </SearchableWrapper>
  );
};

export default Incubation;
