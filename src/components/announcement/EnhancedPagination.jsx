import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal, ChevronDown } from "lucide-react";
import SearchableWrapper from '../Searchbar/SearchableWrapper';

// Enhanced Button component
const Button = ({
  variant = "default",
  size = "md",
  disabled,
  onClick,
  className = "",
  children,
  active = false,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm";
  const variants = {
    default:
      "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost:
      "bg-transparent text-blue-600 hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
  };
  const activeStyle = active
    ? "ring-2 ring-blue-400 border-blue-600"
    : "";
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${activeStyle} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

// Enhanced Select components
const Select = ({ value, onValueChange, children }) => {
  const [open, setOpen] = useState(false);
  const trigger = React.Children.toArray(children).find(
    (child) => child.type.displayName === "SelectTrigger"
  );
  const content = React.Children.toArray(children).find(
    (child) => child.type.displayName === "SelectContent"
  );
  return (
    <div className="relative w-24">
      {React.cloneElement(trigger, {
        onClick: () => setOpen((o) => !o),
        value,
        open,
      })}
      {open &&
        React.cloneElement(content, {
          value,
          onValueChange: (v) => {
            onValueChange(v);
            setOpen(false);
          },
        })}
    </div>
  );
};

const SelectTrigger = ({ children, className = "", value, open, onClick }) => (
  <div
    className={`border border-gray-300 rounded-lg px-3 py-1.5 bg-white cursor-pointer flex items-center justify-between shadow-sm transition-all hover:border-blue-400 ${className}`}
    tabIndex={0}
    onClick={onClick}
  >
    <span className="font-medium text-gray-700">{value}</span>
    <ChevronDown size={16} className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
  </div>
);
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = ({ children, onValueChange }) => (
  <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl z-20 animate-fade-in">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { onValueChange })
    )}
  </div>
);
SelectContent.displayName = "SelectContent";

const SelectItem = ({ value, children, onValueChange }) => (
  <div
    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700 font-medium transition-colors rounded"
    onClick={() => onValueChange(value)}
    tabIndex={0}
    role="option"
  >
    {children}
  </div>
);

// Main Pagination - FIXED VERSION
const EnhancedPagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  showItemsPerPage = true,
}) => {
  // Add validation to prevent errors
  const validCurrentPage = Math.max(1, Math.min(currentPage || 1, totalPages || 1));
  const validTotalPages = Math.max(1, totalPages || 1);
  
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;

    if (validTotalPages <= maxVisible) {
      for (let i = 1; i <= validTotalPages; i++) {
        pages.push(i);
      }
    } else {
      if (validCurrentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(validTotalPages);
      } else if (validCurrentPage >= validTotalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = validTotalPages - 3; i <= validTotalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = validCurrentPage - 1; i <= validCurrentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(validTotalPages);
      }
    }

    return pages;
  };

  const startItem = (validCurrentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(validCurrentPage * itemsPerPage, totalItems);

  // Fixed navigation handlers
  const handlePreviousPage = () => {
    if (validCurrentPage > 1) {
      onPageChange(validCurrentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (validCurrentPage < validTotalPages) {
      onPageChange(validCurrentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= validTotalPages && page !== validCurrentPage) {
      onPageChange(page);
    }
  };

  return (
    <SearchableWrapper>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 bg-gradient-to-r from-white via-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100">
        {/* Items Info */}
        <div className="text-sm text-gray-700 font-medium bg-blue-50 px-4 py-2 rounded-lg shadow-inner">
          Showing <span className="font-bold text-blue-600">{startItem}-{endItem}</span> of{" "}
          <span className="font-bold text-blue-600">{totalItems}</span> results
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
          {/* FIXED Previous Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePreviousPage}
            disabled={validCurrentPage <= 1 || validTotalPages <= 1}
            className="!rounded-full"
          >
            <ChevronLeft size={18} className="mr-1" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex items-center gap-1">
            {getVisiblePages().map((page, index) => (
              <div key={index}>
                {page === "..." ? (
                  <div className="px-2 py-2 flex items-center justify-center">
                    <MoreHorizontal size={18} className="text-gray-400" />
                  </div>
                ) : (
                  <Button
                    variant={validCurrentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageClick(Number(page))}
                    className={`min-w-[40px] ${validCurrentPage === page ? "shadow-lg scale-105" : ""}`}
                    active={validCurrentPage === page}
                  >
                    {page}
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* FIXED Next Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextPage}
            disabled={validCurrentPage >= validTotalPages || validTotalPages <= 1}
            className="!rounded-full"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={18} className="ml-1" />
          </Button>
        </div>

        {/* Items per page selector */}
        {showItemsPerPage && onItemsPerPageChange && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">Show:</span>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => onItemsPerPageChange(parseInt(value))}
            >
              <SelectTrigger className="w-24" />
              <SelectContent>
                <SelectItem value="9">9 / page</SelectItem>
                <SelectItem value="18">18 / page</SelectItem>
                <SelectItem value="27">27 / page</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </SearchableWrapper>
  );
};

export default EnhancedPagination;
