import { createRoot } from "react-dom/client";
import "./index.css";
import LoadingScreen from "./pages/LoadingScreen";
import App from "./App";
import { Suspense } from "react";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingScreen />}>
    <HelmetProvider>
      <App></App>
    </HelmetProvider>
  </Suspense>
);
