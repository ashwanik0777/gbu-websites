import React from "react";

// ✅ Card Component
const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// ✅ Tabs Wrapper
const Tabs = ({ children, defaultValue, className = "" }) => {
  const [active, setActive] = React.useState(defaultValue);

  const triggers = React.Children.toArray(children).filter(
    (child) => child.type.name === "TabsList"
  );
  const contents = React.Children.toArray(children).filter(
    (child) => child.type.name === "TabsContent"
  );

  return (
    <div className={className}>
      {React.cloneElement(triggers[0], { active, setActive })}
      {contents.map((content, idx) =>
        React.cloneElement(content, { active, key: idx })
      )}
    </div>
  );
};

// ✅ Tab Buttons
const TabsList = ({ active, setActive }) => {
  const tabs = [
    { id: "current", label: "Current Opportunities" },
    { id: "archived", label: "Archived Opportunities" },
  ];

  return (
    <div className="flex justify-center mb-8 space-x-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className={`px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-semibold rounded-full transition-all duration-300
            ${
              active === tab.id
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// ✅ Tab Content
const TabsContent = ({ value, active, children, className = "" }) => {
  return value === active ? (
    <div
      className={`transition-all duration-500 ease-in-out transform opacity-100 translate-y-0 ${className}`}
    >
      {children}
    </div>
  ) : null;
};

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

// ✅ Tender Card
const TenderCard = ({ tender, index, variant = "current" }) => (
  <Card
    className={`mb-5 ${
      variant === "archived"
        ? "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200"
        : "bg-gradient-to-br from-white to-teal-50 border-teal-200"
    }`}
  >
    <CardContent>
      <h3
        className={`text-lg font-bold mb-2 ${
          variant === "archived" ? "text-gray-800" : "text-indigo-800"
        }`}
      >
        {index + 1}. {tender.title}
      </h3>
      <p className="text-sm text-gray-600 mb-3">{tender.description}</p>
      <p className="text-sm mb-2">
        <span className="font-semibold">Closing Date:</span>{" "}
        {tender.closingDate}
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
    </CardContent>
  </Card>
);

// ✅ Table Layout
const TenderTable = ({ tenders, variant }) => (
  <div className="space-y-4 transition-all duration-500">
    {tenders.map((t, i) => (
      <TenderCard tender={t} index={i} key={t.id} variant={variant} />
    ))}
  </div>
);

// ✅ Final Component
const TendersTable = () => {
  return (
    <div className="w-full bg-white shadow-xl border border-gray-200 p-8 sm:p-10 rounded-2xl">
      <Tabs defaultValue="current" className="w-full ">
        <TabsList />

        <TabsContent value="current">
          <TenderTable tenders={currentTenders} variant="current" />
        </TabsContent>

        <TabsContent value="archived">
          <TenderTable tenders={archivedTenders} variant="archived" />
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-orange-400">
            <p className="text-sm text-gray-600 italic">
              These tenders are no longer active and are shown for reference
              only.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TendersTable;
