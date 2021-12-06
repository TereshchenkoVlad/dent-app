import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AppConfig } from "config/applicationConfig";

import Header from "components/Header";
import Footer from "components/Footer";
import Costs from "components/Costs";
import MainImage from "components/MainImage";
import Dentists from "./components/Dentists";
import Services from "./components/Services";
import AboutCompany from "./components/AboutCompany";
import { CostType, EnumSeviceID, SERVICES } from "data/services";
import { toTop } from "helpers/toTop";

const Home = () => {
  const navigate = useNavigate();

  const onServicePress = (id: EnumSeviceID) => {
    navigate(`/info/${id}`);
  };

  useEffect(() => {
    toTop();
  }, []);

  const costs: CostType[] = SERVICES.map((service) => ({
    price: {
      from: service.cost,
    },
    title: service.title,
  }));

  return (
    <div>
      <Header />
      <MainImage />
      <Services onServicePress={onServicePress} />
      <AboutCompany />
      <Dentists />
      <Costs costs={costs} />
      <iframe
        id="contact"
        width="100%"
        height="528"
        loading="lazy"
        title="lyashchuk"
        style={{ border: 0 }}
        src={AppConfig.google_api}
      />
      <Footer />
    </div>
  );
};

export default Home;
