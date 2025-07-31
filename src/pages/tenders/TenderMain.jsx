import TendersTable from '../../components/tenders/TendersTable';
import { motion } from "framer-motion";
import BannerSection from '../../components/HeroBanner.jsx';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper.jsx';
const TenderMain = () => {

  return (
    <SearchableWrapper exclude={['#footer', '.no-search']}>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 font-sans">
        <BannerSection
      title="Tenders / RFPs / RFE / RFQ"
      subtitle="Explore active opportunities and submit your bids before deadlines."
      bgTheme={9}
    />
        <div className="container mx-auto px-6 py-12 max-w-7xl">

          {/* Page Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <Breadcrumb items={breadcrumbItems} /> */}

            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
              Tenders / RFPs / RFE / RFQ
            </h1>

            {/* Introduction */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-indigo-50 to-teal-50 border border-teal-300 rounded-2xl shadow-lg p-8 sm:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to our procurement portal. Here you can find current tender opportunities,
                requests for proposals (RFPs), requests for expressions (RFE), and requests for
                quotations (RFQ). All interested vendors and contractors are encouraged to review
                the available opportunities and submit their proposals before the specified closing
                dates. Please ensure you download and review all tender documents carefully before
                submitting your bid.
              </p>
            </motion.div>
          </motion.div>

          {/* Tenders Table */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <TendersTable />
          </motion.div>

        </div>
      </div>

    </SearchableWrapper>
  );
};

export default TenderMain;
