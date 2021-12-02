import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";

import { MediumText } from "styles/text";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputComponent = ({ label, error, ...rest }: Props) => {
  const border = error ? `1px solid ${theme.red}` : "none";

  return (
    <Container>
      <MediumText>{label}</MediumText>
      <Input style={{ border }} {...rest} />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default InputComponent;

const second_point = 485;

const Container = styled.div`
  position: relative;
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

const Error = styled(MediumText)`
  font-size: 12px;
  position: absolute;
  bottom: -18px;
  left: 5px;
  color: ${theme.red};
`;
