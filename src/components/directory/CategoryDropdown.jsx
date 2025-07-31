import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Filter,
  ChevronDown,
  Search,
  Check,
  Building2,
  ClipboardList,
  Users,
  Wallet,
  Package,
  FileText,
  FilePlus,
  Briefcase,
  Mail,
  ShieldCheck,
  KeySquare,
  Shield,
  Home,
  Wrench,
  Landmark,
  Layers,
  Phone,
  Library,
  BookOpen,
  FileArchive,
  School,
  Hotel,
  Folder
} from "lucide-react";

export const iconMap = {
  "VC Secretariat": Building2,
  "Registrar Office": ClipboardList,
  "Coordinating Deans": Users,
  "Accounts Section": Wallet,
  "Department Of Store": Package,
  "Examination & Admission Dept": FileText,
  "Exam Control Room": FilePlus,
  "Corporate Relation": Briefcase,
  "Admin Post Office": Mail,
  "Chief Proctorial Board": ShieldCheck,
  "Hostel Chief Warden": KeySquare,
  "Security Numbers": Shield,
  "VC Bungalow": Home,
  "Maintenance Section": Wrench,
  "Sports Complex": Landmark,
  "Central Computer Center": Layers,
  "Telephone Exchange": Phone,
  "Central Library": Library,
  "Meditation Centre": BookOpen,
  "Dispensary": FileArchive,
  "School of Applied Science": School,
  "School of Engineering": School,
  "School of ICT": School,
  "School of Management": School,
  "School of Law": School,
  "School of Biotech": School,
  "School of Buddhist Studies": School,
  "School of Humanities & Social Science": School,
  "Workshop Civil Engineering": Wrench,
  "International Convention Center": Landmark,

  // Girls Hostels
  "Savitribai Phule Girls Hostel": Hotel,
  "Rama Bai Ambedkar Girls Hostel": Hotel,
  "Maha Maya Girls Hostel": Hotel,
  "Maharani Laxmi Bai Girls Hostel": Hotel,

  // Boys Hostels
  "Chhatrapati Sahuji Maharaj Boys Hostel": Hotel,
  "Sant Ravidas Boys Hostel": Hotel,
  "Narayan Guru Boys Hostel": Hotel,
  "Sant Kabir Das Boys Hostel": Hotel,
  "Birsa Munda Boys Hostel": Hotel,
  "Guru Ghasidas Boys Hostel": Hotel,
  "Malik Mohammad Jaysee Boys Hostel": Hotel,
  "Dr. Ram Manohar Lohia Boys Hostel": Hotel,
  "Aryabhatt Boys Hostel": Hotel,
  "Siddharth Boys Hostel": Hotel,

  "General": Folder,

  // Fallback
  default: Folder,
};

const categories = [
  { value: "all", label: "All Categories" },
  { value: "VC Secretariat", label: "VC Secretariat" },
  { value: "Registrar Office", label: "Registrar Office" },
  { value: "Coordinating Deans", label: "Coordinating Deans" },
  { value: "Accounts Section", label: "Accounts Section" },
  { value: "Department Of Store", label: "Department Of Store" },
  { value: "Examination & Admission Dept", label: "Examination & Admission Dept" },
  { value: "Exam Control Room", label: "Exam Control Room" },
  { value: "Corporate Relation", label: "Corporate Relation" },
  { value: "Admin Post Office", label: "Admin Post Office" },
  { value: "Chief Proctorial Board", label: "Chief Proctorial Board" },
  { value: "Hostel Chief Warden", label: "Hostel Chief Warden" },
  { value: "Security Numbers", label: "Security Numbers" },
  { value: "VC Bungalow", label: "VC Bungalow" },
  { value: "Maintenance Section", label: "Maintenance Section" },
  { value: "Sports Complex", label: "Sports Complex" },
  { value: "Central Computer Center", label: "Central Computer Center" },
  { value: "Telephone Exchange", label: "Telephone Exchange" },
  { value: "Central Library", label: "Central Library" },
  { value: "Meditation Centre", label: "Meditation Centre" },
  { value: "Dispensary", label: "Dispensary" },
  { value: "School of Applied Science", label: "School of Applied Science" },
  { value: "School of Engineering", label: "School of Engineering" },
  { value: "School of ICT", label: "School of ICT" },
  { value: "School of Management", label: "School of Management" },
  { value: "School of Law", label: "School of Law" },
  { value: "School of Biotech", label: "School of Biotech" },
  { value: "School of Buddhist Studies", label: "School of Buddhist Studies" },
  { value: "School of Humanities & Social Science", label: "School of Humanities & Social Science" },
  { value: "Workshop Civil Engineering", label: "Workshop Civil Engineering" },
  { value: "International Convention Center", label: "International Convention Center" },
  { value: "General", label: "General" },
  { value: "Savitribai Phule Girls Hostel", label: "Savitribai Phule Girls Hostel" },
  { value: "Rama Bai Ambedkar Girls Hostel", label: "Rama Bai Ambedkar Girls Hostel" },
  { value: "Maha Maya Girls Hostel", label: "Maha Maya Girls Hostel" },
  { value: "Maharani Laxmi Bai Girls Hostel", label: "Maharani Laxmi Bai Girls Hostel" },
  { value: "Chhatrapati Sahuji Maharaj Boys Hostel", label: "Chhatrapati Sahuji Maharaj Boys Hostel" },
  { value: "Sant Ravidas Boys Hostel", label: "Sant Ravidas Boys Hostel" },
  { value: "Narayan Guru Boys Hostel", label: "Narayan Guru Boys Hostel" },
  { value: "Sant Kabir Das Boys Hostel", label: "Sant Kabir Das Boys Hostel" },
  { value: "Birsa Munda Boys Hostel", label: "Birsa Munda Boys Hostel" },
  { value: "Guru Ghasidas Boys Hostel", label: "Guru Ghasidas Boys Hostel" },
  { value: "Malik Mohammad Jaysee Boys Hostel", label: "Malik Mohammad Jaysee Boys Hostel" },
  { value: "Dr. Ram Manohar Lohia Boys Hostel", label: "Dr. Ram Manohar Lohia Boys Hostel" },
  { value: "Aryabhatt Boys Hostel", label: "Aryabhatt Boys Hostel" },
  { value: "Siddharth Boys Hostel", label: "Siddharth Boys Hostel" },
];

function CategoryDropdown({ selectedCategory, onCategoryChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const selected = categories.find(
    (c) => (selectedCategory === "" && c.value === "all") || c.value === selectedCategory
  );

  const filteredCategories = categories.filter(category =>
    category.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (value) => {
    onCategoryChange(value === "all" ? "" : value);
    setIsOpen(false);
    setSearchTerm("");
    setFocusedIndex(-1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev =>
          prev < filteredCategories.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0) {
          handleSelect(filteredCategories[focusedIndex].value);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSearchTerm("");
        setFocusedIndex(-1);
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -8,
      scale: 0.96
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.02
      }
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.96,
      transition: {
        duration: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <div ref={dropdownRef} className="relative w-full max-w-sm">
      <motion.button
        whileHover={{
          scale: 1.02,
          boxShadow: "0 8px 25px -8px rgba(0, 0, 0, 0.15)"
        }}
        whileTap={{ scale: 0.98 }}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="w-full group relative overflow-hidden bg-white/90 backdrop-blur-xl border border-slate-200/50 border-solid rounded-2xl px-5 py-4 shadow-sm hover:shadow-lg hover:border-slate-300/50 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-1.5 rounded-lg bg-slate-100/70 group-hover:bg-slate-200/70 transition-colors duration-200">
              <Filter className="h-4 w-4 text-slate-600" />
            </div>
            <span className="text-slate-700 text-base font-medium truncate">
              {selected?.label}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-slate-500 group-hover:text-slate-700 transition-colors" />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute z-50 mt-3 w-full bg-white/95 backdrop-blur-xl border border-slate-200/50 border-solid rounded-2xl shadow-xl overflow-hidden"
            style={{
              maxHeight: "320px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div className="p-4 border-b border-slate-100 border-solid">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setFocusedIndex(-1);
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200/50 border-solid rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all duration-200"
                />
              </div>
            </div>

            <div className="max-h-64 overflow-y-auto py-2">
              {filteredCategories.length === 0 ? (
                <div className="px-4 py-8 text-center text-slate-500 text-sm">
                  No categories found
                </div>
              ) : (
                filteredCategories.map((category, index) => {
                  const Icon = iconMap[category.value] || iconMap.default;
                  const isSelected = selected?.value === category.value;
                  const isFocused = index === focusedIndex;

                  return (
                    <motion.div
                      key={category.value}
                      variants={itemVariants}
                      whileHover={{
                        backgroundColor: "#f1f5f9",
                        x: 4
                      }}
                      onClick={() => handleSelect(category.value)}
                      className={`mx-2 rounded-xl px-4 py-3 cursor-pointer text-slate-700 transition-all duration-200 ${
                        isFocused ? 'bg-slate-100' : ''
                      } ${isSelected ? 'bg-blue-50 text-blue-700' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <div className={`p-1.5 rounded-lg transition-colors duration-200 ${
                            isSelected ? 'bg-blue-100' : 'bg-slate-100'
                          }`}>
                            <Icon className={`h-4 w-4 ${
                              isSelected ? 'text-blue-600' : 'text-slate-500'
                            }`} />
                          </div>
                        )}
                        <span className="flex-1 text-sm font-medium">
                          {category.label}
                        </span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30
                            }}
                          >
                            <Check className="h-4 w-4 text-blue-500" />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CategoryDropdown;
