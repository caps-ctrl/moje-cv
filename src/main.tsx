import { createRoot } from "react-dom/client";
import "./index.css";
import LoadingScreen from "./pages/LoadingScreen";
import App from "./App";
import { Suspense } from "react";
createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingScreen />}>
    <App></App>
  </Suspense>
);
