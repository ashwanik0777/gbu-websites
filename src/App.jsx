import { useEffect, useState, Suspense } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "./routes/router";
import PreLoad from "../src/components/home/preLoad.jsx";
import Primarynavbar from "../src/components/home/Primarynavbar.jsx";
import Navbar from "../src/components/home/Navbar.jsx";
import DepartmentNavbar from "../src/components/departments/Navbar.jsx";
import Footer from "../src/components/home/Footer.jsx";
import ScrollToTop from "./hooks/scrollToTop.jsx";

function App() {
  const [isPreloadComplete, setIsPreloadComplete] = useState(() => {
    return localStorage.getItem("preloadComplete") === "true";
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
  });

  const location = useLocation();
  const isICTPage = location.pathname.startsWith("/schools");
  const isFacultyPortalPage = location.pathname.startsWith("/faculty-portal");
  const isSchoolPortalPage = location.pathname.startsWith("/school-portal");
  const isAdminPortalPage = location.pathname.startsWith("/admin-portal");
  const isPortalPage =
    isFacultyPortalPage || isSchoolPortalPage || isAdminPortalPage;

  useEffect(() => {
    if (isPreloadComplete) {
      localStorage.setItem("preloadComplete", "true");
    }
  }, [isPreloadComplete]);

  const Loader = () => (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="animate-pulse text-lg tracking-widest">
        🙏🏽 Welcome to Gautam Buddha University! 🙏🏽
      </div>
    </div>
  );

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        {" "}
        {!isPreloadComplete ? (
          <PreLoad onComplete={() => setIsPreloadComplete(true)} />
        ) : (
          <>
            <ScrollToTop>
              {!isPortalPage && <Primarynavbar />}
              {!isPortalPage &&
                (isICTPage ? (
                  <div className="mt-10">
                    <DepartmentNavbar />
                  </div>
                ) : (
                  <Navbar />
                ))}
              <div
                className={`transition-all duration-500 ${isPortalPage ? "pt-0" : isICTPage ? "pt-8" : "pt-[6.3rem]"}`}
              >
                <AppRouter />
              </div>
              {!isPortalPage && <Footer />}
            </ScrollToTop>
          </>
        )}
      </Suspense>
    </div>
  );
}

export default App;
