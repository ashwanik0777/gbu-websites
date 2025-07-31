
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchableWrapper from '../Searchbar/SearchableWrapper';
// Card component
const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>{children}</div>
);

// CardHeader component
const CardHeader = ({ className = '', children }) => (
  <div className={`px-8 pt-8 pb-4 ${className}`}>{children}</div>
);

// CardTitle component
const CardTitle = ({ className = '', children }) => (
  <h2 className={`font-semibold text-xl ${className}`}>{children}</h2>
);

// CardContent component
const CardContent = ({ className = '', children }) => (
  <div className={`px-8 pb-8 ${className}`}>{children}</div>
);

// Button component
const Button = ({ className = '', children, disabled, ...props }) => (
  <button
    className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

// Input component
const Input = React.forwardRef(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    className={`block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition ${className}`}
    {...props}
  />
));
Input.displayName = 'Input';

// Label component
const Label = ({ className = '', children, ...props }) => (
  <label className={`block text-gray-700 font-medium ${className}`} {...props}>
    {children}
  </label>
);
import { User, Users, Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import PropTypes from 'prop-types';

const LoginForm = ({ type }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    applicationId: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Application ID validation for students
    if (type === 'student' && !formData.applicationId) {
      newErrors.applicationId = 'Application ID is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call with authentication logic
    setTimeout(() => {
      setIsLoading(false);
      
      // Simple demo authentication
      const isValidCredentials = formData.email.includes('@') && formData.password.length >= 6;
      
      if (isValidCredentials) {
        // Store user info in localStorage for demo purposes
        localStorage.setItem('user', JSON.stringify({
          type,
          email: formData.email,
          applicationId: formData.applicationId,
          isAuthenticated: true
        }));
        
        toast({
          title: "Login Successful",
          description: `Welcome back! Redirecting to dashboard...`,
        });
        
        // Redirect to dashboard after successful login
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      }
    }, 2000);
  };

  const getIcon = () => {
    return type === 'student' ? <User className="w-6 h-6" /> : <Users className="w-6 h-6" />;
  };

  const getTitle = () => {
    return type === 'student' ? 'Student Login' : 'Admin Login';
  };

  const getColor = () => {
    return type === 'student' ? 'text-blue-600' : 'text-green-600';
  };

  const getBgColor = () => {
    return type === 'student' ? 'bg-blue-50' : 'bg-green-50';
  };

  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className={`mx-auto w-16 h-16 ${getBgColor()} rounded-full flex items-center justify-center`}>
            <div className={getColor()}>
              {getIcon()}
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            {getTitle()}
          </CardTitle>
          <p className="text-gray-600">
            {type === 'student' 
              ? 'Access your admission dashboard' 
              : 'Manage admission applications'}
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {type === 'student' && (
              <div className="space-y-2">
                <Label htmlFor="applicationId" className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Application ID</span>
                </Label>
                <Input
                  id="applicationId"
                  name="applicationId"
                  type="text"
                  placeholder="Enter your application ID"
                  value={formData.applicationId}
                  onChange={handleInputChange}
                  className={errors.applicationId ? 'border-red-500' : ''}
                />
                {errors.applicationId && (
                  <p className="text-red-500 text-sm">{errors.applicationId}</p>
                )}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email Address</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>Password</span>
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? 'border-red-500 pr-10' : 'pr-10'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300" aria-label="Remember me" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Forgot password?
              </a>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
            
            {type === 'student' && (
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  New applicant?{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Create Account
                  </a>
                </p>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
    </SearchableWrapper>
  );
};

export default LoginForm;
LoginForm.propTypes = {
  type: PropTypes.oneOf(['student', 'admin']).isRequired,
};

