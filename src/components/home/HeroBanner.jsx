import React from "react";
import homeData from "../../Data/home.json";

export default function WelcomePage() {
  const bannerData = homeData?.sections?.banner?.[0] || null;
  const BASE = (import.meta.env.VITE_HOST || "").replace(/\/$/, "");

  const resolveAssetUrl = (path) => {
    if (!path) return "";
    if (/^https?:\/\//i.test(path)) return path;
    if (path.startsWith("/")) return path;
    const cleanPath = path.replace(/^\/+/, "");
    if (BASE) {
      return `${BASE}/${cleanPath.startsWith("media/") ? cleanPath : `media/${cleanPath}`}`;
    }
    return `/${cleanPath}`;
  };

  if (!bannerData) return null;

  const videoSrc = resolveAssetUrl(bannerData.video);

  return (
    <>
      {/* Main welcome section */}
      <div className="relative h-[82.4vh] w-full flex flex-col justify-center  overflow-hidden">
        {/* Background video or image */}
        {bannerData.video?.endsWith(".mp4") ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full z-0 video-responsive -mt-18"
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