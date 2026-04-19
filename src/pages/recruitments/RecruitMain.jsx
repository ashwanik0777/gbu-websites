import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, FlaskConical, BriefcaseBusiness, Archive } from "lucide-react";
import RecruitmentBlock from "../../components/recruitments/RecruitmentBlock";
import RecruitmentContent from "../../components/recruitments/RecruitmentContent";
import BannerSection from "../../components/HeroBanner";

// ✅ Utility
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RecruitMain = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [activeArchiveTab, setActiveArchiveTab] = useState("archived2023");

  const currentCategories = [
    { title: "Teaching", type: "teaching", icon: GraduationCap },
    { title: "Non-Teaching", type: "non-teaching", icon: Users },
    { title: "Project / Research", type: "project-research", icon: FlaskConical },
    { title: "Others", type: "others", icon: BriefcaseBusiness },
  ];

  return (
    <motion.section
      className="min-h-screen bg-slate-50 pb-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BannerSection
        title="RECRUITMENTS"
        subtitle="Faculty and Staff Recruitment"
        bgTheme={9}
      />

      <div className="container mx-auto max-w-7xl px-4 py-10 sm:px-6">

        <div className="mb-8 flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab("current")}
            className={cn(
              "rounded-xl px-5 py-2.5 text-sm font-semibold transition",
              activeTab === "current"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            Current Opportunities
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("archived")}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition",
              activeTab === "archived"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <Archive className="h-4 w-4" /> Archived Opportunities
          </button>
        </div>

        {activeTab === "current" ? (
          <motion.div
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentCategories.map((item) => (
              <RecruitmentBlock
                key={item.type}
                title={item.title}
                type={item.type}
                icon={item.icon}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex flex-wrap gap-3">
              {["archived2023", "archived2022", "archived2021"].map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setActiveArchiveTab(year)}
                  className={cn(
                    "rounded-xl px-4 py-2 text-sm font-semibold transition",
                    activeArchiveTab === year
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  )}
                >
                  {year.replace("archived", "")}
                </button>
              ))}
            </div>
            <RecruitmentContent tabId={activeArchiveTab} />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default RecruitMain;
