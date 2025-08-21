import React, { useState, useRef, useContext, useEffect, createContext } from "react";
import { Share2, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

// ✅ Button Component
const Button = ({ children, className = "", size = "md", variant = "default", ...props }) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const variantClasses = {
    default: "bg-gray-100 hover:bg-gray-200 text-gray-900",
    outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900"
  };
  return (
    <button
      className={`rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ✅ Popover System
const PopoverContext = createContext();

const Popover = ({ children }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className="relative  inline-block">{children}</div>
    </PopoverContext.Provider>
  );
};

const PopoverTrigger = ({ asChild, children }) => {
  const { setOpen, triggerRef } = useContext(PopoverContext);
  const child = React.Children.only(children);
  const props = {
    ref: triggerRef,
    onClick: (e) => {
      setOpen((o) => !o);
      if (child.props.onClick) child.props.onClick(e);
    }
  };
  return asChild
    ? React.cloneElement(child, props)
    : <button {...props}>{children}</button>;
};

const PopoverContent = ({ children, className = "" }) => {
  const { open, setOpen, triggerRef } = useContext(PopoverContext);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (!open) return null;
  return (
    <div
      ref={contentRef}
      className={`absolute right-0 z-[1050] mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-2 ${className}`}
    >
      {children}
    </div>
  );
};

// ✅ SocialShare Component
const SocialShare = ({ url, title }) => {
  const shareUrls = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const icons = [
    {
      name: 'WhatsApp',
      url: shareUrls.whatsapp,
      bg: 'bg-[#25D366]',
      shadow: 'hover:shadow-[0_0_6px_#25D366]',
      icon: <MessageCircle />
    },
    {
      name: 'Facebook',
      url: shareUrls.facebook,
      bg: 'bg-[#1877F2]',
      shadow: 'hover:shadow-[0_0_6px_#1877F2]',
      icon: <Facebook />
    },
    {
      name: 'Twitter',
      url: shareUrls.twitter,
      bg: 'bg-[#1DA1F2]',
      shadow: 'hover:shadow-[0_0_6px_#1DA1F2]',
      icon: <Twitter />
    },
    {
      name: 'LinkedIn',
      url: shareUrls.linkedin,
      bg: 'bg-[#0A66C2]',
      shadow: 'hover:shadow-[0_0_6px_#0A66C2]',
      icon: <Linkedin />
    }
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <span className="flex items-center gap-2">
            <Share2 size={16} />
            Share
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex gap-2">
          {icons.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className={`
                w-8 h-8 flex items-center justify-center rounded-full text-white 
                transition-all duration-300 ${item.bg} ${item.shadow}
                hover:text-black
              `}
            >
              {React.cloneElement(item.icon, {
                size: 16,
                className: "transition-colors duration-300"
              })}
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SocialShare;
