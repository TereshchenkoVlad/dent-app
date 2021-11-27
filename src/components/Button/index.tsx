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

const Container = styled.div`
  width: 220px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 2px solid ${theme.mainWhite};
`;
