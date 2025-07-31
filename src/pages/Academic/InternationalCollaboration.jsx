import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Globe, Users, BookOpen, MapPin, Plane
} from 'lucide-react';
import { motion } from 'framer-motion';

const BASE_URL = import.meta.env.VITE_HOST;

import BannerSection from "../../components/HeroBanner.jsx";
import StatsCard from "../../components/StatsCard.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

// ✅ Local static images
const partnerImages = [
  '/assets/partners/mit.avif',
  '/assets/partners/cybertech.avif',
  '/assets/partners/nextgen.avif',
];

const programImages = [
  '/assets/programs/program1.avif',
  '/assets/programs/program2.avif',
  '/assets/programs/program1.avif', // Repeat if needed
];

const opportunityImages = [
  '/assets/opportunities/opp1.avif',
  '/assets/opportunities/opp2.avif',
  '/assets/opportunities/opp1.avif', // Repeat if needed
];

const Collaboration = () => {
  const [hero, setHero] = useState(null);
  const [partners, setPartners] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [cta, setCta] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, partnersRes, programsRes, opportunitiesRes, ctaRes] = await Promise.all([
          axios.get(`${BASE_URL}/academic/mou/hero/`),
          axios.get(`${BASE_URL}/academic/mou/partners/`),
          axios.get(`${BASE_URL}/academic/mou/programs/`),
          axios.get(`${BASE_URL}/academic/mou/opportunities/`),
          axios.get(`${BASE_URL}/academic/mou/collaborations/`)
        ]);

        setHero(heroRes.data[0]);
        setPartners(partnersRes.data);
        setPrograms(programsRes.data);
        setOpportunities(opportunitiesRes.data);
        setCta(ctaRes.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!hero || !cta) return <div className="text-center py-20 text-lg">Loading...</div>;

  const stats = [
    { icon: Globe, number: hero.activemou_count, title: "Active MOUs", iconColor: "#4338ca" }, // indigo-700
    { icon: Users, number: hero.participants_counts, numberText:hero.participants_counts, title: "Participants", iconColor: "#2563eb" }, // blue-600
    { icon: MapPin, number: hero.countries_count, title: "Countries", iconColor: "#059669" }, // green-600
    { icon: BookOpen, number: hero.publications_count, title: "Publications", iconColor: "#f97316" }, // orange-500
  ];


  return (
    <SearchableWrapper>
      <div className="font-sans">
        {/* HERO */}
        <BannerSection
          title={hero.title}
          subtitle={hero.description}
          bgTheme={hero.bgTheme || 2} // pick your desired theme number
        />


        {/* STATS */}
        <StatsCard stats={stats} />

        {/* PARTNERS */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-gray-100 px-6"
        >
          <h2 className="text-center text-4xl font-extrabold mb-12 text-gray-800">Our Global Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
            {partners.map((p, i) => {
              const isExpanded = expanded[p.id] || false;
              const shortDesc = p.card_desc?.slice(0, 60) || '';
              const shouldShowToggle = p.card_desc?.length > 60;

              return (
                <motion.div
                  key={p.id}
                  className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-500 group"
                  variants={fadeUp}
                >
                  <div className="h-65 w-full overflow-hidden">
                    <img
                      src={partnerImages[i % partnerImages.length]}
                      alt={p.card_title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>
                  {/* <div className="absolute inset-0 z-0"></div> */}
                  <div className="relative p-6 bg-gray-700 text-white z-10">
                    <h3 className="text-xl font-bold">{p.card_title}</h3>
                    <p className="text-sm opacity-80 my-3">
                      {isExpanded ? p.card_desc : shortDesc}
                      {shouldShowToggle && (
                        <>
                          {!isExpanded && '... '}
                          <button
                            onClick={() =>
                              setExpanded(prev => ({ ...prev, [p.id]: !isExpanded }))
                            }
                            className="underline text-xs ml-1"
                          >
                            {isExpanded ? 'Read less' : 'Read more'}
                          </button>
                        </>
                      )}
                    </p>
                    <p className="text-sm mb-1">Country: {p.country}</p>
                    <p className="text-sm mb-3">Since {p.since_year}</p>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-white/10 backdrop-blur-md px-4 py-3 text-sm rounded-full hover:bg-white hover:text-black"
                    >
                      View MoU →
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </motion.section>


        {/* PROGRAMS */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-white px-6"
        >
          <h2 className="text-center text-4xl font-extrabold mb-4">{programs[0]?.title}</h2>
          <p className="text-center text-gray-800 mb-12 max-w-2xl mx-auto">{programs[0]?.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-25">
            {programs.map((p, i) => (
              <motion.div
                key={p.id}
                className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-500 group"
                variants={fadeUp}
              >
                <div className="h-125 w-full overflow-hidden">
                  <img
                    src={programImages[i % programImages.length]}
                    alt={p.card_title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-1">{p.card_title}</h3>
                  <p className="text-sm mb-1">{p.card_desc}</p>
                  <p className="text-sm mb-1">Duration: {p.duration}</p>
                  <p className="text-sm mb-2">Participants: {p.participants}</p>
                  <ul className="text-sm list-disc pl-4 opacity-80">
                    {p.benefits.split('\r\n').map((b, index) => <li key={index}>{b}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* OPPORTUNITIES */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 bg-gray-100 px-25"
        >
          <h2 className="text-center text-4xl font-extrabold mb-4">{opportunities[0]?.title}</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">{opportunities[0]?.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {opportunities.map((o, i) => (
              <motion.div
                key={o.id}
                className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl transition transform hover:-translate-y-2 duration-500 group"
                variants={fadeUp}
              >
                <div className="h-68 opacity-80 w-full overflow-hidden">
                  <img
                    src={opportunityImages[i % opportunityImages.length]}
                    alt={o.card_title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-12 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <Plane className="w-4 h-4 text-white" />
                    <span className="text-sm text-red-700">Deadline: {new Date(o.deadline).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{o.card_title}</h3>
                  <p className="text-sm mb-1">Duration: {o.duration}</p>
                  <p className="text-sm mb-1">Benefits: {o.benefits}</p>
                  <p className="text-sm mb-3">Eligibility: {o.elegibility}</p>
                  <a
                    href={o.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 text-sm rounded-full hover:text-black hover:bg-white"
                  >
                    {o.button_text}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <section className="py-20 px-4 text-center" style={{ backgroundColor: cta.background_color }}>
          <h2 className="text-3xl font-bold mb-2">{cta.title}</h2>
          <p className="text-gray-600 mb-4">{cta.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a href={cta.url1} className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">{cta.button1_text}</a>
            <a href={cta.url2} className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50">{cta.button2_text}</a>
          </div>
        </section>
      </div>
    </SearchableWrapper>
  );
};

export default Collaboration;
