import React from "react";

import ContactForm from "components/ContactForm";
import { usePopUpContext } from "context/popupContext";

import { Title, Container, MainImage, TextContainer } from "./styles";

import PhoneAnimation from "components/PhoneAnimation";

interface Props {
  url: string;
  title: string;
}

const MainImageInfo = ({ url, title }: Props) => {
  const { visible, onOpen } = usePopUpContext();

  return (
    <Container>
      <MainImage src={url} alt="main image" />
      <TextContainer>
        <Title>{title}</Title>
      </TextContainer>
      <div onClick={onOpen}>
        <PhoneAnimation />
      </div>
      {visible && <ContactForm />}
    </Container>
  );
};

export default MainImageInfo;
