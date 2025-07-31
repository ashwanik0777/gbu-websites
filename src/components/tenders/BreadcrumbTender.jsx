import React from 'react';
import { ChevronRight } from 'lucide-react';

import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

const BreadcrumbTender = ({ items }) => {
  return (
    // <SearchableWrapper>
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span
              className={
                index === items.length - 1 ? 'text-foreground font-medium' : ''
              }
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
    // </SearchableWrapper>
  );
};

export default BreadcrumbTender;
