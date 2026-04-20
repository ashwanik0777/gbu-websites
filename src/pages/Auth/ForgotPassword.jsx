import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  requestForgotPasswordOtp,
  verifyForgotPasswordOtp,
} from "../../services/authService";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const extractError = (err, fallback) => {
    return (
      err?.response?.data?.errors?.[0]?.message ||
      err?.response?.data?.message ||
      fallback
    );
  };

  const handleSendOtp = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Please enter your registered email.");
      return;
    }

    try {
      setLoading(true);
      await requestForgotPasswordOtp({ email: email.trim() });
      setMessage("OTP sent to your email if account exists.");
      setStep(2);
    } catch (err) {
      setError(extractError(err, "Failed to send OTP."));
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!otp.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      await verifyForgotPasswordOtp({
        email: email.trim(),
        otp: otp.trim(),
        newPassword,
        confirmPassword,
      });
      setMessage("Password reset successful. Please login.");
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setError(extractError(err, "Failed to reset password."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-10">
      <div className="mx-auto max-w-lg rounded-3xl border border-stone-300 bg-white p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-stone-900">Forgot Password</h1>
        <p className="mt-2 text-sm text-stone-600">
          Email OTP verification is required before password reset.
        </p>

        {step === 1 ? (
          <form onSubmit={handleSendOtp} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
                Registered Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                placeholder="name@gbu.ac.in"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-stone-900 px-4 py-3 font-semibold text-white hover:bg-stone-800 disabled:opacity-60"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="mt-6 space-y-4">
            <div>
              <label htmlFor="otp" className="mb-1 block text-sm font-medium text-stone-700">
                OTP
              </label>
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                placeholder="Enter 6-digit OTP"
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="mb-1 block text-sm font-medium text-stone-700">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                placeholder="Enter strong password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-stone-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                placeholder="Re-enter password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-stone-900 px-4 py-3 font-semibold text-white hover:bg-stone-800 disabled:opacity-60"
            >
              {loading ? "Resetting..." : "Verify OTP & Reset Password"}
            </button>
          </form>
        )}

        {error ? <p className="mt-4 text-sm font-medium text-red-700">{error}</p> : null}
        {message ? <p className="mt-4 text-sm font-medium text-emerald-700">{message}</p> : null}

        <div className="mt-6 text-sm text-stone-600">
          <Link to="/login" className="font-semibold text-stone-900 hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
