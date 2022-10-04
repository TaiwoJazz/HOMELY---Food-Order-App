import React from "react";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="font-body scroll-smooth">
      <NavBar />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default App;
