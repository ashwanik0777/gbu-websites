
import React, { useState } from "react";
import { Mail, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    alert(`Logging in with Email: ${email} Password: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 rounded-xl shadow-lg overflow-hidden p-6">
        {/* Left Side: Login Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-indigo-900 text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-8">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email address</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-indigo-400 focus:border-indigo-600 transition duration-300"
                />
                <Mail className="absolute left-3 top-3.5 text-indigo-400" size={22} />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-indigo-400 focus:border-indigo-600 transition duration-300"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-indigo-400 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm font-medium text-indigo-600 mt-4">
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Login
            </button>

            <p className="text-center text-gray-500 mt-6 text-sm font-medium">
              New user?{" "}
              <Link to="/new-registration" className="text-indigo-600 hover:underline font-semibold">Register here</Link>
            </p>
          </form>
        </div>

        {/* Right Side: Important Information */}
        <div className="flex flex-col justify-center ">
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">Important Information</h3>
          <ul className="list-disc list-inside space-y-4 text-indigo-800 text-base leading-relaxed">
            <li>
              Last date for online form submission for all programs is extended till 30 August 2025 and admissions are open on first cum first basis for all programs through National Level Test Scores/Direct Mode except M.Phil. and B.Sc. Clinical Psychology.
            </li>
            <li>
              For those candidates who will fill the application form by 30 August 2025 can take admission till 10 September 2025.
            </li>
            <li>
              Admissions in B.Tech. program for all specializations will be through Valid JEE Score / Any National Level Test Scores OR Direct admission based on merit in qualifying examination.
            </li>
          </ul>
          <p className="my-6 text-cyan-600">Note: For Important Dates and Counseling Schedules, check the latest updates.</p>
          <div className="mt-6 space-y-3">
<a
             
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 font-semibold hover:underline block transition-all"
            >
              Candidates kindly check eligibility before applying for any program.
            </a>           
             <a
              href="https://pravesh.gbu.ac.in/Content/Data/Adms-Steps-Web.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 font-semibold hover:underline block transition-all"
            >
              Admission Process (Steps for filling Online Application form)
            </a>
            <a
              href="https://pravesh.gbu.ac.in/Content/Data/Mode-admission1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 font-semibold hover:underline block transition-all"
            >
              Mode of Admission for various programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
