import { SeviceType } from "data/services";
import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";
import { SemiBoldText } from "styles/text";

interface Props {
  item: SeviceType;
  type: "light" | "blue";
}

const CostItem = ({ item, type }: Props) => {
  const backgroundColor =
    type === "light" ? theme.mainWhite : theme.blueTransparent;

  return (
    <Container style={{ backgroundColor }}>
      <SemiBoldText fs={18}>{item.title}</SemiBoldText>
      <SemiBoldText fs={18}>від {item.cost} грн</SemiBoldText>
    </Container>
  );
};

export default CostItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 30px;
  border-radius: 5px;
`;
