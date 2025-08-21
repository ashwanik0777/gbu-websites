
import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({
  children,
  variant = "solid",
  size = "md",
  className = "",
  asChild = false,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded px-3 py-1.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-white text-white bg-transparent hover:bg-white hover:text-blue-600",
  };
  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
  };
  const classes = [
    base,
    variants[variant] || variants.solid,
    sizes[size] || sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (asChild && React.Children.only(children).type === Link) {
    return React.cloneElement(children, {
      className: [children.props.className, classes].filter(Boolean).join(" "),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
import { User, Users } from 'lucide-react';

const LoginBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            📢 Admissions are now open! Apply before the deadline.
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/student-login" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Student Login</span>
              </Link>
            </Button>
            <Button size="sm" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/admin-login" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Admin Login</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBanner;
