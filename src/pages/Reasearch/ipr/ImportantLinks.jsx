 import React from "react";

 import SearchableWrapper from "../../../components/Searchbar/SearchableWrapper";

const importantLinks = [
  {
    id: 1,
    title: "World Intellectual Property Organization (WIPO)",
    description: "Global forum for intellectual property services, policy, information, and cooperation.",
    link: "https://www.wipo.int",
  },
  {
    id: 2,
    title: "American Patents' Database",
    description: "Search and explore patents granted in the United States, including detailed legal status.",
    link: "https://patents.google.com",
  },
  {
    id: 3,
    title: "Indian Patents' Database",
    description: "Official public search portal for patents filed and granted in India.",
    link: "https://ipindiaservices.gov.in/publicsearch",
  },
  {
    id: 4,
    title: "Intellectual Property, India",
    description: "Government of India’s IP office providing services for patents, trademarks, and designs.",
    link: "https://ipindia.gov.in",
  },
  {
    id: 5,
    title: "European Patent Office",
    description: "Platform to access patents filed and granted across European countries.",
    link: "https://www.epo.org",
  },
];

export default function ImportantLinks() {
  return (
    <SearchableWrapper>
    <section className="py-16 px-30 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Important Links
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {importantLinks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SearchableWrapper>
  );
}
