import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import { useWidth } from "./hooks/useWidth";
import { Helmet } from "@dr.pogodin/react-helmet";
import { useTheme } from "./hooks/useTheme";

const Home = React.lazy(() => import("./pages/Home"));
const AboutMe = React.lazy(() => import("./pages/AboutMe"));
const Skills = React.lazy(() => import("./pages/Skills"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Contact = React.lazy(() => import("./pages/Contact"));
const RootLayout = React.lazy(() => import("./Layout/RootLayout"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const MobileHome = React.lazy(() => import("./pages/MobileHome"));

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
  const width = useWidth();
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
                {width < 768 ? <MobileHome></MobileHome> : <Home />}
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
  const { theme } = useTheme();
  useEffect(() => {
    const metaThemeColor =
      document.querySelector("meta[name=theme-color]") ||
      Object.assign(document.createElement("meta"), { name: "theme-color" });

    if (!document.head.contains(metaThemeColor)) {
      document.head.appendChild(metaThemeColor);
    }

    const getColor = () => {
      if (theme === "light") return "#ffffff";
      if (theme === "dark") return "#111827";
      if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "#111827"
          : "#ffffff";
      }
    };

    metaThemeColor.setAttribute("content", getColor() ?? "#fff");
    const listener = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        metaThemeColor.setAttribute(
          "content",
          e.matches ? "#111827" : "#ffffff"
        );
      }
    };

    const media = matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [theme]);

  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Moje Portfolio</title>
        <meta name="author" content="Marcel" />
        <meta
          name="description"
          content="Portfolio pokazujące moje projekty React"
        />
        <meta property="og:title" content="Moje Portfolio – Projekty" />
        <meta
          property="og:description"
          content="Zbiór moich projektów React i JavaScript."
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Moje Portfolio – Projekty" />
        <meta
          name="twitter:description"
          content="Zbiór moich projektów React i JavaScript."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:site" content="@TwojTwitter" />
      </Helmet>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
