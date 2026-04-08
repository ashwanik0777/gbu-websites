import React, { useEffect, useState } from 'react';
import homeData from '../../Data/home.json';
import gbuimage from '../../assets/gbu.jpg';

function VirtualTour() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const virtualData = homeData?.sections?.virtual_experience?.[0] || null;
    setData(virtualData);
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
        <h2 className="text-5xl font-extrabold mb-6">Explore GBU in #360</h2>
        {/* {data.title} */}
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
