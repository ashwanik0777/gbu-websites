import React, { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserCog, School, GraduationCap, Eye, EyeOff, ShieldCheck, Building2 } from "lucide-react";
import { loginByRole, verifyLoginOtpService } from "../../services/authService";
import { getRoleHomeRoute, setPortalSession } from "../../utils/portalSession";

const ROLE_OPTIONS = [
  {
    id: "teacher",
    title: "Teacher Login",
    subtitle: "Faculty and teaching staff",
    icon: GraduationCap
  },
  {
    id: "school",
    title: "School Login",
    subtitle: "School office and coordinators",
    icon: School
  },
  {
    id: "admin",
    title: "Admin Login",
    subtitle: "Central administration",
    icon: UserCog
  }
];

const LoginPortal = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("teacher");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [requiresOtp, setRequiresOtp] = useState(false);
  const [otpEmail, setOtpEmail] = useState("");
  const [forcePasswordReset, setForcePasswordReset] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const selectedRole = useMemo(
    () => ROLE_OPTIONS.find((item) => item.id === role) || ROLE_OPTIONS[0],
    [role]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      setLoading(true);

      if (requiresOtp) {
        if (!otp.trim()) {
          setError("Please enter the OTP.");
          setLoading(false);
          return;
        }
        if (forcePasswordReset && !newPassword.trim()) {
          setError("Please enter a new password.");
          setLoading(false);
          return;
        }

        const response = await verifyLoginOtpService({
          email: otpEmail,
          otp,
          newPassword,
        });

        const authData = response?.data;
        if (!authData?.accessToken || !authData?.refreshToken || !authData?.user?.role) {
          setError("Invalid login response from server.");
          setLoading(false);
          return;
        }

        setPortalSession(authData);
        navigate(getRoleHomeRoute(authData.user.role));
      } else {
        if (!username.trim() || !password.trim()) {
          setError("Please enter both username and password.");
          setLoading(false);
          return;
        }

        const response = await loginByRole({
          role,
          email: username.trim(),
          password,
        });

        const authData = response?.data;
        if (response?.requiresOtp || authData?.requiresOtp) {
          setRequiresOtp(true);
          setOtpEmail(response?.email || authData?.email);
          setForcePasswordReset(response?.forcePasswordReset || authData?.forcePasswordReset);
          return;
        }

        if (!authData?.accessToken || !authData?.refreshToken || !authData?.user?.role) {
          setError("Invalid login response from server.");
          return;
        }

        setPortalSession(authData);
        navigate(getRoleHomeRoute(authData.user.role));
      }
    } catch (err) {
      setError(
        err?.response?.data?.errors?.[0]?.message ||
          err?.response?.data?.message ||
          "Invalid credentials or OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl overflow-hidden rounded-3xl border border-stone-300 bg-white shadow-2xl lg:grid-cols-[1.1fr_1fr]">
        <section className="relative border-b border-stone-200 bg-stone-900 p-8 text-stone-100 lg:border-b-0 lg:border-r lg:p-12">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#f5f5f4_1px,transparent_1px)] bg-[length:18px_18px]" />
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-stone-600 bg-stone-800 px-4 py-2 text-sm">
                <Building2 className="h-4 w-4" />
                Gautam Buddha University
              </div>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Unified Access Portal
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-300 lg:text-lg">
                Secure login portal for Teacher, School, and Admin accounts.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-stone-700 bg-stone-800/80 p-6">
              <div className="flex items-center gap-3 text-lg font-semibold">
                <ShieldCheck className="h-5 w-5 text-stone-200" />
                Security Notice
              </div>
              <ul className="space-y-2 text-sm text-stone-300">
                <li>Use your official university credentials.</li>
                <li>Do not share your password with anyone.</li>
                <li>Contact system admin for account recovery help.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex items-center p-6 sm:p-8 lg:p-12">
          <div className="mx-auto w-full max-w-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-stone-900">Sign In</h2>
             
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {ROLE_OPTIONS.map((item) => {
                const Icon = item.icon;
                const isActive = role === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id)}
                    className={`rounded-xl border p-3 text-left transition-all ${
                      isActive
                        ? "border-stone-900 bg-stone-900 text-white shadow"
                        : "border-stone-300 bg-white text-stone-800 hover:border-stone-500"
                    }`}
                  >
                    <Icon className="mb-2 h-5 w-5" />
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className={`text-xs ${isActive ? "text-stone-300" : "text-stone-500"}`}>{item.subtitle}</p>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-stone-300 bg-stone-50 p-4 text-sm text-stone-700">
              Active role: <span className="font-semibold text-stone-900">{selectedRole.title}</span>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {requiresOtp ? (
                <>
                  <div className="mb-4 text-sm text-stone-700 bg-blue-50 p-3 rounded-lg border border-blue-200">
                    An OTP has been sent to <strong>{otpEmail}</strong>. Please enter it below.
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700" htmlFor="otp">
                      Enter OTP
                    </label>
                    <input
                      id="otp"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="6-digit OTP"
                      className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                    />
                  </div>
                  {forcePasswordReset && (
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700" htmlFor="newPassword">
                        Set New Password (First Time Login)
                      </label>
                      <div className="relative">
                        <input
                          id="newPassword"
                          type={showPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Create a strong password"
                          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 pr-11 text-stone-900 outline-none transition focus:border-stone-900"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700" htmlFor="username">
                      Username / Email
                    </label>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                      className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-stone-700" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 pr-11 text-stone-900 outline-none transition focus:border-stone-900"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-stone-900 px-4 py-3 font-semibold text-white transition hover:bg-stone-800"
              >
                {loading
                  ? (requiresOtp ? "Verifying..." : "Signing in...")
                  : (requiresOtp ? "Verify & Login" : `Login as ${selectedRole.title.replace(" Login", "")}`)}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm text-stone-600">
              <button
                type="button"
                className="hover:text-stone-900"
                onClick={() => navigate("/login/forgot-password")}
              >
                Forgot password?
              </button>
              <Link to="/admission/login" className="font-semibold text-stone-900 hover:underline">
                Admission Login
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPortal;
