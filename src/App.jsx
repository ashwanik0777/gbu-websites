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

  useEffect(() => {
    if (isPreloadComplete) {
      localStorage.setItem("preloadComplete", "true");
    }
  }, [isPreloadComplete]);


  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {!isPreloadComplete ? (
          <PreLoad onComplete={() => setIsPreloadComplete(true)} />
        ) : (
          <>
          <ScrollToTop>
            {!isFacultyPortalPage && <Primarynavbar />}
            {!isFacultyPortalPage &&
              (isICTPage ? (
                <div className="mt-9">
                  <DepartmentNavbar />
                </div>
              ) : (
                <Navbar />
              ))}
            <div className={isFacultyPortalPage ? "pt-0" : isICTPage ? "pt-8" : "pt-[6.3rem]"}>
              <AppRouter />
            </div>
            {!isFacultyPortalPage && <Footer />}
            </ScrollToTop>
          </>
        )}
      </Suspense>
    </div>
  );
}

export default App;
