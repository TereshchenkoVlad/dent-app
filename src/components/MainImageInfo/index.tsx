import React from "react";

import ContactForm from "components/ContactForm";
import { usePopUpContext } from "context/popupContext";

import { Title, Container, MainImage, TextContainer } from "./styles";

import PhoneAnimation from "components/PhoneAnimation";

import defaultImage from "assets/images/services/prosthesis_big.png";

interface Props {
  url: string;
  title: string;
}

const MainImageInfo = ({ url, title }: Props) => {
  const { formVisible, onOpenForm } = usePopUpContext();

  return (
    <Container>
      <MainImage src={url ? url : defaultImage} alt="main image" />
      <TextContainer>
        <Title>{title}</Title>
      </TextContainer>
      <div onClick={onOpenForm}>
        <PhoneAnimation />
      </div>
      {formVisible && <ContactForm />}
    </Container>
  );
};

export default MainImageInfo;
