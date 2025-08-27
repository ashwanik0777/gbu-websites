import React, { useState, useEffect } from "react";
import { Hourglass, Mail, Twitter, Facebook, Instagram } from "lucide-react";

const targetDate = new Date("2025-12-31T23:59:59").getTime();
function getRemainingTime() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  if (distance < 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((distance / (1000 * 60)) % 60);
  const secs = Math.floor((distance / 1000) % 60);
  return { days, hours, mins, secs };
}

const SocialIcon = ({ url, Icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:bg-blue-600 hover:text-white transition-all duration-300 mx-1"
    aria-label="social-link"
  >
    <Icon size={22} />
  </a>
);

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getRemainingTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="relative w-full max-w-md px-8 py-12 rounded-3xl border border-gray-200 shadow-xl flex flex-col items-center text-center">
        <Hourglass size={42} className="text-blue-700 mb-3" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
          Coming Soon
        </h1>
        <p className="text-base text-gray-500 mb-7 font-semibold max-w-xs mx-auto">
          Our professional new experience will launch very soon. Stay notified!
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-7">
          {["days", "hours", "mins", "secs"].map((unit) => (
            <div
              key={unit}
              className="flex flex-col items-center bg-gray-50 px-3 py-2 rounded-xl border border-gray-200 shadow"
            >
              <span className="text-xl font-bold text-blue-700">
                {timeLeft[unit].toString().padStart(2, "0")}
              </span>
              <span className="text-xs uppercase font-medium text-gray-500">
                {unit}
              </span>
            </div>
          ))}
        </div>

        {/* Email Notify */}
        <form
          onSubmit={handleSubscribe}
          className="w-full flex flex-col sm:flex-row gap-2 mb-7"
        >
          <input
            type="email"
            required
            value={email}
            onChange={handleEmail}
            disabled={isSubscribed}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            placeholder="Email for updates"
          />
          <button
            type="submit"
            disabled={isSubscribed}
            className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition"
          >
            {isSubscribed ? "Subscribed!" : "Notify Me"}
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center items-center mb-3">
          <SocialIcon url="https://twitter.com" Icon={Twitter} />
          <SocialIcon url="https://facebook.com" Icon={Facebook} />
          <SocialIcon url="https://instagram.com" Icon={Instagram} />
          <SocialIcon url="mailto:info@brand.com" Icon={Mail} />
        </div>
        <div className="mt-2 text-xs text-gray-400">© 2025 YourBrand. All rights reserved.</div>
      </div>
    </div>
  );
};

export default ComingSoon;
