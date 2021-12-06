import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";
import { BigTitle, MediumText } from "styles/text";

const ServiceDescription = () => {
  return (
    <Container>
      <Title>Послуги клініки</Title>
      <Line />
      <Text>
        Наша стоматологічна клініка пропонує всі види лікування для дорослих та
        дітей
      </Text>
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
    height: 140px;
    margin: 15px;
  }
`;

const Title = styled(BigTitle)`
  margin-top: 53px;
  @media only screen and (max-width: ${first_point}px) {
    font-size: 20px;
    margin-top: 0;
  }
`;

const Text = styled(MediumText)`
  color: ${theme.black};
  font-size: 18px;
  @media only screen and (max-width: ${first_point}px) {
    font-size: 16px;
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
