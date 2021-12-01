import React from "react";

import { AppConfig } from "config/applicationConfig";

import Header from "components/Header";
import Footer from "components/Footer";
import Costs from "./components/Costs";
import MainImage from "components/MainImage";
import Dentists from "./components/Dentists";
import Services from "./components/Services";
import AboutCompany from "./components/AboutCompany";

const Home = () => {
  return (
    <div>
      <Header />
      <MainImage />
      {/* <Services />
      <AboutCompany />
      <Dentists />
      <Costs />
      <iframe
        id="contact"
        width="100%"
        height="528"
        loading="lazy"
        title="lyashchuk"
        style={{ border: 0 }}
        src={AppConfig.google_api}
      />
      <Footer /> */}
    </div>
  );
};

export default Home;
