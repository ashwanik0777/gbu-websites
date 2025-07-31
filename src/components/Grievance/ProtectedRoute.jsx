import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isLoggedIn, userRole, isLoading } = useAuth();
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);

  // Ensure we've properly checked auth state before making routing decisions
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setHasCheckedAuth(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Debug logging
  useEffect(() => {
    console.log('ProtectedRoute check:', {
      isLoggedIn,
      userRole,
      isLoading,
      hasCheckedAuth,
      allowedRoles,
      currentPath: window.location.pathname
    });
  }, [isLoggedIn, userRole, isLoading, hasCheckedAuth, allowedRoles]);

  // Show loading while checking auth state or if we haven't fully checked auth
  if (isLoading || !hasCheckedAuth) {
    console.log('ProtectedRoute: Still checking auth state...');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Redirect to home if not logged in
  if (!isLoggedIn || !userRole) {
    console.log('ProtectedRoute: User not logged in, redirecting to home');
    return <Navigate to="/" replace />;
  }

  // Redirect to home if user role is not allowed
  if (!allowedRoles.includes(userRole)) {
    console.log('ProtectedRoute: User role not allowed, redirecting to home');
    return <Navigate to="/" replace />;
  }

  console.log('ProtectedRoute: Access granted');
  return <>{children}</>;
};

export default ProtectedRoute;
