import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";
import { NormalTitle } from "styles/text";

const ButtonComponent = () => {
  return (
    <Container>
      <NormalTitle>Відправити</NormalTitle>
    </Container>
  );
};

export default ButtonComponent;

const second_point = 485;

const Container = styled.div`
  cursor: pointer;
  width: 220px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 2px solid ${theme.mainWhite};

  @media only screen and (max-width: ${second_point}px) {
    width: 160px;
    height: 40px;
  }
`;
