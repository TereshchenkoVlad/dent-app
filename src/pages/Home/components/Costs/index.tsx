import CostItem from "components/CostItem";
import { SERVICES } from "data/services";
import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";

import { BigTitle, MediumText } from "styles/text";

const Costs = () => {
  return (
    <Container id="prices">
      <TitleContainer>
        <BigTitle>Вартість послуг*</BigTitle>
        <Line />
      </TitleContainer>
      <DescriptionContainer>
        <MediumText fs={18} color={theme.black}>
          *Точну суму лікування можна визначити лише після попереднього огляду.
          <br />
          На вартість впливає велика кількість факторів: матеріали та
          технології; занедбаність хвороби, розмір запалень; необхідність
          застосування анастезії
        </MediumText>
      </DescriptionContainer>

      <div>
        {SERVICES.map((item, index) => {
          const type = index % 2 ? "light" : "blue";
          return <CostItem key={item.title} type={type} item={item} />;
        })}
      </div>
    </Container>
  );
};

export default Costs;

const Container = styled.div`
  padding: 0 60px 100px 60px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionContainer = styled.div`
  max-width: 685px;
  margin: 30px 0 40px 0;
`;

const Line = styled.div`
  width: 132px;
  height: 3px;
  background-color: ${theme.mainBlue};
  border-radius: 2px;
  margin-top: 10px;
`;
