
import React, { useState } from 'react';
// Minimal custom UI components styled with Tailwind CSS
 
export const Card = ({ className = "", children, ...props }) => (
  <div className={`bg-white rounded-xl border border-gray-200 border-solid shadow-sm${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`px-6 pt-6 pb-2 `} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className = "", children, ...props }) => (
  <h2 className={`font-bold ${className}`} {...props}>
    {children}
  </h2>
);

export const CardContent = ({ className = "", children, ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

export const Badge = ({ className = "", children, ...props }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${className}`}
    {...props}
  >
    {children}
  </span>
);

export const Button = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 focus:ring-blue-500",
    ghost:
      "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-blue-500 shadow-none border-none",
  };
  const sizes = {
    sm: "text-xs px-2 py-1 h-8",
    md: "text-sm px-4 py-2 h-10",
    lg: "text-base px-6 py-3 h-12",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { BookOpen, Clock, Users, Filter, Upload, FileText, Download, Eye } from 'lucide-react';

export const TeachingTab = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      code: "CS301",
      name: "Machine Learning Fundamentals",
      semester: "Fall 2024",
      level: "UG",
      batch: "2022-2026",
      credits: 4,
      students: 45,
      description: "Introduction to machine learning algorithms and applications",
      slides: [
        { id: 1, title: "Introduction to ML", filename: "ML_Intro.pdf", uploadDate: "2024-01-15" },
        { id: 2, title: "Supervised Learning", filename: "Supervised_Learning.pdf", uploadDate: "2024-01-22" },
        { id: 3, title: "Neural Networks", filename: "Neural_Networks.pdf", uploadDate: "2024-02-05" }
      ]
    },
    {
      code: "CS501",
      name: "Advanced Data Mining",
      semester: "Spring 2024",
      level: "PG",
      batch: "2023-2025",
      credits: 3,
      students: 28,
      description: "Deep dive into data mining techniques and big data analytics",
      slides: [
        { id: 4, title: "Data Mining Overview", filename: "DataMining_Overview.pdf", uploadDate: "2024-01-10" },
        { id: 5, title: "Classification Algorithms", filename: "Classification.pdf", uploadDate: "2024-01-18" }
      ]
    },
    {
      code: "CS401",
      name: "Artificial Intelligence",
      semester: "Fall 2024",
      level: "UG",
      batch: "2021-2025",
      credits: 4,
      students: 52,
      description: "Comprehensive study of AI algorithms and intelligent systems",
      slides: [
        { id: 6, title: "AI Fundamentals", filename: "AI_Fundamentals.pdf", uploadDate: "2024-01-12" },
        { id: 7, title: "Search Algorithms", filename: "Search_Algorithms.pdf", uploadDate: "2024-01-20" },
        { id: 8, title: "Knowledge Representation", filename: "Knowledge_Rep.pdf", uploadDate: "2024-01-28" }
      ]
    },
    {
      code: "CS601",
      name: "Research Methodology",
      semester: "Spring 2024",
      level: "PhD",
      batch: "2023-2026",
      credits: 2,
      students: 12,
      description: "Research methods and academic writing for doctoral students",
      slides: [
        { id: 9, title: "Research Design", filename: "Research_Design.pdf", uploadDate: "2024-01-08" }
      ]
    },
    {
      code: "CS201",
      name: "Data Structures & Algorithms",
      semester: "Fall 2023",
      level: "UG",
      batch: "2023-2027",
      credits: 4,
      students: 68,
      description: "Fundamental data structures and algorithmic problem solving",
      slides: [
        { id: 10, title: "Arrays and Linked Lists", filename: "Arrays_LinkedLists.pdf", uploadDate: "2023-08-15" },
        { id: 11, title: "Trees and Graphs", filename: "Trees_Graphs.pdf", uploadDate: "2023-09-10" }
      ]
    }
  ];

  const filteredCourses = selectedLevel === 'all' 
    ? courses 
    : courses.filter(course => course.level === selectedLevel);

  const getLevelColor = (level) => {
    switch (level) {
      case 'UG': return 'bg-green-100 text-green-800';
      case 'PG': return 'bg-blue-100 text-blue-800';
      case 'PhD': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const teachingPhilosophy = `Dr. Kumar believes in creating an interactive and engaging learning environment where students are encouraged to think critically and apply theoretical concepts to real-world problems. His teaching methodology emphasizes hands-on learning, collaborative projects, and industry-relevant case studies.`;

  return (
    <div className="space-y-6 bg-gray-50">
        {/* Teaching Statistics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
         
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <BookOpen  className="w-6 h-6 mr-2 text-blue-600" />
             Teaching Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{courses.length}</div>
              <div className="text-sm text-blue-700">Total Courses</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {courses.reduce((sum, course) => sum + course.students, 0)}
              </div>
              <div className="text-sm text-green-700">Total Students</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">
                {courses.reduce((sum, course) => sum + course.credits, 0)}
              </div>
              <div className="text-sm text-purple-700">Total Credits</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">
                {courses.reduce((sum, course) => sum + course.slides.length, 0)}
              </div>
              <div className="text-sm text-orange-700">Lecture Slides</div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Teaching Philosophy */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
            Teaching Philosophy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{teachingPhilosophy}</p>
        </CardContent>
      </Card>

      {/* Courses Section */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="text-2xl text-gray-900">Courses Taught</CardTitle>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <div className="flex gap-2">
                {['all', 'UG', 'PG', 'PhD'].map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLevel(level)}
                    className="text-xs"
                  >
                    {level === 'all' ? 'All Levels' : level}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {filteredCourses.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-all duration-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">
                        {course.code}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.semester}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students} students
                      </div>
                      <div>
                        <span className="font-medium">Credits:</span> {course.credits}
                      </div>
                      <div>
                        <span className="font-medium">Batch:</span> {course.batch}
                      </div>
                    </div>

                    {/* Lecture Slides Section */}
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-md font-semibold text-gray-800 flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          Lecture Slides ({course.slides.length})
                        </h4>
                        <Button size="sm" variant="outline" className="text-xs">
                          <Upload className="w-3 h-3 mr-1" />
                          Upload New
                        </Button>
                      </div>
                      
                      <div className="grid gap-2">
                        {course.slides.map((slide) => (
                          <div key={slide.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 border-solid hover:bg-gray-100 transition-colors">
                            <div className="flex items-center gap-3">
                              <FileText className="w-4 h-4 text-blue-600" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{slide.title}</p>
                                <p className="text-xs text-gray-600">
                                  {slide.filename} • Uploaded on {new Date(slide.uploadDate).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <Eye className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <Download className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    
    </div>
  );
};
