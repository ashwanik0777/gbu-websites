const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

export { Card, CardContent };
