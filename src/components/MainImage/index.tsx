import React from "react";

import ContactForm from "components/ContactForm";

import { Container, MainImage, CallImage } from "./styles";

import mainImage from "assets/images/mainImage.svg";
import callImage from "assets/images/icons/call_button.svg";

const MainImageComponent = () => {
  return (
    <Container>
      <MainImage src={mainImage} alt="main image" />
      <CallImage src={callImage} alt="call" />
      <ContactForm />
    </Container>
  );
};

export default MainImageComponent;
