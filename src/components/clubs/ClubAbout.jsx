import React from 'react';
import { Target, History, Trophy } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

const Card = ({ className = '', children, ...props }) => (
  <div className={`bg-white rounded-xl border p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ className = '', children, ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = '', children, ...props }) => (
  <h3 className={`font-semibold text-lg ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ className = '', children, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const ClubAbout = ({ club }) => {
  return (
    <SearchableWrapper>
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About {club.name}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Objectives */}
        <Card className=" border-gray-300 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Our Vision</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {club.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* History */}
        <Card className=" border-gray-300 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <History className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Our Journey</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm leading-relaxed">
              {club.history}
            </p>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-gray-300 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Achievements</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {club.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Extended Description */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
        <CardContent className="p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Join {club.name}?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {club.description} Join us to be part of a community that values growth, 
              collaboration, and excellence. Whether you're a beginner or an expert, 
              there's a place for you in our diverse and inclusive environment.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    </SearchableWrapper>
  );
};

export default ClubAbout;
