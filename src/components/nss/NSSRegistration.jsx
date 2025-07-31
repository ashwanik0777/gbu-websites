 import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, UserPlus } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

// Simple toast fallback
const useToast = () => {
  return {
    toast: ({ title, description }) => {
      alert(`${title}\n\n${description}`);
    },
  };
};

const NSSRegistration = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    rollNo: '',
    program: '',
    year: '',
    email: '',
    phone: '',
    motivation: '',
    profilePhoto: null,
    studentId: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openProgram, setOpenProgram] = useState(false);
  const [openYear, setOpenYear] = useState(false);

  const programRef = useRef(null);
  const yearRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Registration Successful!',
        description: 'Your NSS volunteer application has been submitted.',
      });

      setFormData({
        fullName: '',
        rollNo: '',
        program: '',
        year: '',
        email: '',
        phone: '',
        motivation: '',
        profilePhoto: null,
        studentId: null,
      });
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (programRef.current && !programRef.current.contains(event.target)) {
        setOpenProgram(false);
      }
      if (yearRef.current && !yearRef.current.contains(event.target)) {
        setOpenYear(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const benefits = [
    'Certificate of completion after 240 hours of service',
    'Leadership development opportunities',
    'Community service experience',
    'Networking with like-minded individuals',
    'Recognition and awards for outstanding service',
    'Professional development workshops',
  ];

  return (
    <SearchableWrapper>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="max-w-6xl mx-auto p-4 space-y-8"
    >
      {/* Header */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-center px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Join NSS as a Volunteer
        </h2>
        <p className="text-md sm:text-lg text-gray-600">
          Be part of the change you want to see in society
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Form Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
          className="lg:col-span-2 min-w-0"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-xl shadow-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <h3 className="font-semibold text-lg flex items-center space-x-2">
                <UserPlus className="h-6 w-6 text-blue-600" />
                <span>Volunteer Registration Form</span>
              </h3>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Roll */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { id: 'fullName', label: 'Full Name *', placeholder: 'Your Name', type: 'text' },
                  { id: 'rollNo', label: 'Roll No *', placeholder: 'Your Roll Number', type: 'text' },
                ].map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required
                    />
                  </div>
                ))}
              </div>

              {/* Program & Year Dropdown */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Program */}
                <div className="space-y-2 relative" ref={programRef}>
                  <label className="text-sm font-medium text-gray-700">Program *</label>
                  <div
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left cursor-pointer"
                    onClick={() => setOpenProgram(!openProgram)}
                  >
                    {formData.program || 'Select your program'}
                  </div>
                  <AnimatePresence>
                    {openProgram && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute z-10 mt-1 w-full border rounded-md shadow bg-white max-h-40 overflow-auto"
                      >
                        {['B.Tech', 'M.Tech', 'B.A.', 'M.A.', 'B.Com', 'M.Com', 'B.Sc', 'M.Sc'].map((prog) => (
                          <div
                            key={prog}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            onClick={() => {
                              handleInputChange('program', prog);
                              setOpenProgram(false);
                            }}
                          >
                            {prog}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Year */}
                <div className="space-y-2 relative" ref={yearRef}>
                  <label className="text-sm font-medium text-gray-700">Year *</label>
                  <div
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left cursor-pointer"
                    onClick={() => setOpenYear(!openYear)}
                  >
                    {formData.year || 'Select your year'}
                  </div>
                  <AnimatePresence>
                    {openYear && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute z-10 mt-1 w-full border rounded-md shadow bg-white max-h-40 overflow-auto"
                      >
                        {['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Final Year'].map((yr) => (
                          <div
                            key={yr}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            onClick={() => {
                              handleInputChange('year', yr);
                              setOpenYear(false);
                            }}
                          >
                            {yr}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { id: 'email', label: 'Email *', placeholder: 'email@example.com', type: 'email' },
                  { id: 'phone', label: 'Phone *', placeholder: '+91-9876543210', type: 'tel' },
                ].map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label htmlFor={field.id} className="text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      required
                    />
                  </div>
                ))}
              </div>

              {/* Motivation */}
              <div className="space-y-2">
                <label htmlFor="motivation" className="text-sm font-medium text-gray-700">
                  Why do you want to join NSS? *
                </label>
                <textarea
                  id="motivation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  placeholder="Your motivation..."
                  rows={4}
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  required
                />
              </div>

              {/* Uploads */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { id: 'profilePhoto', label: 'Profile Photo *', accept: 'image/*' },
                  { id: 'studentId', label: 'Student ID *', accept: '.pdf,.jpg,.jpeg,.png' },
                ].map((file) => (
                  <div key={file.id} className="space-y-2">
                    <label htmlFor={file.id} className="text-sm font-medium text-gray-700">
                      {file.label}
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <input
                        type="file"
                        id={file.id}
                        accept={file.accept}
                        onChange={(e) => handleFileUpload(file.id, e.target.files[0])}
                        className="hidden"
                        required
                      />
                      <label htmlFor={file.id} className="cursor-pointer text-sm text-gray-600 block">
                        {formData[file.id]?.name || 'Click to upload'}
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          className="space-y-6"
        >
          {/* Benefits */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-xl shadow-md p-4 sm:p-6"
          >
            <h3 className="text-xl text-blue-600 font-semibold mb-3">Why Join NSS?</h3>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="space-y-3"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start space-x-2"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Stats */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-center space-y-4"
          >
            {[
              { value: '500+', label: 'Active Volunteers' },
              { value: '10,000+', label: 'Service Hours' },
              { value: '50+', label: 'Events Organized' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </SearchableWrapper>
  );
};

export default NSSRegistration;
