import React from "react";
import "./Homepage.scss";
import Products from "../../components/Products/products.jsx";
import Mission from "../../components/Mission/mission.jsx";
import Contact from "../../components/Contact/contact.jsx";
import Background from "../../components/Background/Background";
import Hero from "../../components/Hero/Hero";

import { useState, useEffect } from "react";

const Homepage = () => {
  const heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 100000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="hero-home-container">
        <Background heroCount={heroCount} />
        <Hero
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
        />
      </div>
      <Products />
      <Mission />
      <Contact />
    </div>
  );
};

export default Homepage;
