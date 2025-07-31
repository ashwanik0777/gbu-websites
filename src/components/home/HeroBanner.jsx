import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default function WelcomePage() {
  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BANNER = import.meta.env.VITE_HOST;
  const BASE = (BANNER || "").replace(/\/$/, "");

  // Memoize the fetch function to prevent unnecessary re-renders
  const fetchBannerData = useCallback(async () => {
    if (!BASE) {
      setError("Base URL not configured");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Add timeout and optimize axios config
      const res = await axios.get(`${BASE}/landing/banner/`, {
        timeout: 5000, // 5 second timeout
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
      
      const data = res.data;
      if (Array.isArray(data) && data.length > 0) {
        setBannerData(data[0]);
      } else {
        setError("No banner data available");
      }
    } catch (error) {
      console.error("Error fetching banner data:", error);
      setError("Failed to load banner data");
    } finally {
      setLoading(false);
    }
  }, [BASE]);

  useEffect(() => {
    fetchBannerData();
  }, [fetchBannerData]);

  // Loading state with better mobile styling
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">Loading...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-4 max-w-md mx-auto">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <p className="text-gray-600 text-sm sm:text-base mb-4">{error}</p>
          <button
            onClick={fetchBannerData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm sm:text-base transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!bannerData) return null;

  const videoSrc = bannerData.video?.includes("http")
    ? bannerData.video
    : `${BASE}/${bannerData.video.startsWith("media") ? "" : "media/"}${bannerData.video}`;

  // Heights: primary navbar = 48px (py-2), secondary navbar = 48px (py-3 + logo height)
  // Total offset = 48px + 48px = 96px (adjust if your navbars are different)
  return (
    <>
      {/* Main welcome section */}
      <div className="relative h-[82.4vh] w-full flex flex-col justify-center overflow-hidden">
        {/* Background video or image */}
        {bannerData.video?.endsWith(".mp4") ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full z-0 video-responsive"
            poster={bannerData.poster_image}
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={videoSrc}
            alt="Banner"
            className="absolute inset-0 w-full h-full z-0 video-responsive"
            loading="eager"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content - Improved mobile responsiveness */}
        <div className="relative z-20 text-white w-full px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center sm:text-left capitalize leading-tight">
              {bannerData.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-center sm:text-left max-w-2xl mx-auto sm:mx-0 leading-relaxed">
              {bannerData.content}
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-2 sm:gap-4">
              {bannerData.button1_text && bannerData.button1_url && (
                <a
                  href={bannerData.button1_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 text-center text-xs sm:text-sm md:text-base"
                >
                  {bannerData.button1_text}
                </a>
              )}
              {bannerData.button2_text && bannerData.button2_url && (
                <a
                  href={bannerData.button2_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all duration-200 text-center text-xs sm:text-sm md:text-base"
                >
                  {bannerData.button2_text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker - Mobile optimized */}
      <div
        role="region"
        aria-label="Latest announcements"

        className="bg-blue-800 text-white overflow-hidden relative py-2 "
        style={{ height: "auto", minHeight: "40px" }}

      >
        <div
          className="inline-block absolute whitespace-nowrap animate-scroll text-sm sm:text-base"
          style={{
            animation: "scrollText 15s linear infinite", // Slower on mobile
            zIndex: 0,
          }}
        >
          📢 Admissions open for 2025-26 academic session | Admissions open for 2025-26 academic session | Admissions open for 2025-26 academic session
        </div>
      </div>

      <style jsx>{`
        .video-responsive {
          object-fit: cover;
          object-position: center center;
        }

        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        /* Mobile Portrait (≤640px) */
        @media (max-width: 640px) and (orientation: portrait) {
          .video-responsive {
            object-fit: cover;
            object-position: center top;
            width: 100vw !important;
            height: 100vh !important;
          }
          
          @keyframes scrollText {
            0% {
              transform: translateX(100vw);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        }
        
        /* Mobile Landscape (≤640px) */
        @media (max-width: 640px) and (orientation: landscape) {
          .video-responsive {
            object-fit: cover;
            object-position: center center;
            width: 100vw !important;
            height: 100vh !important;
          }
        }
        
        /* Tablet Portrait (641px-1024px) */
        @media (min-width: 641px) and (max-width: 1024px) and (orientation: portrait) {
          .video-responsive {
            object-fit: cover;
            object-position: center top;
            width: 100vw !important;
            height: 100vh !important;
          }
        }
        
        /* Tablet Landscape (641px-1024px) */
        @media (min-width: 641px) and (max-width: 1024px) and (orientation: landscape) {
          .video-responsive {
            object-fit: cover;
            object-position: center center;
            width: 100vw !important;
            height: 100vh !important;
          }
        }
        
        /* Desktop/Laptop (≥1025px) - Fit without scroll */
        @media (min-width: 1025px) {
          .video-responsive {
            object-fit: cover;
            object-position: center center;
            width: 100vw !important;
            height: 100vh !important;
          }
          
          /* Ensure container doesn't exceed viewport */
          .relative {
            max-height: 100vh;
          }
        }
        
        /* Extra wide screens */
        @media (min-width: 1920px) {
          .video-responsive {
            object-fit: cover;
            object-position: center center;
          }
        }
        
        /* Handle very wide aspect ratios */
        @media (min-aspect-ratio: 16/9) {
          .video-responsive {
            object-fit: cover;
            width: 100vw !important;
            height: 100vh !important;
          }
        }
        
        /* Handle very tall aspect ratios */
        @media (max-aspect-ratio: 9/16) {
          .video-responsive {
            object-fit: cover;
            width: 100vw !important;
            height: 100vh !important;
          }
        }
        
        /* Prevent any overflow on any device */
        body, html {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}