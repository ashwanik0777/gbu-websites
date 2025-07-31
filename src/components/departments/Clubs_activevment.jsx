import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Youtube } from "lucide-react";
import { clubsData as clubs } from "../clubs/data/clubsData.js";

const ClubsAchievements = () => {
  const navigate = useNavigate();

  const handleCardClick = (clubId) => {
    navigate(`/club/${clubId}`);
  };

  const renderSocialIcon = (platform, url) => {
    const baseClass = "w-5 h-5 transition-colors cursor-pointer";
    const getClass = {
      facebook: `${baseClass} text-gray-600 hover:text-blue-600`,
      instagram: `${baseClass} text-gray-600 hover:text-pink-500`,
      twitter: `${baseClass} text-gray-600 hover:text-sky-500`,
      linkedin: `${baseClass} text-gray-600 hover:text-blue-700`,
      email: `${baseClass} text-gray-600 hover:text-red-500`,
      youtube: `${baseClass} text-gray-600 hover:text-red-600`,
    }[platform];

    const openLink = () => {
      if (platform === "email") {
        window.open(`mailto:${url}`, "_blank");
      } else {
        window.open(url, "_blank");
      }
    };

    const icons = {
      facebook: Facebook,
      instagram: Instagram,
      twitter: Twitter,
      linkedin: Linkedin,
      email: Mail,
      youtube: Youtube,
    };

    const Icon = icons[platform];
    return Icon ? <Icon className={getClass} onClick={openLink} /> : null;
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">Student Clubs & Activities</h2>
          <p className="text-xl text-gray-600">Fostering leadership and innovation</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer"
              onClick={() => handleCardClick(club.id)}
            >
              <div className="relative">
                <img src={club.banner || club.image} alt="club" className="w-full h-48 object-cover rounded-t-xl" />
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white">{club.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-college-navy text-lg font-semibold mb-2">{club.name}</h4>
                <p className="text-gray-600 mb-3 line-clamp-2">{club.description}</p>
                <p className="text-sm text-gray-500 mb-1">Faculty Advisor:</p>
                <p className="text-sm font-medium text-college-navy mb-3 truncate">
                  {club.facultyAdvisor || club.team?.facultyCoordinator?.name || "N/A"}
                </p>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-gray-500">Members:</span>
                  <span className="font-semibold text-college-blue">{club.members || club.memberCount || "N/A"}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-center gap-4">
                    {Object.entries(club.socialMedia || {}).map(([platform, url]) => (
                      <div key={platform}>{renderSocialIcon(platform, url)}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsAchievements;
