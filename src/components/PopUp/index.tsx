import React from "react";

import { usePopUpContext } from "context/popupContext";

import ButtonComponent from "components/Button";

import {
  Filter,
  Container,
  PopUpText,
  CloseIcon,
  PopUpTitle,
  CloseWrapper,
} from "./styles";

import closeIcon from "assets/images/icons/close.png";

const PopUp = () => {
  const { onClosePopup } = usePopUpContext();

  return (
    <Filter>
      <Container>
        <CloseWrapper onClick={onClosePopup}>
          <CloseIcon src={closeIcon} alt="close" />
        </CloseWrapper>
        <PopUpTitle>Дякуємо за запит!</PopUpTitle>
        <PopUpText>Ми зателефонуємо Вам протягом 15 хвилин</PopUpText>
        <ButtonComponent title="Добре" onClick={onClosePopup} />
      </Container>
    </Filter>
  );
};

export default PopUp;
