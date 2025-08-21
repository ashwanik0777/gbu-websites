
import React, { useState } from "react";
// Button component
const Button = ({ variant = "default", size = "md", className = "", children, ...props }) => {
    const base =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    };
    const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
    };
    return (
        <button
            className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

// Dialog components
import { Fragment, useRef, useEffect } from "react";
const Dialog = ({ open, onOpenChange, children }) => {
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => (document.body.style.overflow = "");
    }, [open]);
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div
                className="fixed inset-0"
                onClick={() => onOpenChange(false)}
                aria-hidden="true"
            />
            {children}
        </div>
    );
};
const DialogContent = ({ className = "", children }) => (
    <div
        className={`relative bg-white rounded-lg shadow-lg p-6 w-full ${className}`}
        role="dialog"
        aria-modal="true"
    >
        {children}
    </div>
);
const DialogHeader = ({ children }) => (
    <div className="mb-4">{children}</div>
);
const DialogTitle = ({ children }) => (
    <h2 className="text-xl font-semibold text-gray-900">{children}</h2>
);
const DialogDescription = ({ children }) => (
    <p className="text-gray-600 text-sm mt-1">{children}</p>
);
const DialogTrigger = ({ children }) => children;

// DropdownMenu components
const DropdownMenu = ({ children }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    useEffect(() => {
        if (!open) return;
        const handler = (e) => {
            if (!menuRef.current?.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);
    // Clone children to inject open/setOpen
    return (
      <div className="relative inline-block" ref={menuRef}>
        {React.Children.map(children, (child) => {
          if (child.type === DropdownMenuTrigger)
            return React.cloneElement(child, { setOpen, open });
          if (child.type === DropdownMenuContent)
            return open ? React.cloneElement(child, { setOpen }) : null;
          return child;
        })}
      </div>
    );
};
const DropdownMenuTrigger = ({ asChild, children, setOpen }) => {
    const child = React.Children.only(children);
    return React.cloneElement(child, {
        onClick: (e) => {
            e.stopPropagation();
            setOpen((v) => !v);
            if (child.props.onClick) child.props.onClick(e);
        },
    });
};
const DropdownMenuContent = ({ children, className = "" }) => (
    <div
        className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 ${className}`}
    >
        <div className="py-1">{children}</div>
    </div>
);
const DropdownMenuItem = ({ children, onClick }) => (
    <button
        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
        onClick={onClick}
        type="button"
    >
        {children}
    </button>
);
import { useNavigate } from "react-router-dom";
import { Menu, X, User, FileText } from "lucide-react";
import SubmitComplaintForm from "./SubmitComplaintForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [selectedUserRole, setSelectedUserRole] = useState("student");
  const navigate = useNavigate();

  const handleRoleLogin = (role) => {
    navigate(`/login/${role}`);
  };

  const handleSubmitGrievance = (role) => {
    setSelectedUserRole(role);
    setIsSubmitDialogOpen(true);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-11">
           

          {/* Desktop Navigation */}
          <nav className="hidden md:flex pl-28 items-center space-x-6">
            <a href="/grievance" className="text-gray-700 hover:text-blue-600">Home</a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-700 hover:text-blue-600">Submit Grievance</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleSubmitGrievance("student")}>
                  👨‍🎓 Student Grievance
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSubmitGrievance("faculty")}>
                  👨‍🏫 Faculty Grievance
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/track" className="text-gray-700 hover:text-blue-600">Track Complaint</a>
            <a href="/escalation-policy" className="text-gray-700 hover:text-blue-600">Escalation Policy</a>
            <a href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>

          {/* Login Dropdown */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 hover:bg-gray-500 hover:text-white">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleRoleLogin("student")}>
                  👨‍🎓 Student Login
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleLogin("faculty")}>
                  👨‍🏫 Faculty Login
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleLogin("staff")}>
                  🧑‍🏫 Staff Login
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleLogin("admin")}>
                  🛠️ Admin Login
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-gray-700 hover:text-blue-600 py-2">Home</a>
              <div className="space-y-2">
                <button 
                  className="text-gray-700 hover:text-blue-600 py-2 text-left w-full"
                  onClick={() => handleSubmitGrievance("student")}
                >
                  👨‍🎓 Submit Student Grievance
                </button>
                <button 
                  className="text-gray-700 hover:text-blue-600 py-2 text-left w-full"
                  onClick={() => handleSubmitGrievance("faculty")}
                >
                  👨‍🏫 Submit Faculty Grievance
                </button>
              </div>
              <a href="/track" className="text-gray-700 hover:text-blue-600 py-2">Track Complaint</a>
              <a href="/escalation-policy" className="text-gray-700 hover:text-blue-600 py-2">Escalation Policy</a>
              <a href="/faq" className="text-gray-700 hover:text-blue-600 py-2">FAQ</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 py-2">Contact</a>
              <div className="pt-2 border-t space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start" 
                  onClick={() => handleRoleLogin("student")}
                >
                  👨‍🎓 Student Login
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start" 
                  onClick={() => handleRoleLogin("faculty")}
                >
                  👨‍🏫 Faculty Login
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start" 
                  onClick={() => handleRoleLogin("staff")}
                >
                  🧑‍🏫 Staff Login
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start" 
                  onClick={() => handleRoleLogin("admin")}
                >
                  🛠️ Admin Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Submit Grievance Dialog */}
      <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Submit Your {selectedUserRole === "faculty" ? "Faculty" : selectedUserRole === "staff" ? "Staff" : "Student"} Grievance
            </DialogTitle>
            <DialogDescription>
              Fill in the details below to submit your complaint. All fields marked with * are required.
            </DialogDescription>
          </DialogHeader>
          <SubmitComplaintForm userRole={selectedUserRole} />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
