import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/UI/Header";
import GlobalAudio from "./components/UI/GlobalAudio";

import Home from "./pages/Home";
import FavoritePage from "./pages/Favorite";
import ShowDetail from "./pages/ShowDetail";

import { PodcastProvider } from "./context/PodcastContext";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";

// Determines the starting theme when the app loads
const loadTheme = () => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    return storedTheme;
  }

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return prefersDarkMode ? "dark" : "light";
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(loadTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((theme) =>
      theme === "light" ? "dark" : "light"
    );
  };

  return (
    <PodcastProvider>
      <AudioPlayerProvider>
        <Header
          theme={currentTheme}
          onToggleTheme={toggleTheme}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>

        <GlobalAudio />
      </AudioPlayerProvider>
    </PodcastProvider>
  );
}