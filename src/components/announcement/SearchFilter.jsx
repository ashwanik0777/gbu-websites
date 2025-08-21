import React, { useState, useRef, useEffect } from 'react';
import { CalendarIcon, Search, X } from 'lucide-react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

// Utility: Conditional class join
function cn(...args) {
  return args.flat().filter(Boolean).join(' ');
}

// Reusable Input
const Input = ({ className = '', ...props }) => (
  <input
    className={cn(
      'border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-gray-50 shadow-sm text-gray-800 placeholder-gray-400',
      className
    )}
    {...props}
  />
);

// Reusable Button
const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const base =
    'px-5 py-2.5 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm';
  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-500 hover:bg-gray-100',
  };
  return (
    <button className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Reusable Select
const Select = ({ value, onValueChange, children, ...props }) => (
  <select
    className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 shadow-sm text-gray-800"
    value={value}
    onChange={e => onValueChange && onValueChange(e.target.value)}
    {...props}
  >
    {children}
  </select>
);
const SelectValue = ({ placeholder }) => (
  <option className="hidden" value="" disabled>{placeholder}</option>
);
const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

// ✅ CalendarPopover with react-datepicker (no native input)
const CalendarPopover = ({ selected, onSelect, onClear, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <Button
        variant="outline"
        className={cn(
          "w-[150px] justify-start text-left font-normal flex items-center gap-2",
          !selected && "text-gray-400"
        )}
        type="button"
        aria-label={label}
        onClick={() => setOpen(prev => !prev)}
      >
        <CalendarIcon className="h-5 w-5 text-blue-500" />
        {selected ? format(selected, "MMM dd, yyyy") : label}
        {selected && (
          <span
            tabIndex={0}
            aria-label="Clear date"
            className="ml-auto text-gray-400 hover:text-red-500 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
              setOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                onClear();
                setOpen(false);
              }
            }}
            role="button"
          >
            <X size={16} />
          </span>
        )}
      </Button>

      {open && (
        <div className="absolute z-20 mt-2 bg-white border rounded-lg shadow-xl p-4" style={{ minWidth: 220 }}>
          <DatePicker
            selected={selected}
            onChange={(date) => {
              onSelect(date);
              setOpen(false);
            }}
            inline
          />
          <div className="flex justify-end mt-2">
            <Button
              variant="ghost"
              type="button"
              onClick={() => {
                onClear();
                setOpen(false);
              }}
              className="px-2 py-1 text-sm"
            >
              Clear
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Filter Chip
const FilterChip = ({ label, onRemove }) => (
  <span className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm mr-2 mb-2">
    {label}
    <button
      type="button"
      className="ml-2 text-blue-400 hover:text-red-500 focus:outline-none"
      aria-label={`Remove ${label}`}
      onClick={onRemove}
    >
      <X size={14} />
    </button>
  </span>
);

// ✅ MAIN SearchFilter
const SearchFilter = ({
  onSearch,
  onDateFilter,
  onTypeFilter,
  onYearFilter,
  types = [],
  years = [],
  placeholder = "Search..."
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [type, setType] = useState('all');
  const [year, setYear] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleDateChange = (date, isStart) => {
    if (isStart) {
      setStartDate(date);
      onDateFilter(date, endDate);
    } else {
      setEndDate(date);
      onDateFilter(startDate, date);
    }
  };

  const clearStartDate = () => handleDateChange(null, true);
  const clearEndDate = () => handleDateChange(null, false);
  const clearType = () => { setType('all'); onTypeFilter && onTypeFilter('all'); };
  const clearYear = () => { setYear('all'); onYearFilter && onYearFilter('all'); };
  const clearSearch = () => { setSearchQuery(''); onSearch(''); };


 return (
  <SearchableWrapper>
    <div className="bg-gradient-to-br from-blue-50 to-white p-2 rounded-2xl mb-2 shadow-2xl border border-blue-100">
      <form onSubmit={handleSearch} className="space-y-2">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Search Input */}
          <div className="w-3/6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" size={22} />
              <Input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 text-md pr-10"
                aria-label="Search"
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
                  aria-label="Clear search"
                  onClick={clearSearch}
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Date Filters */}
        <div className="flex flex-col md:flex-row gap-2 items-center w-full md:w-6/6 mt-2 md:mt-0">
          <div className="flex flex-row gap-2 w-full md:w-full sm:w-full">
            <CalendarPopover
              selected={startDate}
              onSelect={(date) => handleDateChange(date, true)}
              onClear={clearStartDate}
              label="Start Date"
            />
            <span className="text-gray-400 font-semibold">—</span>
            <CalendarPopover
              selected={endDate}
              onSelect={(date) => handleDateChange(date, false)}
              onClear={clearEndDate}
              label="End Date"
            />
          </div>

          <Button type="submit" className="text-lg flex items-center gap-2 shadow-md mt-2 md:mt-0">
            Search
          </Button>
        </div>
      </form> {/* ✅ Correct place to close form */}

      {/* Filter Chips outside form */}
      <div className="flex flex-wrap gap-2 mt-4">
        {searchQuery && <FilterChip label={`Search: "${searchQuery}"`} onRemove={clearSearch} />}
        {startDate && <FilterChip label={`From: ${format(startDate, 'MMM dd, yyyy')}`} onRemove={clearStartDate} />}
        {endDate && <FilterChip label={`To: ${format(endDate, 'MMM dd, yyyy')}`} onRemove={clearEndDate} />}
        {type !== 'all' && <FilterChip label={`Type: ${type}`} onRemove={clearType} />}
        {year !== 'all' && <FilterChip label={`Year: ${year}`} onRemove={clearYear} />}
      </div>

      {/* Additional Filters outside form */}
      <div className="flex -mt-2 flex-col sm:flex-row gap-4 items-center">
        {types.length > 0 && onTypeFilter && (
          <Select
            value={type}
            onValueChange={val => { setType(val); onTypeFilter(val); }}
            aria-label="Filter by type"
          >
            <SelectValue placeholder="Select Type" />
            <SelectItem value="all">All Types</SelectItem>
            {types.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </Select>
        )}
        {years.length > 0 && onYearFilter && (
          <Select
            value={year}
            onValueChange={val => { setYear(val); onYearFilter(val); }}
            aria-label="Filter by year"
          >
            <SelectValue placeholder="Select Year" />
            <SelectItem value="all">All Years</SelectItem>
            {years.map((y) => (
              <SelectItem key={y} value={y}>{y}</SelectItem>
            ))}
          </Select>
        )}
      </div>
    </div>
  </SearchableWrapper>
);
};

export default SearchFilter;

SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onDateFilter: PropTypes.func.isRequired,
  onTypeFilter: PropTypes.func,
  onYearFilter: PropTypes.func,
  types: PropTypes.arrayOf(PropTypes.string),
  years: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
};
