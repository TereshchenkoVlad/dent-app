import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";
import { MediumText } from "styles/text";
import { forth_point } from "./styles";

const styles = {
  item: {
    marginBottom: 15,
  },
};

const DropMenu = () => {
  return (
    <Container>
      <MediumText style={styles.item}>Послуги</MediumText>
      <MediumText style={styles.item}>Про клініку</MediumText>
      <MediumText style={styles.item}>Лікарі</MediumText>
      <MediumText style={styles.item}>Ціни</MediumText>
      <MediumText>Контакти</MediumText>
    </Container>
  );
};

export default DropMenu;

const Container = styled.div`
  width: 120px;
  position: absolute;
  right: 0;
  top: 40px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${theme.mainBlue};

  @media only screen and (max-width: ${forth_point}px) {
    top: 30px;
  }
`;
