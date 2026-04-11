import { useState } from "react";
import { Search, Filter, Grid, List, X } from "lucide-react";

const UnifiedAnnouncementFilter = ({
  onSearch,
  onDateFilter,
  onCategoryToggle,
  onTagToggle,
  onPriorityToggle,
  onSortChange,
  onViewModeChange,
  categories = [],
  tags = [],
  priorities = [],
  years = [],
  selectedTags = [],
  selectedCategories = [],
  selectedPriorities = [],
  selectedYear = "all",
  selectedType = "all",
  onYearChange,
  onTypeChange,
  currentSort = "newest",
  viewMode = "grid",
  showViewMode = true,
  showSort = false,
  showDate = true,
  totalResults,
  searchPlaceholder = "Search...",
  allYearValue = "all",
  allTypeValue = "all",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const activeCount =
    selectedTags.length +
    selectedCategories.length +
    selectedPriorities.length +
    (selectedType && selectedType !== allTypeValue ? 1 : 0) +
    (selectedYear && selectedYear !== allYearValue ? 1 : 0) +
    (startDate ? 1 : 0) +
    (endDate ? 1 : 0);

  const handleSearch = (value) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setStartDate("");
    setEndDate("");
    onSearch("");

    if (onDateFilter) {
      onDateFilter(null, null);
    }

    if (onTypeChange) {
      onTypeChange(allTypeValue);
    }

    if (onYearChange) {
      onYearChange(allYearValue);
    }

    selectedTags.forEach((tag) => onTagToggle && onTagToggle(tag));
    selectedCategories.forEach((category) =>
      onCategoryToggle && onCategoryToggle(category),
    );
    selectedPriorities.forEach((priority) =>
      onPriorityToggle && onPriorityToggle(priority),
    );
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-8">
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-12 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => handleSearch("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Filter className="h-4 w-4" />
            Filters
            {activeCount > 0 && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-semibold text-white">
                {activeCount}
              </span>
            )}
          </button>

          {typeof totalResults === "number" && (
            <div className="text-sm text-gray-600">{totalResults} results found</div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {showViewMode && onViewModeChange && (
            <div className="flex rounded-lg border border-gray-300 p-1">
              <button
                type="button"
                onClick={() => onViewModeChange("grid")}
                className={`rounded-md p-2 transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onViewModeChange("list")}
                className={`rounded-md p-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          )}

          {showSort && onSortChange && (
            <select
              value={currentSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alphabetical">A-Z</option>
              <option value="popularity">Most Popular</option>
              <option value="priority">Priority</option>
            </select>
          )}
        </div>
      </div>

      {isFilterOpen && (
        <div className="space-y-6 border-t border-gray-200 pt-6">
          {categories.length > 0 && onCategoryToggle && (
            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-900">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => onCategoryToggle(category)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                      selectedCategories.includes(category)
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300 bg-white text-gray-700 hover:border-blue-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {tags.length > 0 && onTagToggle && (
            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-900">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => onTagToggle(tag)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                      selectedTags.includes(tag)
                        ? "border-green-600 bg-green-600 text-white"
                        : "border-gray-300 bg-white text-gray-700 hover:border-green-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {priorities.length > 0 && onPriorityToggle && (
            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-900">Priority</h4>
              <div className="flex flex-wrap gap-2">
                {priorities.map((priority) => (
                  <button
                    key={priority}
                    type="button"
                    onClick={() => onPriorityToggle(priority)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                      selectedPriorities.includes(priority)
                        ? "border-red-600 bg-red-600 text-white"
                        : "border-gray-300 bg-white text-gray-700 hover:border-red-300"
                    }`}
                  >
                    {priority}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {onTypeChange && (
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => onTypeChange(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value={allTypeValue}>All Types</option>
                  {categories.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {onYearChange && years.length > 0 && (
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => onYearChange(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value={allYearValue}>All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {showDate && onDateFilter && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">From Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    const value = e.target.value;
                    setStartDate(value);
                    onDateFilter(value ? new Date(value) : null, endDate ? new Date(endDate) : null);
                  }}
                  className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">To Date</label>
                <input
                  type="date"
                  value={endDate}
                  min={startDate || undefined}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEndDate(value);
                    onDateFilter(startDate ? new Date(startDate) : null, value ? new Date(value) : null);
                  }}
                  className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {activeCount > 0 && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={clearAllFilters}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UnifiedAnnouncementFilter;
