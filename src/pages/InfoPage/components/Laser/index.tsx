import React from "react";
import styled from "styled-components";

import { Text, LabelText, List, ListItem } from "pages/InfoPage/styles";

const Laser = () => {
  return (
    <Container>
      <Text>
        Застосування лазерного апарату підвищує ефективність та якість
        стоматологічного лікування. Лазеротерапія – це прогнозований результат,
        зниження травматизму хірургічних операцій та комфорт пацієнта, адже
        лазер забезпечує мінімальний вплив на нервові закінчення, тому лікування
        практично безболісне, а реабілітаційний період прискорюється.
      </Text>
      <br />
      <LabelText>Застосування діодного лазеру:</LabelText>
      <br />
      <List>
        <ListItem>
          при лікуванні зубів (проведення ендодонтичного лікування,
          антибактеріальна обробка порожнини зуба);
        </ListItem>
        <ListItem>
          висічення капюшона при прорізуванні зубів мудрості; лікування хвороб
          пародонта;
        </ListItem>
        <ListItem>корекція вуздечок губ та язика; </ListItem>
        <ListItem>
          корекція ясен під час проведення ортодонтичного лікування та
          естетичного відновлення посмішки;
        </ListItem>
        <ListItem>відбілювання зубів.</ListItem>
      </List>
      <br />
    </Container>
  );
};

export default Laser;

const Container = styled.div``;
