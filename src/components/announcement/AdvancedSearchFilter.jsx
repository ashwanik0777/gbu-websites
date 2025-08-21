import { useState } from 'react';
import { CalendarIcon, Search, X, SlidersHorizontal } from 'lucide-react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import SearchableWrapper from '../Searchbar/SearchableWrapper';
// Utility function to join class names conditionally
function cn(...args) {
  return args
    .map(arg => {
      if (!arg && arg !== 0) return '';
      if (typeof arg === 'string' || typeof arg === 'number') return String(arg);
      if (Array.isArray(arg)) return cn(...arg);
      if (typeof arg === 'object' && arg !== null) {
        return Object.entries(arg)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
}

// Enhanced Input
const Input = ({ className = '', ...props }) => (
  <input
    className={cn(
      "border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition bg-gray-50 shadow-sm text-base",
      "placeholder-gray-400",
      className
    )}
    {...props}
  />
);

// Enhanced Button
const Button = ({
  children,
  variant = "default",
  size = "md",
  className = '',
  ...props
}) => {
  const variants = {
    default: "bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary shadow-md",
    outline: "border border-primary text-primary bg-white hover:bg-primary/10 shadow-sm",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200"
  };
  const sizes = {
    md: "px-5 py-2.5 text-base",
    sm: "px-3 py-1.5 text-sm"
  };
  return (
    <button
      className={cn(
        "rounded-lg font-semibold transition flex items-center justify-center gap-2",
        variants[variant] || '',
        sizes[size] || '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// Enhanced Select
const Select = ({ value, onValueChange, children, className = '', ...props }) => (
  <select
    value={value}
    onChange={e => onValueChange?.(e.target.value)}
    className={cn(
      "border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition bg-gray-50 shadow-sm text-base",
      className
    )}
    {...props}
  >
    {children}
  </select>
);

const SelectTrigger = ({ children, className = '', ...props }) => (
  <div className={cn("relative", className)} {...props}>{children}</div>
);

const SelectValue = ({ placeholder }) => (
  <span className="text-gray-500">{placeholder}</span>
);

const SelectContent = ({ children }) => <>{children}</>;

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

// Enhanced Calendar
const Calendar = ({ selected, onSelect }) => (
  <input
    type="date"
    value={selected ? new Date(selected).toISOString().slice(0, 10) : ''}
    onChange={e => onSelect?.(e.target.value ? new Date(e.target.value) : null)}
    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 shadow-sm"
  />
);

const Popover = ({ children }) => <div className="relative">{children}</div>;
const PopoverTrigger = ({ children }) => children;
const PopoverContent = ({ children, className = '' }) => (
  <div className={cn(
    "absolute z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-4 min-w-[220px] animate-fade-in",
    className
  )}>
    {children}
  </div>
);

// Enhanced Badge
const Badge = ({ children, variant = "default", className = '', ...props }) => {
  const variants = {
    default: "bg-gradient-to-r from-primary to-blue-600 text-white",
    outline: "border border-primary text-primary bg-white",
    secondary: "bg-gray-200 text-gray-700"
  };
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition cursor-pointer",
        variants[variant] || '',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

const AdvancedSearchFilter = ({
  onSearch,
  onDateFilter,
  onTypeFilter,
  onYearFilter,
  onSortChange,
  types = [],
  years = [],
  placeholder = "Search...",
  currentSort = 'newest',
  tags = [],
  onTagFilter,
  selectedTags = []
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const handleStartCalendarOpen = () => setShowStartCalendar(true);
  const handleStartCalendarClose = () => setShowStartCalendar(false);
  const handleEndCalendarOpen = () => setShowEndCalendar(true);
  const handleEndCalendarClose = () => setShowEndCalendar(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleDateChange = (date, isStart) => {
    if (isStart) {
      setStartDate(date || null);
      onDateFilter(date || null, endDate);
    } else {
      setEndDate(date || null);
      onDateFilter(startDate, date || null);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setStartDate(null);
    setEndDate(null);
    onSearch('');
    onDateFilter(null, null);
    onTypeFilter?.('all');
    onYearFilter?.('all');
    selectedTags.forEach(tag => onTagFilter?.(tag));
  };

  const hasActiveFilters = searchQuery || startDate || endDate || selectedTags.length > 0;

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'alphabetical', label: 'A-Z' }
  ];

  return (
  <SearchableWrapper>
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl mb-8 sticky top-20 z-40 border border-blue-100">
      <div className="p-6">
        {/* Main Search Bar */}
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" size={22} />
                <Input
                  type="text"
                  placeholder={placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-3 text-lg bg-white shadow-md"
                />
              </div>
            </div>

            {/* Sort Dropdown */}
            {onSortChange && (
              <Select value={currentSort} onValueChange={onSortChange} className="max-w-[180px] bg-white shadow-md">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {/* Filter Toggle */}
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "gap-2 border-2 border-blue-300 hover:border-blue-500 bg-white shadow-md",
                isFilterOpen && "bg-blue-50 border-blue-500"
              )}
            >
              <SlidersHorizontal size={18} />
              <span className="font-semibold">Filters</span>
              {hasActiveFilters && (
                <Badge variant="secondary" className="ml-1">
                  {selectedTags.length + (searchQuery ? 1 : 0) + (startDate || endDate ? 1 : 0)}
                </Badge>
              )}
            </Button>

            <Button type="submit" className="shadow-lg py-3 px-6 text-lg">
              <Search size={18} className="mr-1" />
              Search
            </Button>
          </div>

          {/* Expanded Filters */}
          {isFilterOpen && (
            <div className="border-t border-blue-200 pt-6 space-y-6 animate-fade-in">
              {/* Date Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex gap-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                       onClick={handleStartCalendarOpen}
                        variant="outline"
                        className={cn(
                          "w-full sm:w-[170px] justify-start text-left font-normal bg-white shadow-sm border-blue-200",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-5 w-5 text-blue-400" />
                        {startDate ? format(startDate, "MMM dd, yyyy") : "Start Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate || undefined}
                        onSelect={(date) => handleDateChange(date, true)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button onClick={handleEndCalendarOpen}
                        variant="outline"
                        className={cn(
                          "w-full sm:w-[170px] justify-start text-left font-normal bg-white shadow-sm border-blue-200",
                          !endDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-5 w-5 text-blue-400" />
                        {endDate ? format(endDate, "MMM dd, yyyy") : "End Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate || undefined}
                        onSelect={(date) => handleDateChange(date, false)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Type and Year Filters */}
                <div className="flex gap-3">
                  {types.length > 0 && onTypeFilter && (
                    <Select onValueChange={onTypeFilter} className="w-full sm:w-[150px] bg-white shadow-sm">
                      <SelectTrigger>
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {types.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  {years.length > 0 && onYearFilter && (
                    <Select onValueChange={onYearFilter} className="w-full sm:w-[150px] bg-white shadow-sm">
                      <SelectTrigger>
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>

              {/* Tag Cloud */}
              {tags.length > 0 && onTagFilter && (
                <div>
                  <div className="text-sm font-semibold mb-2 text-blue-700">Tags:</div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={cn(
                          "hover:bg-blue-600/90 hover:text-white transition-all duration-150",
                          selectedTags.includes(tag) ? "shadow-lg scale-105" : "shadow-sm"
                        )}
                        onClick={() => onTagFilter(tag)}
                      >
                        {tag}
                        {selectedTags.includes(tag) && (
                          <X size={12} className="ml-1" />
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Clear Filters */}
              {hasActiveFilters && (
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-blue-600 hover:bg-blue-100">
                    <X size={16} className="mr-2" />
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  </SearchableWrapper>
  );
};

AdvancedSearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onDateFilter: PropTypes.func.isRequired,
  onTypeFilter: PropTypes.func,
  onYearFilter: PropTypes.func,
  onSortChange: PropTypes.func,
  types: PropTypes.arrayOf(PropTypes.string),
  years: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  currentSort: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  onTagFilter: PropTypes.func,
  selectedTags: PropTypes.arrayOf(PropTypes.string),
};

export default AdvancedSearchFilter;
