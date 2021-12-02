import React from "react";

import styled from "styled-components";
import { SmallBold } from "styles/text";

import telegramIcon from "assets/images/icons/telegram.svg";
import telegramIconLight from "assets/images/icons/telegram_light.svg";
import { theme } from "styles/colors";

interface Props {
  type: "light" | "dark";
  style?: React.CSSProperties;
}

const CallBack = ({ type, style }: Props) => {
  return (
    <Container style={style}>
      <TelegramIcon
        src={type === "light" ? telegramIconLight : telegramIcon}
        alt="telegram"
      />
      <SmallBold color={type === "light" ? theme.mainBlue : theme.mainWhite}>
        Відповідаємо протягом 15 хвилин
      </SmallBold>
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
