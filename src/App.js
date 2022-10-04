import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="font-body">
      <NavBar />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default App;
