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
  transition: all 0.3s ease;
  user-select: none;

  &:hover {
    box-shadow: 4px 4px 8px 0px rgba(255, 255, 255, 0.5);
  }

  @media only screen and (max-width: ${second_point}px) {
    width: 160px;
    height: 40px;
  }
`;
