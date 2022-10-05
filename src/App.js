import React from "react";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Dishes from "./components/OurDishes/Dishes";
import AboutUs from "./components/AboutUs/AboutUs";
import GetOurMobile from "./components/AboutUs/GetOurMobile";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-body scroll-smooth">
      <NavBar />
      <Hero />
      <WhyChooseUs />
      <Dishes />
      <AboutUs />
      <GetOurMobile />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
