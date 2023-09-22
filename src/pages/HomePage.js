import React from "react";
import Footer from "../components/Common/Footer/Footer";
import Header from "../components/Common/Header/Header";
import LandingPageComponent from "../components/LandingPage/Intro";

const HomePage = () => {
  return (
    <div>
      <Header />
      <LandingPageComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
