import React, { useEffect, useState } from 'react';
import axios from 'axios';
import gbuimage from '../../assets/gbu.jpg';

const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');
const VIRTUAL_TOUR_API = `${BASE}/landing/virtual-experience/`;

function VirtualTour() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchVirtualTourData = async () => {
      try {
        const response = await axios.get(VIRTUAL_TOUR_API);
        const json = response.data;
        if (Array.isArray(json) && json.length > 0) {
          setData(json[0]);
        }
      } catch (error) {
        console.error('Error fetching virtual tour data:', error);
      }
    };

    fetchVirtualTourData();
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-lg font-semibold">Loading virtual experience...</p>
      </div>
    );
  }

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${gbuimage})`,
        backgroundColor: data.background_color || '#000',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div className="bg-black/50 p-6 rounded-lg max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-6">{data.title}</h2>
        <p className="text-lg mb-8 leading-relaxed">{data.desc}</p>
        <a
          href={data.video_link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full inline-block"
        >
          {data.button1_text}
        </a>
      </div>
    </section>
  );
}

export default VirtualTour;
