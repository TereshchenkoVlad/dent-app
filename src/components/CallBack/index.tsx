import React from "react";

import styled from "styled-components";
import { SmallBold } from "styles/text";

import telegramIcon from "assets/images/icons/telegram.svg";

const CallBack = () => {
  return (
    <Container>
      <TelegramIcon src={telegramIcon} alt="telegram" />
      <SmallBold>Відповідаємо протягом 15 хвилин</SmallBold>
    </Container>
  );
};

export default CallBack;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TelegramIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
`;
