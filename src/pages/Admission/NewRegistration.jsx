import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, Phone } from "lucide-react";

export default function RegistrationPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    mobile: "",
  });
  const [error, setError] = useState(""); // Add error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      // Allow only digits
      const numericValue = value.replace(/\D/g, "");
      setForm({ ...form, [name]: numericValue });
    } else {
      setForm({ ...form, [name]: value });
    }
    setError(""); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    alert("✅ Registration Successful!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 md:p-12"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Registration Form
        </h1>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-600 text-center font-medium">{error}</div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute top-3 left-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Enter full name"
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:outline-none bg-gray-50"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute top-3 left-3 w-4 h-4 text-gray-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:outline-none bg-gray-50"
              />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Mobile
            </label>
            <div className="relative">
              <Phone className="absolute top-3 left-3 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                maxLength="10"
                placeholder="10-digit mobile number"
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:outline-none bg-gray-50"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute top-3 left-3 w-4 h-4 text-gray-400" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:outline-none bg-gray-50"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute top-3 left-3 w-4 h-4 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter password"
                className="w-full pl-10 pr-3 py-2.5 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:outline-none bg-gray-50"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="md:col-span-2 mt-4 bg-indigo-600 text-white text-sm font-medium py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Register Now
          </motion.button>
        </form>

        {/* Info Section */}
        <div className="mt-10 text-sm text-gray-700">
          <h2 className="text-lg font-semibold mb-2">📌 Instructions:</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Candidates kindly check eligibility before applying for any program.</li>
            <a href="assets/Adms-Steps-Web.pdf"><li className="text-blue-600">Admission Process (Steps for filling Online Application form)</li></a>
            <a href="assets/Mode-admission1.pdf"><li className="text-blue-600">Mode of Admission for various programs</li></a>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-2">🎓 Mode of Admission</h2>
          <p className="text-gray-600">
            Admission is granted based on eligibility, entrance tests, and merit, as applicable.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
