import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Clock, BadgeCheck, Download } from "lucide-react";

// ✅ Reusable Card Components
const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-2xl shadow-md border border-gray-200 border-solid transition-all duration-300${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg leading-tight mb-1 ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 text-sm mb-1 ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 pb-6 pt-2 ${className}`}>{children}</div>
);

// ✅ Main Component - Now Fully Props-based
const CoursesOffered = ({
  title = "Courses Offered",
  description = "The Centre for Rapid and Alternative Energy Mobility (RAEM) offers intensive Certificate, Diploma, and Degree programs for professionals in RAMS, PHM, and Maintenance Engineering.",
  courses = []
}) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
            <div className="w-20 sm:w-24 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {courses.map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0 shadow-lg"
              >
                {/* Background image */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${course.bgImage})` }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-50`}
                  />
                  <div className="absolute bottom-4 left-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-col space-y-2 text-sm bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BadgeCheck className="h-4 w-4 text-muted-foreground" />
                      <span>{course.eligibility}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="font-semibold">{course.fee}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Key Topics
                    </h4>
                    <div className="grid grid-cols-1 gap-1 text-sm text-muted-foreground">
                      {course.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-50 px-2 py-1 rounded"
                        >
                          • {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {course.syllabusLinks && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {course.syllabusLinks.map((syllabus, idx) => (
                        <a
                          key={idx}
                          href={syllabus.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 w-full md:w-auto transform hover:scale-105 hover:shadow-md text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Download {syllabus.label} Syllabus
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;
