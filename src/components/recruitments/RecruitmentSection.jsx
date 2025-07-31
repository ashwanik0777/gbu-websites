import React from 'react';
import { motion } from 'framer-motion';
import RecruitmentTable from './RecruitmentTable';

const RecruitmentSection = ({ sectionNumber, title, referenceNumber, date }) => {
  return (
    <motion.div
      className="
        bg-card 
        rounded-2xl 
        p-6 
        shadow-xl 
        hover:shadow-2xl 
        transition-shadow duration-500 
        backdrop-blur-sm 
        bg-white/80
      "
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 leading-tight text-foreground">
          {sectionNumber} {title}
        </h3>
        <div className="bg-muted/30 rounded-lg px-4 py-2 inline-block shadow-inner">
          <p className="text-muted-foreground text-red text-sm font-medium">
            {referenceNumber} | Dt: {date}
          </p>
        </div>
      </div>
      <RecruitmentTable />
    </motion.div>
  );
};

export default RecruitmentSection;
