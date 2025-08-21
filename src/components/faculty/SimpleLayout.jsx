
import React from 'react';

import PropTypes from 'prop-types';

const SimpleLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SimpleLayout;
