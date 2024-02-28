import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import Footer from "./components/Footer";
import About from "./components/About";
import MobileFooter from "./components/MobileFooter";
import MobileHero from "./components/MobileHero";
function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 640px)").matches
  );
  
  const handleFooter = () => {
    if(window.matchMedia("(max-width: 640px)").matches){
      setIsSmallScreen(true);
    }
    else setIsSmallScreen(false);
  }
useEffect(() => {
  window.addEventListener("resize", handleFooter);
  return () => {
    window.removeEventListener("resize", handleFooter);
  };
}, []);
  
  return (
    <>
      <Header />
      {isSmallScreen ? <MobileHero /> : <Hero />}
      <OurProducts />
      <About />
      {isSmallScreen ? <MobileFooter /> : <Footer />}
    </>
  );
}

export default App;
