
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:bg-blue-400'
    }
  ];

  return (
    <div className="flex space-x-4 justify-center lg:justify-start">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              bg-black/20 p-3 rounded-full border border-white/30 
              hover:scale-110 hover:shadow-lg transition-all duration-300
              ${social.color}
              group
            `}
            aria-label={`Visit our ${social.name} page`}
          >
            <IconComponent className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;