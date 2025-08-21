import React from 'react';
import { motion } from 'framer-motion';

// import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";
import ButtonGroup from '../TabsData.jsx';

// ✅ Modern Card with subtle lift effect on hover
const Card = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className={`rounded-2xl border shadow-sm transition duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// ✅ Tabs
const Tabs = ({ children, defaultValue, className = '' }) => {
  const [active, setActive] = React.useState(defaultValue);
  const triggers = React.Children.toArray(children).filter(
    (child) => child.type.name === 'TabsList'
  );
  const contents = React.Children.toArray(children).filter(
    (child) => child.type.name === 'TabsContent'
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

const tabButtons = [
  { id: "current", label: "Current Opportunities", tooltip: "View current opportunities" },
  { id: "archived", label: "Archived Opportunities", tooltip: "View archived opportunities" },
];

const TabsList = ({ active, setActive }) => (
  <div className="flex justify-center mb-8">
    <ButtonGroup
      buttons={tabButtons}
      onClick={setActive}
      activeButton={active}
      theme="primary"
      size="lg"
      fullWidth={false}
      rounded="lg"
      gap={true}
      animated={true}
    />
  </div>
);


const TabsTrigger = ({ value, children, active, setActive, className = '' }) => {
  const isActive = active === value;

  return (
    <button
      onClick={() => setActive(value)}
      className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 
        ${isActive
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white'}
        ${className}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, active, children, className = '' }) => {
  if (value !== active) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ✅ Sample data stays same
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

// ✅ Card for each tender
const TenderCard = ({ tender, index, variant = 'current' }) => (
  <Card
    className={`mb-5 ${
      variant === 'archived'
        ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'
        : 'bg-gradient-to-br from-white to-teal-50 border-teal-200'
    }`}
  >
    <CardContent>
      <h3
        className={`text-lg font-bold mb-2 ${
          variant === 'archived' ? 'text-gray-800' : 'text-indigo-800'
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
          variant === 'archived'
            ? 'text-orange-600 hover:text-orange-800'
            : 'text-teal-600 hover:text-teal-800'
        }`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Document
      </a>
    </CardContent>
  </Card>
);

// ✅ Container with stagger effect
const TenderTable = ({ tenders, variant }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
    className="space-y-4"
  >
    {tenders.map((tender, idx) => (
      <motion.div
        key={tender.id}
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <TenderCard tender={tender} index={idx} variant={variant} />
      </motion.div>
    ))}
  </motion.div>
);

// ✅ Final TendersTable
const TendersTable = () => {
  return (
    // <SearchableWrapper>
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
                These tenders are no longer active and are shown for reference only.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    // </SearchableWrapper>
  );
};

export default TendersTable;
