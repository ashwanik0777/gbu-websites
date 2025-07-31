
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * @typedef {Object} AuthContextType
 * @property {boolean} isLoggedIn
 * @property {string|null} userRole
 * @property {(role: string) => void} login
 * @property {() => void} logout
 * @property {boolean} isLoading
 */

const AuthContext = createContext(undefined);


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

/**
 * @typedef {Object} AuthProviderProps
 * @property {React.ReactNode} children
 */

// Initialize auth state synchronously from localStorage
const getInitialAuthState = () => {
  try {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      if (authData.isLoggedIn && authData.userRole) {
        console.log('Initial auth state loaded:', authData.userRole);
        return {
          isLoggedIn: true,
          userRole: authData.userRole,
          isLoading: false
        };
      }
    }
  } catch (error) {
    console.error('Error reading initial auth state:', error);
    localStorage.removeItem('auth');
  }
  
  return {
    isLoggedIn: false,
    userRole: null,
    isLoading: false
  };
};

export const AuthProvider = ({ children }) => {
  // Initialize state synchronously from localStorage
  const [authState, setAuthState] = useState(() => getInitialAuthState());

  // Listen for storage changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'auth') {
        console.log('Storage change detected, updating auth state');
        const newState = getInitialAuthState();
        setAuthState(newState);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Listen for browser navigation events to maintain state
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Ensure auth state is persisted before navigation
      if (authState.isLoggedIn && authState.userRole) {
        try {
          const authData = {
            isLoggedIn: authState.isLoggedIn,
            userRole: authState.userRole,
            timestamp: new Date().toISOString()
          };
          localStorage.setItem('auth', JSON.stringify(authData));
          sessionStorage.setItem('auth_backup', JSON.stringify(authData));
        } catch (error) {
          console.error('Error persisting auth on navigation:', error);
        }
      }
    };

    const handlePageShow = () => {
      // Recover auth state on page show (back/forward navigation)
      const currentState = getInitialAuthState();
      if (currentState.isLoggedIn !== authState.isLoggedIn || currentState.userRole !== authState.userRole) {
        console.log('Recovering auth state on page show');
        setAuthState(currentState);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pageshow', handlePageShow);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [authState]);

  const login = (role) => {
    console.log('Logging in with role:', role);
    
    const newAuthState = {
      isLoggedIn: true,
      userRole: role,
      isLoading: false
    };
    
    setAuthState(newAuthState);
    
    // Persist to both localStorage and sessionStorage for redundancy
    try {
      const authData = {
        isLoggedIn: true,
        userRole: role,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('auth', JSON.stringify(authData));
      sessionStorage.setItem('auth_backup', JSON.stringify(authData));
      console.log('Auth data saved to storage:', authData);
    } catch (error) {
      console.error('Error saving auth data:', error);
    }
  };

  const logout = () => {
    console.log('Logging out...');
    
    const newAuthState = {
      isLoggedIn: false,
      userRole: null,
      isLoading: false
    };
    
    setAuthState(newAuthState);
    
    // Clear from both storages
    try {
      localStorage.removeItem('auth');
      sessionStorage.removeItem('auth_backup');
      console.log('Auth data cleared from storage');
    } catch (error) {
      console.error('Error clearing auth data:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn: authState.isLoggedIn, 
      userRole: authState.userRole, 
      login, 
      logout, 
      isLoading: authState.isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
