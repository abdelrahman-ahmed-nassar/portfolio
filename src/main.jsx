import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 500,
  once: true,
  easing: "ease-in-out",
  mirror: false,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
