 import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Users,
  BarChart,
  Activity,
  Calendar,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';
import StatsCard from '../StatsCard';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

const Card = ({ className = '', children }) => (
  <div className={`rounded-xl shadow bg-white ${className}`}>{children}</div>
);

const CardContent = ({ className = '', children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Button = ({ className = '', children, ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 rounded-md bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full ${className}`}
    {...props}
  >
    {children}
  </button>
);

const NCCSocialMedia = () => {
  const socialHandles = [
    {
      platform: 'Facebook',
      handle: '@UniversityNCC',
      followers: '1.8K',
      link: 'https://facebook.com/universityncc',
      description: 'Updates on training, camps, and achievements',
      color: 'bg-blue-600',
      icon: <Facebook className="w-6 h-6 text-white" />
    },
    {
      platform: 'Instagram',
      handle: '@university_ncc_cadets',
      followers: '2.3K',
      link: 'https://instagram.com/university_ncc_cadets',
      description: 'Visual stories of cadet life and training',
      color: 'bg-pink-600',
      icon: <Instagram className="w-6 h-6 text-white" />
    },
    {
      platform: 'YouTube',
      handle: 'University NCC Wing',
      followers: '1.2K',
      link: 'https://youtube.com/@universityncc',
      description: 'Training videos and camp documentaries',
      color: 'bg-red-600',
      icon: <Youtube className="w-6 h-6 text-white" />
    },
    {
      platform: 'Twitter',
      handle: '@UniversityNCC',
      followers: '950',
      link: 'https://twitter.com/universityncc',
      description: 'Real-time updates and announcements',
      color: 'bg-blue-500',
      icon: <Twitter className="w-6 h-6 text-white" />
    }
  ];

  const nccStatsData = [
    {
      icon: Users,
      number: 6300,
      numberText: '6,300',
      title: 'Total Followers',
      iconColor: '#3b82f6',
    },
    {
      icon: BarChart,
      number: 18000,
      numberText: '18,000',
      title: 'Monthly Reach',
      iconColor: '#10b981',
    },
    {
      icon: Activity,
      numberText: '5.8%',
      title: 'Engagement Rate',
      iconColor: '#f59e0b',
    },
    {
      icon: Calendar,
      number: 18,
      numberText: '18',
      title: 'Posts This Month',
      iconColor: '#ef4444',
    },
  ];

  return (
    <SearchableWrapper>
      <motion.div
        className="space-y-8 px-4 sm:px-6 lg:px-20 mx-auto max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Social Media Hub</h2>
          <p className="text-base sm:text-lg text-gray-600">
            Stay connected with NCC activities and share our journey of discipline and service
          </p>
        </motion.div>

        {/* Statistics */}
        <StatsCard stats={nccStatsData} />

        {/* Social Media Handles */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Connect With Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {socialHandles.map((handle, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${handle.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                      {handle.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{handle.platform}</h4>
                    <p className="text-gray-600 mb-2">{handle.handle}</p>
                    <div className="text-2xl font-bold text-orange-600 mb-4">{handle.followers}</div>
                    <p className="text-sm text-gray-600 mb-4">{handle.description}</p>
                    <Button
                      onClick={() => window.open(handle.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SearchableWrapper>
  );
};

export default NCCSocialMedia;
