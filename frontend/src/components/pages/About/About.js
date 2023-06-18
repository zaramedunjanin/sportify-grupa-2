import React from "react";

import Navbar from "../../organisms/Navbar/Navbar";
import Footer from "../../organisms/Footer/Footer";
import AboutContent from "./AboutItems/AboutContent";
import { AboutImages } from "./AboutImages/AboutImages";
import useEffectTitle from "../../../hooks/useEffectTitle";

const About = () => {
    useEffectTitle("About us | Sportify")
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
