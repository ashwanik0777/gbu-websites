import PropTypes from 'prop-types';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

// Enhanced Button with more modern styles and subtle animation
const Button = ({
  variant = "outline",
  size = "sm",
  disabled,
  onClick,
  className = "",
  children,
  active = false,
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg border font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-sm";
  const variants = {
    outline:
      "border-gray-300 bg-white text-gray-700 hover:bg-blue-50 hover:border-blue-400",
    default:
      "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:shadow-lg",
  };
  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
  };
  const activeStyle = active
    ? "ring-2 ring-blue-400 border-blue-600 z-10"
    : "";
  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${activeStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// ChevronLeft icon (lucide-react style, 16x16)
const ChevronLeft = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-1"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

// ChevronRight icon (lucide-react style, 16x16)
const ChevronRight = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <SearchableWrapper>
    <div className="flex items-center justify-center gap-2 my-10">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="min-w-[90px]"
      >
        <ChevronLeft size={18} />
        <span className="hidden sm:inline">Previous</span>
      </Button>

      <div className="flex gap-1 px-2">
        {getVisiblePages().map((page, idx) =>
          page === "..." ? (
            <span
              key={`ellipsis-${idx}`}
              className="px-2 py-1 text-gray-400 select-none text-lg"
            >
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page)}
              className={`min-w-[40px] ${
                currentPage === page
                  ? "scale-105 shadow-lg"
                  : "hover:scale-105"
              }`}
              active={currentPage === page}
            >
              {page}
            </Button>
          )
        )}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="min-w-[70px]"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={18} />
      </Button>
    </div>
    </SearchableWrapper>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
