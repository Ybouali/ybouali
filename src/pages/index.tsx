import { motion, AnimatePresence } from "framer-motion";
import { PagesNavBar } from "../components";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import Main from "./Main";
import NotFound from "./NotFound";
import { useAppContext } from "../context/useAppContext";

const ContactMe = lazy(() => import("./contactMe"));
const Educations = lazy(() => import("./educations"));
const Projects = lazy(() => import("./projects"));
const WhoIAm = lazy(() => import("./whoIAm"));
const Blogs = lazy(() => import("./blogs"));
const CvPage = lazy(() => import("./cv"));
const Certificates = lazy(() => import("./certificates"));

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.2 }}
    className="h-full"
  >
    {children}
  </motion.div>
);

const HomeTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="h-full"
  >
    {children}
  </motion.div>
);

const PageFallback = () => (
  <div className="flex items-center justify-center h-full font-mono text-sm text-owl-text-muted">
    <span className="animate-pulse">{"// loading..."}</span>
  </div>
);

function Pages() {
  const { pagesInNavbar, pages, setPagesInNavbar } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setPagesInNavbar((prev) => prev.map((p) => ({ ...p, selected: false })));
      return;
    }

    const pageForRoute = pages.find(
      (p) =>
        p.path === location.pathname ||
        (p.path !== "/" && location.pathname.startsWith(`${p.path}/`)),
    );
    if (pageForRoute) {
      setPagesInNavbar((prev) => {
        const exists = prev.find((p) => p.page_name === pageForRoute.page_name);
        const newNavbar = exists ? prev : [...prev, pageForRoute];
        return newNavbar.map((p) => ({
          ...p,
          selected:
            p.path === pageForRoute.path ||
            location.pathname.startsWith(`${p.path}/`),
        }));
      });
    }
  }, [location.pathname, pages, setPagesInNavbar]);

  return (
    <main className="flex flex-col flex-1 h-full overflow-hidden bg-owl-bg text-owl-text">
      {pagesInNavbar.length > 0 && <PagesNavBar />}

      <div className="flex-1 overflow-y-auto custom-scrollbar p-0 relative">
        <Suspense fallback={<PageFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <HomeTransition>
                    <Main />
                  </HomeTransition>
                }
              />
              <Route
                path="/who-i-am"
                element={
                  <PageTransition>
                    <WhoIAm />
                  </PageTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <Projects />
                  </PageTransition>
                }
              />
              <Route
                path="/projects/:id"
                element={
                  <PageTransition>
                    <Projects />
                  </PageTransition>
                }
              />
              <Route
                path="/education"
                element={
                  <PageTransition>
                    <Educations />
                  </PageTransition>
                }
              />
              <Route
                path="/certificates"
                element={
                  <PageTransition>
                    <Certificates />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <ContactMe />
                  </PageTransition>
                }
              />
              <Route
                path="/blog"
                element={
                  <PageTransition>
                    <Blogs />
                  </PageTransition>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <PageTransition>
                    <Blogs />
                  </PageTransition>
                }
              />
              <Route
                path="/cv"
                element={
                  <PageTransition>
                    <CvPage />
                  </PageTransition>
                }
              />
              <Route
                path="*"
                element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
    </main>
  );
}

export default Pages;
