import React, { useState } from "react";
import ButtonGroup from '../TabsData.jsx';

// ✅ Sample Data
const currentTenders = [
  {
    id: 1,
    title: "Supply of IT Equipment and Software Licenses",
    description:
      "Procurement of computers, servers, and enterprise software licenses for government offices.",
    closingDate: "2025-07-15",
    documentUrl: "/documents/tender-001.pdf",
  },
  {
    id: 2,
    title: "Construction of Municipal Water Treatment Plant",
    description:
      "Design, construction and commissioning of water treatment facility with 50ML/day capacity.",
    closingDate: "2025-07-22",
    documentUrl: "/documents/tender-002.pdf",
  },
  {
    id: 3,
    title: "Digital Infrastructure Upgrade Project",
    description:
      "Upgrade of fiber optic network and installation of 5G infrastructure across the city.",
    closingDate: "2025-08-10",
    documentUrl: "/documents/tender-004.pdf",
  },
];

const archivedTenders = [
  {
    id: 4,
    title: "Maintenance Services for Public Transportation Fleet",
    description:
      "Comprehensive maintenance and repair services for city bus fleet including spare parts.",
    closingDate: "2025-06-30",
    documentUrl: "/documents/tender-003.pdf",
  },
  {
    id: 5,
    title: "Renewable Energy Solar Panel Installation",
    description:
      "Installation of solar panels on government buildings with total capacity of 2MW.",
    closingDate: "2025-07-05",
    documentUrl: "/documents/tender-005.pdf",
  },
];

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
          {currentTenders.map((t, i) => (
            <TenderCard tender={t} index={i} key={t.id} variant="current" />
          ))}
        </div>
      )}

      {activeTab === "archived" && (
        <div className="space-y-5">
          {archivedTenders.map((t, i) => (
            <TenderCard tender={t} index={i} key={t.id} variant="archived" />
          ))}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-orange-400">
            <p className="text-sm text-gray-600 italic">
              These tenders are no longer active and are shown for reference
              only.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TendersTable;
