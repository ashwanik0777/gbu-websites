import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Optional: Map URL segments to readable names
const pathNameMap = {
  'about-us': 'About Us',
  'vision-mission': 'Vision & Mission',
  'chancellor-message': 'Chancellor Message',
  'faculty-directory': 'Faculty Directory',
  'reports-publications': 'Reports & Publications',
  // Add more as needed...
};

const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location;

  // Break the path into parts
  const pathParts = pathname.split('/').filter((x) => x);

  // Build breadcrumb items
  const breadcrumbs = pathParts.map((part, index) => {
    const fullPath = `/${pathParts.slice(0, index + 1).join('/')}`;
    const name = pathNameMap[part] || part.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    return { name, path: fullPath };
  });

  return (
    <nav className="text-sm text-gray-700 p-4">
      <ol className="flex flex-wrap gap-2 items-center">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.path}>
            <span>/</span>
            <li>
              {index === breadcrumbs.length - 1 ? (
                <span className="font-semibold">{crumb.name}</span>
              ) : (
                <Link to={crumb.path} className="text-blue-600 hover:underline">{crumb.name}</Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
