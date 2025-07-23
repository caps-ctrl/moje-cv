import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import RootLayout from "./Layout/RootLayout";
import NotFound from "./components/NotFound";

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  const element = useRoutes(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: (
              <PageWrapper>
                <Home />
              </PageWrapper>
            ),
          },
          {
            path: "aboutme",
            element: (
              <PageWrapper>
                <AboutMe />
              </PageWrapper>
            ),
          },
          {
            path: "skills",
            element: (
              <PageWrapper>
                <Skills />
              </PageWrapper>
            ),
          },
          {
            path: "projects",
            element: (
              <PageWrapper>
                <Projects />
              </PageWrapper>
            ),
          },
          {
            path: "contact",
            element: (
              <PageWrapper>
                <Contact />
              </PageWrapper>
            ),
          },
          {
            path: "*",
            element: (
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            ),
          },
        ],
      },
    ],
    location
  );

  return (
    <AnimatePresence mode="wait" initial={false}>
      <React.Fragment key={location.pathname}>{element}</React.Fragment>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
