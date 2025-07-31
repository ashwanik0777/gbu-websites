import React, { useState } from "react";
import BannerSection from "../../components/HeroBanner.jsx";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";
import ButtonGroup from "../../components/TabsData.jsx";

const Chancellor = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Education', 'Social_Contribution', 'Vision'];

  const tabContent = {
    Overview: {
      title: "Experience",

      content:
        "Over 25 years of political, social, and administrative experience, serving as a five-time Member of Parliament and currently the Chief Minister of Uttar Pradesh, India’s most populous state. Known for impactful governance, law and order improvements, and large-scale development initiatives."

    },
    Education: {
      title: "Educational Background",
      content: (
        <div className="space-y-4">
          <div>

            <h4 className="font-semibold text-gray-800">
              Bachelor’s Degree in Mathematics
            </h4>
            <p className="text-sm text-gray-600">
              Hemwati Nandan Bahuguna Garhwal University (now HNB Garhwal University), Uttarakhand, India
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">
              Religious & Monastic Education
            </h4>
            <p className="text-sm text-gray-600">
              Extensive education in Sanskrit, Hindu philosophy, and scriptures under the Gorakhnath Math tradition.
            </p>
            <p className="text-sm text-gray-600">Ordained as a Nath sect monk at age 22; later became Mahant (head priest) of the Gorakhnath Math</p>
          </div>
        </div>
      )
    },
    Social_Contribution: {
      title: "Social Contributions & Public service",
      content: (
        <div className="space-y-6">
          <div>

            <h4 className="font-semibold text-gray-800 mb-2">
              Religious Leadership & Social Welfare
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              As the Mahant (head priest) of the Gorakhnath Math, Yogi Adityanath has played a significant role in promoting education, healthcare, and social welfare in eastern Uttar Pradesh. Under his leadership, the Math runs schools, hospitals, and charitable initiatives benefiting thousands.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Law & Order & Development
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Widely recognized for strong action against organized crime, encroachment, and corruption in Uttar Pradesh. Pioneered policies improving law and order, attracting investments, and creating jobs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Infrastructure Modernization
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Initiated large-scale expressways (Purvanchal, Bundelkhand, and Ganga Expressways), new airports (like Jewar International Airport), metro projects, and urban renewal missions, transforming connectivity and economic potential.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Cultural & Religious Preservation
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Promoted the revival and global recognition of cultural and spiritual heritage sites, including Ayodhya and Kashi Vishwanath Dham Corridor, strengthening tourism and local economies.
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg mt-4">
            <p className="text-sm">
              <strong>Publications & Speeches</strong>
            </p>
            <p className="text-sm">
              Numerous speeches in the Indian Parliament as a five-time MP (1998–2017)
            </p>
            <p className="text-sm">
              Extensive writings, interviews, and published statements on governance, cultural heritage, and public welfare
            </p>
          </div>
        </div>
      )
    },
    Vision: {

      title: "Leadership Vision",
      content:
        "Committed to building Uttar Pradesh as a model state for good governance, robust law and order, and inclusive development. Focused on large-scale infrastructure, industrial growth, youth empowerment, and preserving India’s cultural and spiritual heritage."

    }
  };

  const tabButtons = tabs.map(tab => ({
    id: tab,
    label: tab
  }));

  return (
    <SearchableWrapper>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <BannerSection
          title="Chancellor's Message"
          subtitle="Leadership Vision for Academic Excellence"
          bgTheme={3}
        />


        {/* Main Content */}
        <div className="max-w-6xl mx-auto p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Chancellor Card */}
            <div className="lg:w-1/3">
              <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
                <div className="bg-gray-300 h-80 rounded-lg mb-4 overflow-hidden max-w-xs mx-auto">
  <img
    src="/assets/Yogiji.jpg"
    alt="Yogi Adityanath"
    className="w-full h-full object-cover object-top"
  />
</div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Shri Yogi Adityanath
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Hon'ble Chancellor
                  </p>
                  <p className="text-xs text-gray-500">
                    Chief Minister, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3">
              {/* Quote Icon */}
              <div className="text-6xl text-orange-500 font-serif mb-4">"</div>

              {/* Quote Text */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg text-justify">
                  Education is the most powerful weapon which can change the
                  world and transform society. At Gautam Buddha University, we are
                  committed to providing world-class education that nurtures both
                  intellectual growth and moral values.
                </p>

                <p className="text-lg text-justify">
                  Our vision extends beyond traditional education. We aim to
                  create an ecosystem where innovation thrives, research
                  flourishes, and students emerge as global leaders equipped with
                  knowledge, skills, and ethical foundations.
                </p>

                <p className="text-lg text-justify">
                  The university stands as a beacon of hope and progress,
                  fostering an environment where diverse minds collaborate to
                  address contemporary challenges and build a sustainable future
                  for our nation and the world.
                </p>
              </div>
              <br />
              <div className="text-6xl text-orange-500 font-serif mb-4 text-right">"</div>


              {/* Signature */}
              <div className="mt-8 text-right">
                <p className="text-xl font-semibold text-orange-600">
                  Shri Yogi Adityanath
                </p>

              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Know the Chancellor</h2>

            {/* Tabs */}
            <ButtonGroup
              buttons={tabButtons}
              onClick={setActiveTab}
              activeButton={activeTab}
              size="lg"
              fullWidth={true}
              rounded="2xl"
              animated={true}
              className="sm:flex-nowrap mb-8"
            />

            {/* ✅ Content Panel */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {tabContent[activeTab].title}
                  </h3>
                  <div className="text-gray-700 leading-relaxed">
                    {typeof tabContent[activeTab].content === "string" ? (
                      <p>{tabContent[activeTab].content}</p>
                    ) : (
                      tabContent[activeTab].content
                    )}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  {activeTab === "Overview" && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Key Achievements</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-blue-800">25+ Years Experience</p>
                          <p className="text-xs text-gray-600">Political & Administrative Leadership</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-green-800">Chief Minister of Uttar Pradesh since 2017</p>
                          <p className="text-xs text-gray-600">Successfully re-elected in 2022, becoming the first CM in decades to return to power with a majority in UP</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-purple-800">Infrastructure Development</p>
                          <p className="text-xs text-gray-600">Initiated major infrastructure projects like expressways, airports (including the upcoming Jewar International Airport), and urban development plans</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-red-800">Law & Order & Governance Reforms</p>
                          <p className="text-xs text-gray-600"> Strengthened law and order with visible action against organized crime and encroachments
                          </p>
                        </div>

                      </div>
                    </>
                  )}

                  {activeTab === "Education" && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Honors</h3>
                      <div className="space-y-3">
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-yellow-800">Completed B.Sc. with focus on Mathematics</p>

                        </div>
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-indigo-800">Took monastic vows at age 22 under Mahant Avaidyanath</p>

                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-red-800">Succeeded as head priest (Mahant) of the Gorakhnath Math after his guru’s passing
                          </p>

                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "Social_Contribution" && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Impact</h3>
                      <div className="space-y-3">
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-cyan-800">Influential figure in shaping the political discourse of Uttar Pradesh and North India
                          </p>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-teal-800">Recognized for decisive governance and large-scale administrative reforms

                          </p>

                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-4">Grants & Projects</h3>
                      <div className="space-y-3">
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-cyan-800"> Oversaw multi-crore infrastructure, social welfare, and development projects across Uttar Pradesh
                          </p>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-teal-800">Successfully secured national and global investor commitments for state development
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "Vision" && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Leadership Focus</h3>
                      <div className="space-y-3">
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-orange-800">Global Recognition</p>
                          <p className="text-xs text-gray-600">Positioning Uttar Pradesh as a leading destination for investment and development, with flagship global investor summits and major connectivity projects putting the state on the global economic map.</p>
                        </div>
                        <div className="bg-pink-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-pink-800">Innovation Hub</p>
                          <p className="text-xs text-gray-600">Promoting entrepreneurship, skill development, and start-ups through initiatives like the Uttar Pradesh Start-up Policy, IT parks, and MSME growth, creating new opportunities for youth and businesses.
                          </p>
                        </div>
                        <div className="bg-violet-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-violet-800">Sustainable Future</p>
                          <p className="text-xs text-gray-600">Emphasis on balanced development with environmental sustainability, clean energy, improved urban infrastructure, rural upliftment, and welfare schemes that ensure equity and inclusivity for all sections of society.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SearchableWrapper >
  );
};

export default Chancellor;
