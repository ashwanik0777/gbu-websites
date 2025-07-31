import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

// import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

// ✅ Refined Button — modern hover, active, focus ring
const Button = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 active:scale-[0.97] disabled:opacity-50';
  const variants = {
    default:
      'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-100',
  };
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const TenderRow = ({ tender }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const isClosingSoon = (dateString) => {
    const closingDate = new Date(dateString);
    const today = new Date();
    const diffTime = closingDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
  };

  const isPastDue = (dateString) => {
    return new Date(dateString) < new Date();
  };

  const statusBadge = () => {
    if (isPastDue(tender.closingDate)) {
      return (
        <span className="ml-2 inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">
          Closed
        </span>
      );
    }
    if (isClosingSoon(tender.closingDate)) {
      return (
        <span className="ml-2 inline-block rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-600">
          Closing Soon
        </span>
      );
    }
    return null;
  };

  return (
    // <SearchableWrapper>
    <tr className="group transition hover:bg-gray-50">
      <td className="px-6 py-4 text-sm text-gray-500">
        #{String(tender.id).padStart(3, '0')}
      </td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-sm"
        >
          {tender.title}
          <ExternalLink className="h-4 w-4" />
        </a>
      </td>
      <td className="px-6 py-4 text-sm text-gray-600 max-w-md">
        {tender.description}
      </td>
      <td className="px-6 py-4">
        <span className="text-sm font-medium text-gray-800">
          {formatDate(tender.closingDate)}
        </span>
        {statusBadge()}
      </td>
      <td className="px-6 py-4">
        <Button
          variant="outline"
          size="sm"
          className="gap-1"
          onClick={() => window.open(tender.documentUrl, '_blank')}
        >
          <Download className="h-4 w-4" />
          PDF
        </Button>
      </td>
    </tr>
    // </SearchableWrapper>
  );
};

export default TenderRow;
