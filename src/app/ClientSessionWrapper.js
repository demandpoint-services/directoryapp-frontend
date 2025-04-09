// app/ClientSessionWrapper.js (Client Component)
"use client";

// import { SessionProvider } from "next-auth/react";
import ThemeWrapper from "../components/ThemeWrapper";

export default function ClientSessionWrapper({ children }) {
  return (
    // <SessionProvider>
    <ThemeWrapper>{children}</ThemeWrapper>
    // </SessionProvider>
  );
}
