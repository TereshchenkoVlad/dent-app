import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import MetaTags from "react-meta-tags";

import Header from "components/Header";
import MainImageInfo from "components/MainImageInfo";
import Footer from "components/Footer";
import { EnumSeviceID, SERVICES } from "data/services";
import Costs from "components/Costs";
import BackHome from "components/BackHome";
import { BackHomeWrapper, ChildrenContainer } from "./styles";
import { toTop } from "helpers/toTop";

const InfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);

  const toHome = () => {
    navigate("/");
  };

  useEffect(() => {
    toTop();
  }, []);

  useEffect(() => {
    if (service) {
      document.title = service.title;
    }
  }, [service]);

  if (!service) return null;

  return (
    <React.Fragment>
      <MetaTags>
        <meta
          id="meta-description"
          name="description"
          content={service.description}
        />
        <meta id="og-image" property="og:image" content={service.imageURL} />
      </MetaTags>
      <Header />
      <MainImageInfo url={service.bigImageURL} title={service.title} />
      <BackHomeWrapper>
        <BackHome onClick={toHome} />
      </BackHomeWrapper>
      {service.children && (
        <ChildrenContainer>{service.children}</ChildrenContainer>
      )}
      {service.costs && (
        <Costs
          hideText={service.id === EnumSeviceID.orthodontics}
          costs={service.costs}
        />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default InfoPage;
