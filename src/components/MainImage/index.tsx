import React from "react";

import ContactForm from "components/ContactForm";
import { usePopUpContext } from "context/popupContext";

import { SubTitle, Title, Container, MainImage, TextContainer } from "./styles";

import mainImage from "assets/images/mainImage.png";
import PhoneAnimation from "components/PhoneAnimation";

const MainImageComponent = () => {
  const { formVisible, onOpenForm } = usePopUpContext();

  return (
    <Container>
      <MainImage src={mainImage} alt="main image" />
      <TextContainer>
        <Title>Ваша красива посмішка - в наших руках</Title>
        <SubTitle>Сімейна стоматологія лікаря Ляшука</SubTitle>
      </TextContainer>
      <div onClick={onOpenForm}>
        <PhoneAnimation />
      </div>
      {formVisible && <ContactForm />}
    </Container>
  );
};

export default MainImageComponent;
