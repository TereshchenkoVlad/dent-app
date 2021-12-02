import React from "react";
import styled from "styled-components";

import { theme } from "styles/colors";
import { SemiBoldText, MediumText } from "styles/text";

import { SeviceType } from "data/services";

interface Props {
  item: SeviceType;
  type: "light" | "blue";
}

const CostItem = ({ item, type }: Props) => {
  const backgroundColor =
    type === "light" ? theme.mainWhite : theme.blueTransparent;

  return (
    <Container style={{ backgroundColor }}>
      <Label>{item.title}</Label>
      <Price>від {item.cost} грн</Price>
    </Container>
  );
};

export default CostItem;

const second_point = 580;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 30px;
  border-radius: 5px;
  @media only screen and (max-width: ${second_point}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Label = styled(SemiBoldText)`
  font-size: 18px;
  @media only screen and (max-width: ${second_point}px) {
    margin-bottom: 10px;
    text-align: center;
  }
`;

const Price = styled(MediumText)`
  font-size: 18px;
  color: ${theme.greyDark};
`;
