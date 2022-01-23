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

const PopUpWeekend = () => {
  const { onCloseWeekendPopup } = usePopUpContext();

  return (
    <Filter>
      <Container>
        <CloseWrapper onClick={onCloseWeekendPopup}>
          <CloseIcon src={closeIcon} alt="close" />
        </CloseWrapper>
        <PopUpTitle>Ми на канікулах</PopUpTitle>
        <PopUpText>
          У зв‘язку з новорічними та різдвяними святами «Стоматологія лікаря
          Ляшука йде на канікули з 31.12.21 по 9.01.22. Запис ведемо та
          відповідаємо на дзвінки! Гарних свят та чекаємо на вас в новому році!
        </PopUpText>
        <ButtonComponent title="Добре" onClick={onCloseWeekendPopup} />
      </Container>
    </Filter>
  );
};

export default PopUpWeekend;
