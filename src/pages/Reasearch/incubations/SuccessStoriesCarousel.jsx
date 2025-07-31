import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper";

const successStories = [
  {
    name: "AgroSense Technologies",
    description:
      "Starting from a university research project, AgroSense has grown into a leading AgriTech company serving over 10,000 farmers across India...",
    founder: "Dr. Rajesh Kumar",
    role: "Co-founder & CEO, AgroSense Technologies",
    avatar: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=60&h=60&fit=crop",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    stats: [
      { label: "Farmers Served", value: "10,000+", color: "text-green-600" },
      { label: "Funding Raised", value: "₹2.5Cr", color: "text-sky-600" },
      { label: "Yield Increase", value: "30%", color: "text-yellow-500" }
    ]
  },
  {
    name: "MediTrack Solutions",
    description:
      "MediTrack transformed patient monitoring by providing real-time health data. Their growth is fueled by university-backed AI research.",
    founder: "Ananya Sharma",
    role: "CTO, MediTrack",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=60&h=60&fit=crop",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    stats: [
      { label: "Hospitals Using", value: "150+", color: "text-green-600" },
      { label: "Funding Raised", value: "₹3Cr", color: "text-sky-600" },
      { label: "Health Alerts Sent", value: "1M+", color: "text-yellow-500" }
    ]
  },
  {
    name: "EcoBin India",
    description:
      "EcoBin's smart waste solutions have revolutionized recycling in tier-2 cities. Their early-stage prototyping was supported by campus facilities.",
    founder: "Rohan Mehta",
    role: "Founder, EcoBin India",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=60&h=60&fit=crop",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    stats: [
      { label: "Bins Installed", value: "5,000+", color: "text-green-600" },
      { label: "Waste Recycled", value: "200T+", color: "text-sky-600" },
      { label: "Cities Covered", value: "12", color: "text-yellow-500" }
    ]
  }
];

const SuccessStoriesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <SearchableWrapper>
    <div className="bg-gray-100 rounded-lg p-8 mb-16">
      <Slider {...settings}>
        {successStories.map((story, idx) => (
          <div key={idx}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-primary text-2xl font-bold mb-3">Success Story Spotlight</h3>
                <h4 className="text-lg font-semibold mb-3">{story.name}</h4>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="flex items-center mb-4">
                  <img src={story.avatar} alt="Founder" className="w-14 h-14 rounded-full object-cover mr-3" />
                  <div>
                    <p className="font-semibold">{story.founder}</p>
                    <p className="text-sm text-gray-500">{story.role}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 text-center">
                  {story.stats.map((stat, statIdx) => (
                    <div key={statIdx}>
                      <p className={`${stat.color} text-lg font-bold`}>{stat.value}</p>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img src={story.image} alt={story.name} className="rounded shadow" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </SearchableWrapper>
  );
};

export default SuccessStoriesCarousel;
