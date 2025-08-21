import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, MessageCircle, Users, ArrowUpRight } from 'lucide-react';

// Mock data for demonstration
const clubsData = [
  {
    name: 'Tech Club',
    socialMedia: {
      instagram: 'https://instagram.com/techclub',
      linkedin: 'https://linkedin.com/company/techclub',
      youtube: 'https://youtube.com/techclub',
      whatsapp: 'https://chat.whatsapp.com/techclub'
    }
  }
];

const SearchableWrapper = ({ children }) => <div>{children}</div>;

const Card = ({ children, className, ...props }) => (
  <motion.div 
    className={`rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 ${className ?? ''}`} 
    {...props}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`px-6 py-4 ${className ?? ''}`} {...props}>{children}</div>
);

const CardTitle = ({ children, className, ...props }) => (
  <div className={`font-medium text-lg text-gray-900 ${className ?? ''}`} {...props}>{children}</div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`px-6 pb-6 ${className ?? ''}`} {...props}>{children}</div>
);

const Button = ({ children, className, ...props }) => (
  <motion.button
    className={`w-full rounded-xl px-4 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 ${className ?? ''}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
  </motion.button>
);

const ClubSocialMedia = ({ club = clubsData[0] }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: club.socialMedia.instagram,
      icon: Instagram,
      color: 'hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200',
      handle: '@' + club.name.toLowerCase().replace(/\s+/g, '_') + '_gbu'
    },
    {
      name: 'LinkedIn',
      url: club.socialMedia.linkedin,
      icon: Linkedin,
      color: 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200',
      handle: club.name + ' - GBU'
    },
    {
      name: 'YouTube',
      url: club.socialMedia.youtube,
      icon: Youtube,
      color: 'hover:bg-red-50 hover:text-red-600 hover:border-red-200',
      handle: club.name + ' GBU'
    },
    {
      name: 'WhatsApp',
      url: club.socialMedia.whatsapp,
      icon: MessageCircle,
      color: 'hover:bg-green-50 hover:text-green-600 hover:border-green-200',
      handle: 'Join Group'
    }
  ].filter(link => link.url);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <SearchableWrapper>
      <Card className="sticky top-8 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <motion.div
              className="p-2 bg-gray-100 rounded-lg"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Users className="w-5 h-5 text-gray-600" />
            </motion.div>
            <span>Connect With Us</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.div key={link.name} variants={itemVariants}>
                  <Button
                    className={`border border-gray-200 bg-white text-gray-700 justify-between group ${link.color}`}
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-200">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-sm">{link.name}</div>
                        <div className="text-xs text-gray-500 truncate max-w-32">{link.handle}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Button>
                </motion.div>
              );
            })}
            {socialLinks.length === 0 && (
              <motion.div 
                className="text-center py-8 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Users className="w-6 h-6 text-gray-400" />
                </motion.div>
                <p className="text-sm font-medium text-gray-600">Social media links coming soon!</p>
                <p className="text-xs text-gray-400 mt-1">Stay tuned for updates</p>
              </motion.div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </SearchableWrapper>
  );
};

export default ClubSocialMedia;