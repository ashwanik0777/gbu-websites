import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Smooth single-direction slide up + fade in
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

const ContactCard = ({ contact }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur border border-slate-200 border-solid rounded-2xl p-6 group h-full flex flex-col relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Smooth hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-emerald-50/30 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="flex flex-col items-center text-center relative z-10">
        {/* Photo */}
        <motion.div
          className="w-24 h-24 rounded-full overflow-hidden my-5 bg-gradient-to-br from-slate-100 to-slate-50 ring-4 ring-white shadow-sm group-hover:ring-blue-100 transition duration-500"
          variants={itemVariants}
        >
          
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-emerald-500 text-white font-bold text-xl">
            {contact.name
              ? contact.name.split(' ').map((n) => n[0]).join('').toUpperCase()
              : ''}
          </div>

        
        </motion.div>

        {/* Name &*/}
        <motion.div className="my-4" variants={itemVariants}>
          <h3 className="text-lg font-bold text-slate-800 leading-tight mb-3 group-hover:text-blue-700 transition-colors duration-300">
            {contact.name}
          </h3>
          {/* <p className="text-blue-600 text-sm font-medium bg-blue-50 px-3 py-2 rounded-full inline-block group-hover:bg-blue-100 transition-colors duration-300">
            {contact.designation}
          </p> */}
        </motion.div>

        {/* Department */}
        {/* <motion.div className="mb-5" variants={itemVariants}>
          <p className="text-slate-600 text-sm font-medium bg-slate-50 px-3 py-1 rounded-md border hover:bg-slate-600 hover:text-white border-slate-200 border-solid">
            {contact.department}
          </p>
        </motion.div> */}

        {/* Contact Info */}
        <div className="w-full space-y-3 mt-auto">
          {/* Email */}
          {/* <motion.a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            variants={itemVariants}
          >
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-xs text-gray-500 mb-0.5">Email</p>
              <p className="text-sm text-gray-700 truncate">{contact.email}</p>
            </div>
          </motion.a> */}

          {/* Phone */}
          <motion.a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200"
            variants={itemVariants}
          >
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Phone className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-xs text-gray-500 mb-0.5">Phone</p>
              <p className="text-sm text-gray-700">{contact.phone}</p>
            </div>
          </motion.a>

          {/* Location */}
          {contact.location ? (
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
              variants={itemVariants}
            >
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <MapPin className="h-4 w-4 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs text-gray-500 mb-0.5">Office</p>
                <p className="text-sm text-gray-700 truncate">{contact.location}</p>
              </div>
            </motion.div>
          ) : (
            <div className="min-h-[2rem]"></div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
