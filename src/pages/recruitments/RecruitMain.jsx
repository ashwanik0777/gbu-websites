import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, FlaskConical, BriefcaseBusiness, Archive } from "lucide-react";
import RecruitmentBlock from "../../components/recruitments/RecruitmentBlock";
import RecruitmentContent from "../../components/recruitments/RecruitmentContent";
import BannerSection from "../../components/HeroBanner";
import {
  getNoDataText,
  getRecruitmentDashboardData,
} from "../../services/announcementsService";

// ✅ Utility
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RecruitMain = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [activeArchiveTab, setActiveArchiveTab] = useState("");
  const [recruitmentData, setRecruitmentData] = useState({ categories: [], archived: [] });
  const [isLoading, setIsLoading] = useState(false);

  const iconMap = {
    GraduationCap,
    Users,
    FlaskConical,
    BriefcaseBusiness,
  };

  useEffect(() => {
    let isMounted = true;

    const loadRecruitments = async () => {
      setIsLoading(true);
      try {
        const payload = await getRecruitmentDashboardData();
        if (!isMounted) return;
        setRecruitmentData(payload);
        const firstArchived = payload.archived?.[0]?.id || "";
        setActiveArchiveTab(firstArchived);
      } catch {
        if (!isMounted) return;
        setRecruitmentData({ categories: [], archived: [] });
        setActiveArchiveTab("");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadRecruitments();

    return () => {
      isMounted = false;
    };
  }, []);

  const currentCategories = useMemo(
    () =>
      (recruitmentData.categories || []).map((item) => ({
        ...item,
        iconComponent: iconMap[item.icon] || BriefcaseBusiness,
      })),
    [recruitmentData.categories],
  );

  const archivedEntries = recruitmentData.archived || [];
  const activeArchivedData =
    archivedEntries.find((item) => item.id === activeArchiveTab) || archivedEntries[0] || null;

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

        {isLoading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600">
            Loading recruitments...
          </div>
        ) : activeTab === "current" ? (
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
                icon={item.iconComponent}
                tabs={item.tabs || []}
              />
            ))}
            {currentCategories.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 lg:col-span-2">
                {getNoDataText("recruitments")}
              </div>
            ) : null}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex flex-wrap gap-3">
              {archivedEntries.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setActiveArchiveTab(entry.id)}
                  className={cn(
                    "rounded-xl px-4 py-2 text-sm font-semibold transition",
                    activeArchiveTab === entry.id
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  )}
                >
                  {entry.year || entry.id.replace("archived", "")}
                </button>
              ))}
              {archivedEntries.length === 0 ? (
                <p className="text-sm text-slate-500">No archived recruitment records available.</p>
              ) : null}
            </div>
            <RecruitmentContent tabId={activeArchiveTab} data={activeArchivedData} />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default RecruitMain;
