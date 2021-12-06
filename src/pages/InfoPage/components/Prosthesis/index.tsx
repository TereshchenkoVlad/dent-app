import React from "react";
import styled from "styled-components";

import { theme } from "styles/colors";
import { MediumText, SemiBoldText } from "styles/text";

const Prosthesis = () => {
  return (
    <Container>
      <Text>
        Протезування зубів є одним з найважливіших завдань сучасної
        стоматології, адже неповноцінність нормального харчування  викликає
        цілий ряд захворювань та змінює естетичний вигляд. Насамперед
        протезування направлено на відновлення структури повністю або частково
        втрачених зубів. При втраті хоча б одного зуба є необхідність
        протезуватися, оскільки це негативно позначиться не лише на естетиці,
        але і на організмі в цілому
      </Text>
      <br />
      <br />

      <LabelText>
        В нашій клініці ми використовуємо наступні види протезування:
      </LabelText>
      <br />
      <List>
        <ListItem>Незнімне протезування</ListItem>
        <ListItem>Знімне протезування</ListItem>
      </List>

      <br />
      <LabelText>До незнімного протезування відносяться:</LabelText>
      <br />
      <List>
        <ListItem>Металокерамічні конструкції</ListItem>
        <ListItem>Безметалева (прес) кераміка</ListItem>
        <ListItem>Кераміка на основі оксиду цирконію</ListItem>
        <ListItem>Керамічні вініри</ListItem>
        <ListItem>Протезування на імплантатах</ListItem>
        <ListItem>Керамічні вкладки</ListItem>
      </List>

      <br />
      <LabelText>
        До знімного протезування відносяться знімні пластинкові протези 
      </LabelText>
      <br />
      <Text>
        Детальніше про всі варіанти протезування саме у Вашому випадку
        розповість наш лікар на консультації. «Стоматологія лікаря Ляшука» надає
        всі види послуг по ортопедичній стоматології.
      </Text>
    </Container>
  );
};

export default Prosthesis;

const Container = styled.div`
  padding: 0 60px 50px 60px;
`;

const Text = styled(MediumText)`
  color: ${theme.black};
  font-size: 20px;
  text-align: justify;
`;

const LabelText = styled(SemiBoldText)`
  color: ${theme.black};
  font-size: 24px;
  text-align: justify;
`;

const List = styled.ul`
  list-style-position: inside;
  padding-left: 10px;
`;
const ListItem = styled.li`
  color: ${theme.black};
  font-size: 20px;
  font-family: Gilroy-Medium;
`;
