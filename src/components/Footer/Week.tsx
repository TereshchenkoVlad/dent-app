import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";
import { MediumText, SemiBoldText } from "styles/text";

interface Props {
  label: string;
  text: string;
}

const Week = ({ text, label }: Props) => {
  return (
    <Container>
      <SemiBoldText fs={16} color={theme.mainWhite}>
        {label}&ensp;
      </SemiBoldText>
      <MediumText fs={16}>{text}</MediumText>
    </Container>
  );
};

export default Week;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
