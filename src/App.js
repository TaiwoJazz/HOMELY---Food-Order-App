import React from "react";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Dishes from "./components/Services/Dishes";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="font-body scroll-smooth">
      <NavBar />
      <Hero />
      <WhyChooseUs />
      <Dishes />
      <AboutUs />
    </div>
  );
}

export default App;
