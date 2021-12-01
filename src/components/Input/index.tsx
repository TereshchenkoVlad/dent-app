import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";

import { MediumText } from "styles/text";

interface Props {
  label: string;
}

const InputComponent = ({ label }: Props) => {
  return (
    <Container>
      <MediumText>{label}</MediumText>
      <Input />
    </Container>
  );
};

export default InputComponent;

const second_point = 485;

const Container = styled.div`
  margin-bottom: 25px;
  @media only screen and (max-width: ${second_point}px) {
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  width: 320px;
  border: none;
  outline: none;
  height: 50px;
  border-radius: 5px;
  background-color: ${theme.mainWhite};
  margin-top: 10px;

  @media only screen and (max-width: ${second_point}px) {
    width: 260px;
    height: 40px;
  }
`;
