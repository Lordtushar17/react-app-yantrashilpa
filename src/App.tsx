import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import StatsSection from "./components/StatsSection";
import WeProvide from "./components/WeProvide";
import ProductsSection from "./components/ProductsSection";
import OurValues from "./components/OurValues";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <StatsSection />
      <WeProvide />
      <ProductsSection />
      <OurValues />
      <Footer />
    </div>
  );
}

export default App;
