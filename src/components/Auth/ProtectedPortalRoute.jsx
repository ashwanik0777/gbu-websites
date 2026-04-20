import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
  allowedRoleForPath,
  getPortalSession,
  getRoleHomeRoute,
  isTokenExpired,
} from "../../utils/portalSession";

const ProtectedPortalRoute = ({ children }) => {
  const location = useLocation();
  const session = getPortalSession();

  if (!session || !session.accessToken || isTokenExpired(session.accessToken)) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  const requiredRole = allowedRoleForPath(location.pathname);
  if (requiredRole && session?.user?.role !== requiredRole) {
    return <Navigate to={getRoleHomeRoute(session?.user?.role)} replace />;
  }

  return children;
};

export default ProtectedPortalRoute;
