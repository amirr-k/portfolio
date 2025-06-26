import React, { useState, useEffect } from 'react';
import NavigationBar from "./navigation";
import Homepage from "./homepage";
import AboutMe from "./about";
import Projects from "./Projects";
import Gallery from "./gallery";
import ContactMe from "./contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    // Phase 1: Show bar for 1000ms
    const loadingTime = 1000;
    const holdTime = 500; // Time to show only Amir Kiadi after bar
    document.documentElement.style.setProperty('--loading-duration', `${loadingTime}ms`);
    const barTimer = setTimeout(() => {
      setShowBar(false); // Hide bar, show only Amir Kiadi
      // Phase 2: Hold Amir Kiadi for 500ms
      const holdTimer = setTimeout(() => {
      setIsLoading(false);
      }, holdTime);
      return () => clearTimeout(holdTimer);
    }, loadingTime);
    return () => clearTimeout(barTimer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <h1 className="loading-name">Amir Kiadi</h1>
          {showBar && (
            <div className="loading-bar fade-bar">
            <div className="loading-progress"></div>
          </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <NavigationBar />
      <section id="home"><Homepage /></section>
      <section id="about"><AboutMe /></section>
      <section id="projects"><Projects /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><ContactMe /></section>
    </>
  );
}

export default App;