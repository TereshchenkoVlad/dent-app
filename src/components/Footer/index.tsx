import React from "react";

import { MediumText } from "styles/text";
import {
  Block,
  Container,
  Logo,
  MessengerIcon,
  Social,
  ViberIcon,
} from "./styles";

import logoLight from "assets/images/logoLight.svg";
import viberIcon from "assets/images/icons/viber.svg";
import messengerIcon from "assets/images/icons/messenger.svg";

const styles = {
  navText: {
    marginRight: 80,
  },
  guarantee: { marginBottom: 15 },
};

const Footer = () => {
  return (
    <Container>
      <Block>
        <Logo src={logoLight} alt="logo light" />
        <MediumText fs={16}>
          Пн-Пт 9.00-19.00
          <br /> Сб 9.00-16.00
        </MediumText>
        <MediumText fs={16}>
          (096) 020-52-00
          <br /> liashukdent@gmail.com
        </MediumText>
        <MediumText fs={16}>
          Софіївська Борщагівка, ЖК «Софія», вул. Миру 30/18
        </MediumText>
        <Social>
          <ViberIcon src={viberIcon} alt="viber" />
          <MessengerIcon src={messengerIcon} alt="messenger" />
        </Social>
      </Block>

      <Block align="center">
        <MediumText style={styles.navText} fs={16}>
          Послуги
        </MediumText>
        <MediumText style={styles.navText} fs={16}>
          Про клініку
        </MediumText>
        <MediumText style={styles.navText} fs={16}>
          Лікарі
        </MediumText>
        <MediumText style={styles.navText} fs={16}>
          Ціни
        </MediumText>
        <MediumText fs={16}>Контакти</MediumText>
      </Block>

      <Block>
        <MediumText fs={16}>2021 Стоматологія лікаря Ляшука</MediumText>
        <div>
          <MediumText style={styles.guarantee} fs={16}>
            Гарантійні умови
          </MediumText>
          <MediumText fs={16}>Публічний договір ФОП Ляшук</MediumText>
        </div>
      </Block>
    </Container>
  );
};

export default Footer;
