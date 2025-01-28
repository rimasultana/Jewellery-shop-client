import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Router";
import AuthProvider from "./provider/authprovider";
import { Toaster } from "react-hot-toast";
import Marquee from "react-fast-marquee";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
      <Marquee/>
    </AuthProvider>
  </StrictMode>
);
