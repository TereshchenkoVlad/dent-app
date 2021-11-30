import React from "react";

import ContactForm from "components/ContactForm";

import { Container, MainImage } from "./styles";

import mainImage from "assets/images/mainImage.svg";
import PhoneAnimation from "components/PhoneAnimation";

const MainImageComponent = () => {
  return (
    <Container>
      <MainImage src={mainImage} alt="main image" />
      <PhoneAnimation />
      <ContactForm />
    </Container>
  );
};

export default MainImageComponent;
