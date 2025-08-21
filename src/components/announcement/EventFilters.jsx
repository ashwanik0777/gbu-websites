import SearchFilter from './SearchFilter';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

const EventFilters = ({
  onSearch,
  onDateFilter,
  onTypeFilter,
  onYearFilter,
  types,
  years
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <SearchableWrapper>
    <div
      className={`bg-gradient-to-br from-slate-50 to-blue-100 rounded-[22px] shadow-lg w-full py-2  mx-auto flex flex-col items-center border border-slate-300 transition-shadow duration-200 ${
        hovered ? 'shadow-2xl border-indigo-500' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* <div className="text-[2.2rem] font-extrabold text-slate-800 mb-3 tracking-wide text-center font-inter">
        Find Your Event
      </div>
      <div className="text-[1.05rem] text-slate-500 mb-4 text-center font-inter">
        Quickly search and filter events by type, year, or date.
      </div> */}
      {/* <div className=" h-1 w-full bg-blue-400 rounded mx-auto mb-6 border-0"></div> */}
      <div className='w-full'><SearchFilter
        onSearch={onSearch}
        onDateFilter={onDateFilter}
        onTypeFilter={onTypeFilter}
        onYearFilter={onYearFilter}
        types={types}
        years={years}
        placeholder="Search events, types, or years..."
      /></div>
    </div>
    </SearchableWrapper>
  );
};

export default EventFilters;
EventFilters.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onDateFilter: PropTypes.func.isRequired,
  onTypeFilter: PropTypes.func.isRequired,
  onYearFilter: PropTypes.func.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  years: PropTypes.arrayOf(PropTypes.string).isRequired,
};
