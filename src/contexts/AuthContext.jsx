import React, { createContext, useContext, useState } from 'react';

// Dummy alumni data for authentication
const dummyAlumni = {
  id: 1,
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  batch: "2018",
  branch: "Computer Science",
  company: "Google",
  location: "San Francisco",
  jobTitle: "Senior Software Engineer",
  linkedin: "https://linkedin.com/in/sarahjohnson",
  image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
  availableFor: ["Referrals", "Mentoring"],
  achievements: [
    "Led team of 10 engineers",
    "Published 5 research papers",
    "Speaker at Google I/O 2023"
  ],
  canProvideReferrals: true,
  bio: "Passionate software engineer with 6+ years of experience in full-stack development. Love mentoring junior developers and contributing to open source projects."
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === dummyAlumni.email && password === "password123") {
      setUser(dummyAlumni);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateProfile,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
