import React from 'react';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Settings, 
  Beaker, 
  Users, 
  FileText, 
  Award, 
  Badge, 
  Mic,
  Trophy,
  Heart
} from 'lucide-react';

// Simple `cn` helper if you're not using a library
const cn = (...classes) => classes.filter(Boolean).join(' ');

const tabs = [
  { id: 'overview', label: 'Overview', icon: User },
  { id: 'qualifications', label: 'Qualifications', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Badge },
  { id: 'teaching', label: 'Teaching', icon: BookOpen },
  { id: 'administration', label: 'Administration', icon: Settings },
  { id: 'research-projects', label: 'Research Projects', icon: Beaker },
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'talks', label: 'Invited Talks', icon: Mic },
  { id: 'awards', label: 'Awards', icon: Trophy },
  { id: 'other', label: 'Other', icon: Heart },
  
];

// ✅ Proper functional component with props
const FacultyTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="sticky w-5/6 mx-auto top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200 border-solid mb-8">
      <div className="overflow-x-auto">
        <div className="flex space-x-1 min-w-max p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap",
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-102"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FacultyTabs;
