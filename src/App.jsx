import React, { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Route, Routes } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/Home";
import Navber from "./Components/Navber";
import MouseFollower from "./Components/MouseFlower";
import Loader from "./Components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setLoading(false);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 500);
  };

  // Loader চললে শুধু Loader render হবে
  if (loading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return (
    <>
      <SpeedInsights />

      <Navber />
      <MouseFollower />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;