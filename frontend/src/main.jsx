import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx" // ✅ import your provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>   {/* ✅ Wrap everything here */}
      <App />
    </AuthProvider>
  </StrictMode>
);
