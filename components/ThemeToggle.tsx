"use client";

import { useSyncExternalStore } from "react";

type ThemeMode = "auto" | "light" | "dark";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): ThemeMode {
  return (localStorage.getItem("theme") as ThemeMode) || "auto";
}

function getServerSnapshot(): ThemeMode {
  return "auto";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const cycleTheme = () => {
    const nextTheme: ThemeMode =
      theme === "auto" ? "dark" : theme === "dark" ? "light" : "auto";

    const root = document.documentElement;
    if (nextTheme === "auto") {
      root.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    } else {
      root.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="theme-btn"
      title={`Current mode: ${theme}. Click to switch.`}
      aria-label={`Current mode: ${theme}. Click to switch theme.`}
    >
      Mode: {theme}
    </button>
  );
}
