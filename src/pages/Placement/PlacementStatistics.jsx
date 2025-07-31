import {
  ArrowLeft,
  Download,
  TrendingUp,
  Users,
  Award,
  BarChart,
  PieChart,
} from "lucide-react";

import { Link } from "react-router-dom";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl overflow-hidden ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none";
  const variants = {
    default: "bg-red-600 text-white hover:bg-red-700",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };
  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const PlacementStatistics = () => {
  return (
    <SearchableWrapper>
    <div className="min-h-screen pt-3 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Placement Statistics
            </h2>
            <p className="text-lg text-center text-gray-600">
              Our comprehensive placement data showcases the success of our
              students and the trust of our industry partners
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>
          {/* Key Metrics */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-20 ">
            <Card className="bg-white pt-5 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-2">₹45.00 LPA</h3>
                <p className="text-gray-900">Highest Package Offered</p>
              </CardContent>
            </Card>

            <Card className="bg-white pt-5 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">₹8.50 LPA</h3>
                <p className="text-gray-900">Average Package</p>
              </CardContent>
            </Card>

            <Card className="bg-white pt-5 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-purple-600 mb-2">92%</h3>
                <p className="text-gray-900">Overall Placement Rate</p>
              </CardContent>
            </Card>

            <Card className="bg-white pt-5 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">250+</h3>
                <p className="text-gray-900">Companies Visited</p>
              </CardContent>
            </Card>
          </div> */}

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Year-wise Growth */}
            <Card className="bg-white pt-7 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3 mt-2 text-green-800" />
                  Year-wise Placement Growth
                </h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">2020</span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="font-bold text-green-800">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">2021</span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                          style={{ width: "82%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="font-bold text-green-800">82%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">2022</span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="font-bold text-green-800">88%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">2023</span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="font-bold text-green-800">90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">2024</span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                    <span className="font-bold text-green-800">92%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sector-wise Distribution */}
            <Card className="bg-white pt-6 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <PieChart className="h-6 w-6 mr-3 mt-2 text-blue-700" />
                  Sector-wise Placement Distribution
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">IT & Software</span>
                    <span className="font-bold text-blue-600">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">Core Engineering</span>
                    <span className="font-bold text-green-600">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">Consulting & Finance</span>
                    <span className="font-bold text-purple-600">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full"
                      style={{ width: "20%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-900">Government & Research</span>
                    <span className="font-bold text-orange-600">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Department-wise Statistics */}
          <Card className="bg-white rounded-2xl pt-5 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Department-wise Placement Statistics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                <div className="text-center p-4 hover:scale-105 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Computer Science
                  </h4>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    95%
                  </div>
                  <p className="text-sm text-gray-900">Placement Rate</p>
                </div>
                <div className="text-center hover:scale-105 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Electronics & Comm.
                  </h4>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    88%
                  </div>
                  <p className="text-sm text-gray-900">Placement Rate</p>
                </div>
                <div className="text-center hover:scale-105 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Mechanical
                  </h4>
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    82%
                  </div>
                  <p className="text-sm text-gray-900">Placement Rate</p>
                </div>
                <div className="text-center hover:scale-105 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Management
                  </h4>
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    90%
                  </div>
                  <p className="text-sm text-gray-900">Placement Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Package Distribution */}
          <Card className="bg-white rounded-2xl pt-6 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Package Distribution Analysis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="pt-2 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="text-center p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      ₹10L+ Packages
                    </h4>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      25%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="transition-transform pt-2 duration-300 hover:scale-105 shadow-lg hover:shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="text-center p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      ₹5-10L Packages
                    </h4>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      45%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="transition-transform pt-2 duration-300 hover:scale-105 shadow-lg hover:shadow-2xl bg-gradient-to-br from-orange-50 to-orange-100">
                  <CardContent className="text-center p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      ₹3-5L Packages
                    </h4>
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      30%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white rounded-2xl pt-5 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  UG vs PG Placement Stats
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-900">Undergraduate</span>
                      <span className="font-bold text-blue-800">89%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-900">Postgraduate</span>
                      <span className="font-bold text-green-800">96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white pt-5 rounded-2xl hover:shadow-2xl backdrop-blur-sm hover:scale-105 border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Domestic vs International Offers
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-900">Domestic Placements</span>
                      <span className="font-bold text-purple-800">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-900">
                        International Offers
                      </span>
                      <span className="font-bold text-orange-800">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download Report */}
          <div className=" flex justify-center items-center text-center">
            <Button className="bg-gradient-to-r flex items-center  from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <Download className="h-5 w-5 mr-3" />
              Download Full Placement Report (2024)
            </Button>
          </div>
        </div>
      </section>
    </div>
    </SearchableWrapper>
  );
};

export default PlacementStatistics;
