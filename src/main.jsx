import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider
    publishableKey="pk_test_aW5zcGlyZWQtbmFyd2hhbC0yNi5jbGVyay5hY2NvdW50cy5kZXYk"
    afterSignOutUrl="/"
  >
    <App />
  </ClerkProvider>
);
