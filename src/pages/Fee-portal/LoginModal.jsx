
import React, { useState } from 'react';
// Dialog, DialogContent, DialogHeader, DialogTitle, Button, Input, Label components defined below

// Dialog Root
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onOpenChange}>
      <div className="relative" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg animate-fadeIn ${className}`}>
    {children}
  </div>
);

const DialogHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

const DialogTitle = ({ children, className = "" }) => (
  <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
);

const Button = ({
  children,
  type = "button",
  className = "",
  disabled = false,
  variant = "default",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant] || ""} ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({
  className = "",
  ...props
}) => (
  <input
    className={`block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 bg-white text-gray-900 placeholder-gray-400 ${className}`}
    {...props}
  />
);

const Label = ({ htmlFor, children, className = "" }) => (
  <label htmlFor={htmlFor} className={`block mb-1 font-medium ${className}`}>
    {children}
  </label>
);
import { GraduationCap, Shield, User, Phone, Lock, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * @typedef {Object} LoginModalProps
 * @property {boolean} isOpen
 * @property {() => void} onClose
 * @property {() => void} onLoginSuccess
 * @property {'student' | 'admin'} loginType
 */

/** @type {React.FC<LoginModalProps>} */
const LoginModal = ({ isOpen, onClose, onLoginSuccess, loginType }) => {
  const [formData, setFormData] = useState({
    studentId: '',
    phoneNumber: '',
    otp: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (!showOtp) {
      if (formData.studentId && formData.phoneNumber) {
        setShowOtp(true);
        toast({
          title: "OTP Sent",
          description: "Please enter the OTP sent to your phone (Use: 123)",
        });
      } else {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
      }
    } else {
      if (formData.otp === '123') {
        toast({
          title: "Login Successful",
          description: "Welcome to the Fee Payment Portal",
        });
        onLoginSuccess();
        setFormData({ studentId: '', phoneNumber: '', otp: '' });
        setShowOtp(false);
      } else {
        toast({
          title: "Invalid OTP",
          description: "Please enter the correct OTP (123)",
          variant: "destructive",
        });
      }
    }

    setIsLoading(false);
  };

  const icon = loginType === 'student' ? GraduationCap : Shield;
  const IconComponent = icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-auto">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className={`p-3 rounded-full ${loginType === 'student' ? 'bg-blue-100' : 'bg-green-100'}`}>
              <IconComponent className={`w-8 h-8 ${loginType === 'student' ? 'text-blue-600' : 'text-green-600'}`} />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold">
            {loginType === 'student' ? 'Student Login' : 'Admin Login'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {!showOtp ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="studentId" className="text-sm font-medium text-gray-700">
                  {loginType === 'student' ? 'Student ID' : 'Admin ID'}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="studentId"
                    type="text"
                    value={formData.studentId}
                    onChange={(e) => handleInputChange('studentId', e.target.value)}
                    className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={loginType === 'student' ? 'Enter Student ID' : 'Enter Admin ID'}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-sm font-medium text-gray-700">
                Enter OTP
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="otp"
                  type="text"
                  value={formData.otp}
                  onChange={(e) => handleInputChange('otp', e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-center text-lg tracking-widest"
                  placeholder="123"
                  maxLength={6}
                />
              </div>
              <p className="text-sm text-gray-500 text-center">
                For demo purposes, use OTP: <span className="font-mono font-bold">123</span>
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
              loginType === 'student' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                {showOtp ? 'Verifying...' : 'Sending OTP...'}
              </div>
            ) : (
              showOtp ? 'Verify & Login' : 'Send OTP'
            )}
          </Button>

          {showOtp && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowOtp(false)}
              className="w-full h-12 text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              Back to Login
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
