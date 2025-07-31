// import React, { cloneElement } from "react";

// const addDataSearch = (element, depth = 0) => {
//   // Handle non-React elements
//   if (
//     typeof element === "string" ||
//     typeof element === "number" ||
//     !React.isValidElement(element)
//   ) {
//     return element;
//   }

//   // Skip certain elements that shouldn't be searchable
//   const skipElements = ['script', 'style', 'meta', 'link', 'head', 'title'];
//   if (skipElements.includes(element.type)) {
//     return element;
//   }

//   // Skip elements that are already marked as non-searchable
//   if (element.props && element.props['data-search'] === false) {
//     return element;
//   }

//   // Check if element has meaningful text content
//   const hasTextContent = (el) => {
//     if (typeof el === 'string' || typeof el === 'number') {
//       return el.toString().trim().length > 0;
//     }
    
//     if (React.isValidElement(el) && el.props && el.props.children) {
//       return React.Children.toArray(el.props.children).some(child => hasTextContent(child));
//     }
    
//     return false;
//   };

//   // Only add data-search to elements that have meaningful content
//   const shouldAddDataSearch = hasTextContent(element);

//   // Process children recursively
//   let newChildren = element.props.children;
//   if (element.props && element.props.children) {
//     newChildren = React.Children.map(element.props.children, (child) => 
//       addDataSearch(child, depth + 1)
//     );
//   }

//   // Clone element with data-search attribute if it has meaningful content
//   const newProps = shouldAddDataSearch 
//     ? { ...element.props, "data-search": "true" }
//     : element.props;

//   return cloneElement(element, newProps, newChildren);
// };

// const SearchableWrapper = ({ children, exclude = [] }) => {
//   // Allow exclusion of specific elements by className or id
//   const addDataSearchWithExclusion = (element) => {
//     if (React.isValidElement(element) && element.props) {
//       const className = element.props.className || '';
//       const id = element.props.id || '';
      
//       // Check if element should be excluded
//       const shouldExclude = exclude.some(excludePattern => {
//         if (excludePattern.startsWith('.')) {
//           return className.includes(excludePattern.substring(1));
//         } else if (excludePattern.startsWith('#')) {
//           return id === excludePattern.substring(1);
//         }
//         return false;
//       });
      
//       if (shouldExclude) {
//         return cloneElement(element, { "data-search": false }, element.props.children);
//       }
//     }
    
//     return addDataSearch(element);
//   };

//   return <>{React.Children.map(children, addDataSearchWithExclusion)}</>;
// };

// export default SearchableWrapper;

// components/Searchbar/SearchableWrapper.jsx
import React, { cloneElement } from "react";

const isSkippableTag = (type) =>
  ['script', 'style', 'meta', 'link', 'head', 'title'].includes(type);

const hasMeaningfulText = (el) => {
  if (typeof el === 'string' || typeof el === 'number') {
    return el.toString().trim().length > 0;
  }
  if (React.isValidElement(el) && el.props && el.props.children) {
    return React.Children.toArray(el.props.children).some(hasMeaningfulText);
  }
  return false;
};

const addDataSearch = (element, depth = 0) => {
  if (!React.isValidElement(element)) return element;

  if (isSkippableTag(element.type)) return element;

  if (element.props?.['data-search'] === false) return element;

  const children = element.props?.children;
  const processedChildren = React.Children.map(children, (child) =>
    addDataSearch(child, depth + 1)
  );

  const shouldAdd = hasMeaningfulText(element);

  const newProps = shouldAdd
    ? { ...element.props, "data-search": "true" }
    : element.props;

  return cloneElement(element, newProps, processedChildren);
};

const shouldExcludeElement = (element, exclude = []) => {
  if (!React.isValidElement(element)) return false;

  const className = element.props.className || '';
  const id = element.props.id || '';

  return exclude.some(pattern => {
    if (pattern.startsWith('.')) return className.includes(pattern.slice(1));
    if (pattern.startsWith('#')) return id === pattern.slice(1);
    return false;
  });
};

const SearchableWrapper = ({ children, exclude = [] }) => {
  const processElement = (element) => {
    if (!React.isValidElement(element)) return element;

    if (shouldExcludeElement(element, exclude)) {
      return cloneElement(element, { ...element.props, "data-search": false }, element.props.children);
    }

    return addDataSearch(element);
  };

  return (
    <>
      {React.Children.map(children, (child) =>
        child ? processElement(child) : null
      )}
    </>
  );
};

export default SearchableWrapper;
