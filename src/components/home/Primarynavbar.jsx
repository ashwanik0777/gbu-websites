import React, { useState } from "react";
import {
  Send,
  Info,
  CreditCard,
  User,
  Phone,
  LogIn,
  Map,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

const Primarynavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SearchableWrapper>    

    <nav
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white text-sm shadow"
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="w-full py-2 px-6 xl:px-16 flex justify-between items-center">
        {/* Mobile menu button */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden xl:flex w-full justify-between">
          {/* Left links */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="/tender" className="flex items-center gap-1 hover:underline">
              <Send size={14} /> Tenders
            </a>
            <a href="/recruitments" className="flex items-center gap-1 hover:underline">
              <Send size={14} /> Recruitments
            </a>

            <a href="/booking" className="hover:underline">Booking</a>
            

          
            <a href="/rti" className="flex items-center gap-1 hover:underline">

              <Info size={14} /> RTI
            </a>
            <a href="/sitemapMain" className="hover:underline">Sitemap</a>



          </div>

          {/* Right links */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="https://gbu-smart-fee.vercel.app/" className="flex items-center gap-1 hover:underline">
              <CreditCard size={14} /> Online Fee Payment
            </a>
            <a href="https://student-dashboard-gules-rho.vercel.app/" className="flex items-center gap-1 hover:underline">
              <User size={14} /> Student Portal
            </a>
            <a href="https://faculty-dashboard-kappa.vercel.app/" className="flex items-center gap-1 hover:underline">
              <LogIn size={14} /> Faculty Login
            </a>

            <a href="https://admin-dashboard-three-green-45.vercel.app/" className="flex items-center gap-1 hover:underline">
              <LogIn size={14} /> Admin Login
            </a>
            <Link
              to="/grievance"
              className="flex items-center gap-1 hover:underline"
            >
              <Map size={14} /> Grievance Portal
            </Link>
            <a href="/contactDirectory" className="flex items-center gap-1 hover:underline">
              <Map size={14} /> Directory
            </a>


         

              <Link
                to="/contactUs"
                className="flex items-center gap-1 hover:underline"
              >
                <Phone size={14} /> Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile slide-in sidebar and overlay */}
        <div
          className={`fixed inset-0 z-[9999] transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"

          />

          {/* Sidebar */}
          <div className="relative bg-white w-64 h-full p-6 overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600"
              aria-label="Close sidebar"
            >

          
            <X size={24} />
          </button>

          <div className="mt-12 space-y-6 text-sm font-medium">
            {/* Quick Links */}
            <div>
              <p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Quick Links</p>
              <div className="space-y-2">
                <a href="/tender" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Tenders
                </a>
                <a href="/recruitments" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Recruitments
                </a>
                <a href="/booking" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Booking
                </a>
                <a href="/rti" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  RTI
                </a>

                <a href="/sitemapMain" className="block px-3 py-2 rounded-md hover:bg-gray-100">
  Sitemap
</a>



              </div>
            </div>

            <hr className="border-gray-300" />

            {/* Portals */}
            <div>
              <p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Portals</p>
              <div className="space-y-2">
                <a href="https://gbu-smart-fee.vercel.app/" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Online Fee Payment
                </a>
                <a href="https://uni-spark-dashboard.lovable.app/" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Student Portal
                </a>
                <a href="https://mygbu-faculty-nexus-3d.lovable.app/" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Employee Login
                </a>
                <a href="/contactDirectory" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Directory
                </a>

                <Link
                  to="/grievance"
                  className="block px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Grievance Portal
                </Link>
                <Link to="/contactUs" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div> {/* Mobile overlay & sidebar container */}
    </nav>  

    </SearchableWrapper>
  );
};

export default Primarynavbar;

