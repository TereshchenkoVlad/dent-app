import React from "react";

import Header from "components/Header";
import MainImage from "components/MainImage";
import { AppConfig } from "config/applicationConfig";

const Home = () => {
  return (
    <div>
      <Header />
      <MainImage />
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
