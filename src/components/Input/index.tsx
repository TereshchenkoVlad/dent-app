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

const Container = styled.div`
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 320px;
  border: none;
  outline: none;
  height: 50px;
  border-radius: 5px;
  background-color: ${theme.mainWhite};
  margin-top: 10px;
`;
