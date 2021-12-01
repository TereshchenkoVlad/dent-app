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

const Container = styled.div`
  width: 315px;
  height: 256px;
  margin: 20px;
  user-select: none;
`;

const Line = styled.div`
  width: 132px;
  height: 3px;
  border-radius: 2px;
  background-color: ${theme.mainBlue};
  margin-top: 10px;
  margin-bottom: 30px;
`;
