import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  Info,
  CreditCard,
  User,
  LogIn,
  Phone,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

// ─── LINKS ─────────────────────────────────────────────

const LEFT_LINKS = [
  { href: "/tender", label: "Tenders", icon: Send },
  { href: "/recruitments", label: "Recruitments", icon: Send },
  { href: "/booking", label: "Booking" },
  { href: "/rti", label: "RTI", icon: Info },
  { href: "/sitemapMain", label: "Sitemap" },
];

const RIGHT_LINKS = [
  {
    href: "https://csms.gbu.ac.in/",
    label: "Online Fee Payment",
    icon: CreditCard,
    external: true,
  },
  {
    href: "https://gbu.samarth.ac.in/",
    label: "Student Portal",
    icon: User,
    external: true,
  },
  {
    href: "https://gbu.samarth.ac.in/",
    label: "Faculty Login",
    icon: LogIn,
    external: true,
  },
  {
    href: "https://gbu.samarth.ac.in/",
    label: "Admin Login",
    icon: LogIn,
    external: true,
  },
  { to: "/grievance", label: "Grievance", icon: BookOpen },
  { href: "/contactDirectory", label: "Directory" },
  { to: "/contactUs", label: "Contact Us", icon: Phone },
];

// ─── NavLink ───────────────────────────────────────────

const NavLink = ({ href, to, label, icon: Icon, external, desktop }) => {
  const base = "flex items-center gap-1.5 transition-all duration-200";

  const desktopCls =
    base + " text-white/90 hover:text-white hover:underline underline-offset-4";

  const mobileCls =
    base +
    " px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-700";

  const cls = desktop ? desktopCls : mobileCls;

  const content = (
    <>
      {Icon && <Icon size={13} />}
      {label}
    </>
  );

  if (to)
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );

  return (
    <a
      href={href}
      className={cls}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {content}
    </a>
  );
};

// ─── NAVBAR ────────────────────────────────────────────

const Primarynavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <SearchableWrapper>
      {/* 🔥 ONLY HEIGHT & WIDTH CHANGED HERE */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-lg shadow-md">
        <div className="px-3 md:px-6 xl:px-12 py-1 flex justify-between items-center">
          {/* LEFT DESKTOP */}
          <div className="hidden xl:flex items-center gap-6">
            {LEFT_LINKS.map((link) => (
              <NavLink key={link.label} {...link} desktop />
            ))}
          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden xl:flex items-center gap-6 ml-auto">
            {RIGHT_LINKS.map((link) => (
              <NavLink key={link.label} {...link} desktop />
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="xl:hidden p-1.5 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER (UNCHANGED) */}
      <div
        className={`fixed inset-0 z-[9999] ${isOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`relative w-72 h-full bg-white shadow-xl transform transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-5 py-4 border-b">
            <span className="font-semibold text-gray-800">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="p-4 space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase mb-2">
                Quick Links
              </p>
              <div className="space-y-1">
                {LEFT_LINKS.map((link) => (
                  <NavLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase mb-2">Portals</p>
              <div className="space-y-1">
                {RIGHT_LINKS.map((link) => (
                  <NavLink key={link.label} {...link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchableWrapper>
  );
};

export default Primarynavbar;
