import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";
import { BigTitle, DescriptionText } from "styles/text";

const ServiceDescription = () => {
  return (
    <Container>
      <BigTitle style={{ marginTop: 53 }}>Послуги клініки</BigTitle>
      <Line />
      <DescriptionText>
        Наша стоматологічна клініка пропонує всі види лікування для дорослих та
        дітей
      </DescriptionText>
    </Container>
  );
};

export default ServiceDescription;

const first_point = 500;

const Container = styled.div`
  width: 315px;
  height: 256px;
  margin: 20px;
  user-select: none;

  @media only screen and (max-width: ${first_point}px) {
    width: 280px;
    height: 240px;
    margin: 15px;
  }
`;

const Line = styled.div`
  width: 132px;
  height: 3px;
  border-radius: 2px;
  background-color: ${theme.mainBlue};
  margin-top: 10px;
  margin-bottom: 30px;
`;
