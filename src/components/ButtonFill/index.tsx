import React from "react";
import styled from "styled-components";

import { theme } from "styles/colors";
import { NormalTitle } from "styles/text";

interface Props {
  title: string;
  onClick: () => void;
}

const ButtonFill = ({ title, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ButtonFill;

const third_point = 760;

const Container = styled.div`
  display: inline-block;
  padding: 17px;
  border-radius: 5px;
  background-color: ${theme.mainBlue};
  @media only screen and (max-width: ${third_point}px) {
    padding: 15px;
  }
`;

const Title = styled(NormalTitle)`
  @media only screen and (max-width: ${third_point}px) {
    font-size: 15px;
  }
`;
