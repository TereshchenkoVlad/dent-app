import React from "react";
import styled from "styled-components";

import { theme } from "styles/colors";
import { SemiBoldText, MediumText } from "styles/text";

import { CostType } from "data/services";

interface Props {
  item: CostType;
  type: "light" | "blue";
}

const CostItem = ({ item, type }: Props) => {
  const price = item.price.to
    ? `${item.price.from} - ${item.price.to}`
    : item.price.from;
  return (
    <Container type={type}>
      <Label className="cost-item_text">{item.title}</Label>
      <Price className="cost-item_text">від {price} грн</Price>
    </Container>
  );
};

export default CostItem;

const second_point = 580;

interface StyledProps {
  type: "light" | "blue";
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 30px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  background-color: ${({ type }: StyledProps) =>
    type === "light" ? theme.mainWhite : theme.blueTransparent};
  &:hover {
    background-color: ${theme.mainBlue};
  }
  &:hover .cost-item_text {
    color: ${theme.mainWhite};
  }

  @media only screen and (max-width: ${second_point}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Label = styled(SemiBoldText)`
  flex: 1;
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
