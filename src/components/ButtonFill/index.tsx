import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";
import { NormalTitle } from "styles/text";

interface Props {
  title: string;
}

const ButtonFill = ({ title }: Props) => {
  return (
    <Container>
      <NormalTitle>{title}</NormalTitle>
    </Container>
  );
};

export default ButtonFill;

const Container = styled.div`
  width: 279px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${theme.mainBlue};
`;
