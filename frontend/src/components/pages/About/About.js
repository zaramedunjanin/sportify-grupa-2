import React from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";
import AboutContent from "./AboutItems/AboutContent";
import { AboutImages } from "./AboutImages/AboutImages";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContent />
      <AboutImages />
      <Footer />
    </>
  );
};

export default About;
