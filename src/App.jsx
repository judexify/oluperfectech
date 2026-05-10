import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Faq from "./Sections/FAQ/faq";
import Footer from "./Sections/Footer/Footer";
import Hero from "./Sections/Hero/Hero";
import HowItWorks from "./Sections/HowItWorks/HowItWorks";
import Services from "./Sections/OurServices/Services";
import Pricing from "./Sections/Pricing/Pricing";
import Form from "./Components/Form/form";

function App() {
  return <AppComponents />;
}

function AppComponents() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
