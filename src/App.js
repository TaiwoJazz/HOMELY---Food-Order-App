import React from "react";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Dishes from "./components/Services/Dishes";

function App() {
  return (
    <div className="font-body scroll-smooth">
      <NavBar />
      <Hero />
      <AboutUs />
      <Dishes />
    </div>
  );
}

export default App;
