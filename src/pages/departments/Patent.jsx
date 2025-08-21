 import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Award,
  Calendar,
  FileText,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
} from "lucide-react";
import BannerSection from "../../components/HeroBanner";
import StatsCard from "../../components/StatsCard";

const Patents = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <BannerSection
        title="Patents & Innovations"
        subtitle="Showcasing our cutting-edge research and technological advancements"
        bgTheme={1}
      />

      {/*Stats*/}
      {/* <section className="py-16 px-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">45</h3>
            <p className="text-gray-600">Patents Filed</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">28</h3>
            <p className="text-gray-600">Patents Granted</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">17</h3>
            <p className="text-gray-600">Under Review</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">12</h3>
            <p className="text-gray-600">Licensed Patents</p>
          </div>
        </div>
      </section> */}
      <StatsCard
        stats={[
          { icon: Award, number: 45, subtitle: "Patents Filed" },
          { icon: CheckCircle, number: 28, subtitle: "Patents Granted" },
          { icon: Clock, number: 17, subtitle: "Under Review" },
          { icon: TrendingUp, number: 12, subtitle: "Licensed Patents" },
        ]}
      />
      {/* Featured Patents */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Patents
          </h2>

          <div className="space-y-8">
            {/* Patent 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      AI/ML
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Granted
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Deep Learning-Based Medical Image Analysis System for Cancer
                    Detection
                  </h3>
                  <p className="text-gray-600 mb-4">
                    An intelligent medical imaging system that uses advanced
                    deep learning algorithms to detect early-stage cancer in
                    radiological images with 95% accuracy. The system
                    incorporates attention mechanisms and transfer learning for
                    improved diagnosis.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Filed: Jan 2023
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Granted: Sep 2024
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Patent Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Patent No:</span>
                      <span className="font-semibold">IN 202311004587</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold">National Patent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Inventors:</span>
                      <span className="font-semibold">
                        Dr. Rajesh Kumar, Arjun Sharma
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Department:</span>
                      <span className="font-semibold">CSE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-semibold text-green-600">
                        Licensed to MedTech Corp
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patent 2 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      VLSI
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Granted
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ultra-Low Power IoT Sensor Chip with Adaptive Power
                    Management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A revolutionary low-power VLSI design for IoT sensors that
                    dynamically adjusts power consumption based on environmental
                    conditions and data transmission requirements. Achieves 90%
                    power reduction compared to conventional designs.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Filed: Mar 2022
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Granted: Dec 2023
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Patent Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Patent No:</span>
                      <span className="font-semibold">IN 202211013428</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold">National Patent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Inventors:</span>
                      <span className="font-semibold">
                        Dr. Meera Krishnan, Amit Kumar
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Department:</span>
                      <span className="font-semibold">ECE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-semibold text-green-600">
                        Licensed to IoT Solutions Inc
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Patent 3 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-100 p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      Blockchain
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Under Review
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Quantum-Resistant Blockchain Protocol for Secure Voting
                    Systems
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A novel blockchain-based voting system that incorporates
                    post-quantum cryptographic algorithms to ensure long-term
                    security against quantum computing attacks. Features
                    verifiable anonymity and transparent audit mechanisms.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Filed: Aug 2024
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Status: Under Examination
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Patent Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Application No:</span>
                      <span className="font-semibold">IN 202411035642</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold">National + PCT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Inventors:</span>
                      <span className="font-semibold">
                        Dr. Vikram Singh, Rahul Mehta
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Department:</span>
                      <span className="font-semibold">IT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Grant:</span>
                      <span className="font-semibold text-blue-600">
                        Q2 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Patent Portfolio by Technology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Artificial Intelligence
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Granted:</span>
                  <span className="font-semibold text-green-600">8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Under Review:</span>
                  <span className="font-semibold text-orange-600">4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Licensed:</span>
                  <span className="font-semibold text-purple-600">5</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                VLSI & Electronics
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Granted:</span>
                  <span className="font-semibold text-green-600">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Under Review:</span>
                  <span className="font-semibold text-orange-600">6</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Licensed:</span>
                  <span className="font-semibold text-purple-600">4</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cybersecurity
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Granted:</span>
                  <span className="font-semibold text-green-600">5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Under Review:</span>
                  <span className="font-semibold text-orange-600">3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Licensed:</span>
                  <span className="font-semibold text-purple-600">2</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Communication Systems
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Granted:</span>
                  <span className="font-semibold text-green-600">3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Under Review:</span>
                  <span className="font-semibold text-orange-600">4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Licensed:</span>
                  <span className="font-semibold text-purple-600">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Patent Filing Timeline
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Recent Patents (2024)
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quantum-Resistant Voting System
                    </h4>
                    <p className="text-sm text-gray-600">
                      Filed: August 2024 | Status: Under Review
                    </p>
                    <p className="text-xs text-gray-500">
                      Inventors: Dr. Vikram Singh, Rahul Mehta
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Smart Traffic Management System
                    </h4>
                    <p className="text-sm text-gray-600">
                      Filed: June 2024 | Status: Granted
                    </p>
                    <p className="text-xs text-gray-500">
                      Inventors: Dr. Anita Gupta, Sneha Gupta
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      5G Antenna Array Design
                    </h4>
                    <p className="text-sm text-gray-600">
                      Filed: April 2024 | Status: Under Review
                    </p>
                    <p className="text-xs text-gray-500">
                      Inventors: Dr. Suresh Reddy, Priya Krishnan
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Edge Computing Framework
                    </h4>
                    <p className="text-sm text-gray-600">
                      Filed: February 2024 | Status: Granted
                    </p>
                    <p className="text-xs text-gray-500">
                      Inventors: Dr. Priya Sharma, Multiple Co-inventors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Patent Success Metrics
              </h3>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">
                      Grant Success Rate
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      82%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">
                      Licensing Rate
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      43%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "43%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">
                      International Patents
                    </span>
                    <span className="text-2xl font-bold text-purple-600">
                      32%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: "32%" }}
                    ></div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Revenue from Patents
                  </h4>
                  <p className="text-2xl font-bold text-green-600">₹2.5 Cr</p>
                  <p className="text-sm text-gray-600">
                    Cumulative licensing revenue (2020-2024)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technology Transfer & Licensing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">
                  MedTech Corporation
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Licensed AI-based medical imaging technology for cancer
                detection. Technology is now being used in 25+ hospitals across
                India.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>
                  <strong>Patent:</strong> Medical Image Analysis System
                </p>
                <p>
                  <strong>License Value:</strong> ₹50 Lakhs + Royalty
                </p>
                <p>
                  <strong>Year:</strong> 2024
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">
                  IoT Solutions Inc
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Licensed ultra-low power IoT sensor chip design. Technology
                reduces power consumption by 90% in smart city applications.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>
                  <strong>Patent:</strong> Low Power IoT Sensor Chip
                </p>
                <p>
                  <strong>License Value:</strong> ₹75 Lakhs + Royalty
                </p>
                <p>
                  <strong>Year:</strong> 2024
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">
                  SecureNet Technologies
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Licensed blockchain-based security protocols for financial
                institutions. Technology ensures quantum-resistant transaction
                security.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>
                  <strong>Patent:</strong> Quantum-Resistant Security Protocol
                </p>
                <p>
                  <strong>License Value:</strong> ₹40 Lakhs + Royalty
                </p>
                <p>
                  <strong>Year:</strong> 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Patent Filing Process at TechVision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Invention Disclosure
              </h3>
              <p className="text-sm text-gray-600">
                Researcher submits detailed invention disclosure form to IP
                office
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Prior Art Search
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive search to ensure novelty and patentability of
                invention
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Patent Application
              </h3>
              <p className="text-sm text-gray-600">
                Professional patent attorney prepares and files application with
                patent office
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Commercialization
              </h3>
              <p className="text-sm text-gray-600">
                IP office facilitates licensing and technology transfer to
                industry
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Support Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  For Faculty & Students
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Free patent filing assistance</li>
                  <li>• IP awareness workshops</li>
                  <li>• Patent writing training</li>
                  <li>• Legal consultation</li>
                  <li>• Revenue sharing (60% to inventor)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  For Industry Partners
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Technology scouting services</li>
                  <li>• Licensing negotiations</li>
                  <li>• Joint patent development</li>
                  <li>• IP portfolio management</li>
                  <li>• Collaborative R&D agreements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 text-gray-900 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Intellectual Property Office
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Interested in our patented technologies or need assistance with
            patent filing? Contact our IP office for comprehensive support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="shadow-2xl p-5 rounded-2xl border-gray-300 border-[1px] border-solid">
              <FileText className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patent Filing</h3>
              <p>patents@techvision.edu</p>
              <p>+1 (555) 123-4583</p>
            </div>
            <div className="shadow-2xl p-5 rounded-2xl border-gray-300 border-[1px] border-solid">
              <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Technology Licensing
              </h3>
              <p >licensing@techvision.edu</p>
              <p >+1 (555) 123-4584</p>
            </div>
            <div className="shadow-2xl p-5 rounded-2xl border-gray-300 border-[1px] border-solid">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">IP Consultation</h3>
              <p >ip.office@techvision.edu</p>
              <p >+1 (555) 123-4585</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patents;
