import React, { useEffect, useMemo, useState } from "react";
import ButtonGroup from '../TabsData.jsx';
import {
  DEFAULT_TENDERS,
  TENDERS_STORAGE_KEY,
  getTenderAutoHideDate,
  splitTendersByStatus,
} from "../../Data/tendersData";

const getInitialTenders = () => {
  try {
    const raw = localStorage.getItem(TENDERS_STORAGE_KEY);
    if (!raw) return DEFAULT_TENDERS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return DEFAULT_TENDERS;
    return parsed;
  } catch {
    return DEFAULT_TENDERS;
  }
};

const formatAutoHideLabel = (closingDate) => {
  const autoHideDate = getTenderAutoHideDate(closingDate);
  if (!autoHideDate) return "N/A";
  return autoHideDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// ✅ Tender Card UI
const TenderCard = ({ tender, index, variant = "current" }) => (
  <div
    className={`rounded-xl border p-6 transition hover:shadow-lg ${
      variant === "archived"
        ? "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200"
        : "bg-gradient-to-br from-white to-teal-50 border-teal-200"
    }`}
  >
    <h3
      className={`text-lg font-bold mb-2 ${
        variant === "archived" ? "text-gray-800" : "text-indigo-800"
      }`}
    >
      {index + 1}. {tender.title}
    </h3>
    <p className="text-sm text-gray-600 mb-3">{tender.description}</p>
    <p className="text-sm mb-2">
      <span className="font-semibold">Closing Date:</span> {tender.closingDate}
    </p>
    <a
      href={tender.documentUrl}
      className={`inline-block text-sm font-semibold underline transition-colors duration-200 ${
        variant === "archived"
          ? "text-orange-600 hover:text-orange-800"
          : "text-teal-600 hover:text-teal-800"
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Document
    </a>
  </div>
);

// ✅ Tenders Table Page
const TendersTable = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [tenders, setTenders] = useState(getInitialTenders);

  useEffect(() => {
    const syncTenders = () => setTenders(getInitialTenders());
    window.addEventListener("storage", syncTenders);
    window.addEventListener("tenders-data-updated", syncTenders);
    return () => {
      window.removeEventListener("storage", syncTenders);
      window.removeEventListener("tenders-data-updated", syncTenders);
    };
  }, []);

  const { current: currentTenders, archived: archivedTenders } = useMemo(
    () => splitTendersByStatus(tenders),
    [tenders],
  );

  const tabButtons = [
    { id: "current", label: "Current Opportunities", tooltip: "View active tenders" },
    { id: "archived", label: "Archived Opportunities", tooltip: "View past tenders" },
  ];

  return (
    <div className="w-full bg-white shadow-xl border border-gray-200 p-8 sm:p-10 rounded-2xl">
      {/* Tabs */}
      <ButtonGroup
        buttons={tabButtons}
        onClick={setActiveTab}
        activeButton={activeTab}
        size="lg"
        fullWidth={false}
        rounded="xl"
        animated={true}
        theme="primary"
        gap={true}
        className="flex justify-center mb-8"
      />

      {/* Tab Content */}
      {activeTab === "current" && (
        <div className="space-y-5">
          <div className="rounded-lg border-l-4 border-teal-400 bg-teal-50 p-4">
            <p className="text-sm text-teal-800">
              Tender closing date ke 1 din baad yeh list se automatically remove ho jata hai.
            </p>
          </div>
          {currentTenders.map((t, i) => (
            <TenderCard tender={t} index={i} key={t.id} variant="current" />
          ))}
          {!currentTenders.length ? (
            <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-5 text-sm text-gray-600">
              Abhi koi active tender available nahi hai.
            </div>
          ) : null}
        </div>
      )}

      {activeTab === "archived" && (
        <div className="space-y-5">
          {archivedTenders.map((t, i) => (
            <TenderCard tender={t} index={i} key={t.id} variant="archived" />
          ))}
          {!archivedTenders.length ? (
            <div className="mt-6 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-5 text-sm text-gray-600">
              Archived tenders abhi available nahi hain.
            </div>
          ) : (
            <div className="mt-6 rounded-lg border-l-4 border-orange-400 bg-gray-50 p-4">
              <p className="text-sm text-gray-600 italic">
                In tenders ka auto-hide cutoff closing date ke 1 din baad hota hai.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Latest cutoff: {formatAutoHideLabel(archivedTenders[0]?.closingDate)}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TendersTable;
