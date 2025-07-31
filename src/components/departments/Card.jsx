import React from 'react';
import { Link } from 'react-router-dom';

const GlobalStyles = () => (
  <style>{`
    .perspective {
      perspective: 1000px;
    }

    .card-3d {
      transform-style: preserve-3d;
      transition: transform 0.4s ease;
    }

    .card-3d:hover {
      transform: translateZ(60px) scale(1.05);
    }
  `}</style>
);

const Card = ({ imageUrl, label, path }) => {
  return (
    <Link to={path} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
      <div className="relative h-96 w-full perspective">
        <div className="card-3d w-full h-full relative">
          <img
            src={imageUrl}
            alt={label}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 text-white backdrop-blur-sm bg-black/40 rounded-b-2xl">
        <h3 className="text-lg sm:text-xl font-semibold leading-tight">{label}</h3>
      </div>
    </Link>
  );
};

const HoverCards = () => {
  const cards = [
    {
      imageUrl: "https://www.gbu.ac.in/USICT/media/img/slider/1.jpg",
      label: "School Of Information and Communication Technology",
      path: "/schools/ict"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoLwvVWxxxBLWiAC0R019yjKPhFJzb5TuFg&s",
      label: "School Of Biotechnology",
      path: "/schools/biotech"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU89cU4dCM-KXWNc_7tD7_VrF45IcfZGDgFQ&s",
      label: "School Of Engineering",
      path: "/schools/engineering"
    },
    {
      imageUrl: "https://raw.githubusercontent.com/vishal-pandey/content-gbusite/master/slider/5.jpg",
      label: "School Of Buddhist Studies & Civilization",
      path: "/schools/buddhist"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk75RFQPIldQiGk1kAwU7bEURFQV0ORVlqyg&s",
      label: "School Of Law, Justice and Governance",
      path: "/schools/law"
    },
    {
      imageUrl: "https://allegiance-educare.in/storage/uploads/colleges/14974330541497431571kjhldf.jpg",
      label: "School Of Management",
      path: "/schools/management"
    },
    {
      imageUrl: "https://www.psychologs.com/wp-content/uploads/2023/03/GBU-final.jpg",
      label: "School Of Humanities and Social Sciences",
      path: "/schools/humanities"
    },
    {
      imageUrl: "https://images.shiksha.com/mediadata/images/1742534877phpTHlfCW.jpeg",
      label: "School Of Vocational Studies",
      path: "/schools/vocational"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <GlobalStyles />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white">
        <img
          src="https://gbu.ac.in/Content/img/slider2.jpg"
          alt="Campus"
          className="absolute w-full h-full object-cover z-0"
        />
        <div className="absolute w-full h-full bg-black opacity-60 z-0" />
        <div className="relative z-10 px-6 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Explore Our Schools</h1>
          <p className="text-md sm:text-lg font-medium">
            Gautam Buddha University offers a diverse range of schools across technology, law,
            management, humanities, and more. Discover specialized faculties and unique academic experiences
            tailored to empower students for real-world challenges.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="p-6 mt-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Schools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HoverCards;
