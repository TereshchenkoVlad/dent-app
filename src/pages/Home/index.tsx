import React from "react";

import Header from "components/Header";
import Services from "components/Services";
import MainImage from "components/MainImage";
import { AppConfig } from "config/applicationConfig";
import AboutCompany from "./components/AboutCompany";
import Dentists from "./components/Dentists";

const Home = () => {
  return (
    <div>
      <Header />
      <MainImage />
      <Services />
      <AboutCompany />
      <Dentists />
      <iframe
        width="100%"
        height="528"
        loading="lazy"
        title="lyashchuk"
        style={{ border: 0 }}
        src={AppConfig.google_api}
      />
    </div>
  );
};

export default Home;
