import React from "react";

import ContactForm from "components/ContactForm";
import { usePopUpContext } from "context/popupContext";

import { SubTitle, Title, Container, MainImage, TextContainer } from "./styles";

import mainImage from "assets/images/mainImage.svg";
import PhoneAnimation from "components/PhoneAnimation";

const MainImageComponent = () => {
  const { visible, onOpen } = usePopUpContext();

  return (
    <Container>
      <MainImage src={mainImage} alt="main image" />
      <TextContainer>
        <Title>Ваша красива посмішка - в наших руках</Title>
        <SubTitle>Сімейна стоматологія лікаря Ляшука</SubTitle>
      </TextContainer>
      <div onClick={onOpen}>
        <PhoneAnimation />
      </div>
      {visible && <ContactForm />}
    </Container>
  );
};

export default MainImageComponent;
