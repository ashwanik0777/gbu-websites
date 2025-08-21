import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { User, Shield, Users, GraduationCap } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import { useAuth } from "../../components/Grievance/contexts/AuthContext";

// Custom Button
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Input
const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
      {...props}
    />
  );
};

// Custom Label
const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};

// Custom Card + Subcomponents
const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white shadow-xl rounded-lg p-1 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "" }) => {
  return <div className={`p-6 border-b ${className}`}>{children}</div>;
};

const CardTitle = ({ children, className = "" }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};

const CardDescription = ({ children, className = "" }) => {
  return <p className={`text-sm text-gray-600 mt-1 ${className}`}>{children}</p>;
};

const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 pt-4 ${className}`}>{children}</div>;
};



// Component
const Login = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const roleConfig = {
    student: {
      title: "Student Login",
      icon: User,
      color: "bg-blue-600",
      redirect: "/student",
    },
    staff: {
      title: "Staff Login",
      icon: Users,
      color: "bg-green-600",
      redirect: "/staff",
    },
    faculty: {
      title: "Faculty Login",
      icon: GraduationCap,
      color: "bg-purple-600",
      redirect: "/faculty-dashboard",
    },
    admin: {
      title: "Admin Login",
      icon: Shield,
      color: "bg-red-600",
      redirect: "/admin",
    },
  };

  const config = roleConfig[role];
  if (!config) {
    navigate("/");
    return null;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (credentials.username && credentials.password) {
      login(role);
      toast({
        title: "Login Successful",
        description: `Welcome to the ${role} portal!`,
      });
      navigate(config.redirect);
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter valid credentials",
        variant: "destructive",
      });
    }
  };

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className={`mx-auto mb-4 p-3 ${config.color} rounded-full w-fit`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">{config.title}</CardTitle>
          <CardDescription>Access your grievance portal dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username/ID</Label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder={`Enter your ${role} ID`}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="Enter your password"
                required
              />
            </div>

            <Button type="submit" className={`w-full ${config.color} hover:opacity-90`}>
              Login to {config.title.split(" ")[0]} Portal
            </Button>

            <div className="text-center space-y-2">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
              <div className="text-sm text-gray-600">
                <button
                  type="button"
                  onClick={() => navigate("/grievance")}
                  className="text-blue-600 hover:underline"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
