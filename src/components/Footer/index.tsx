import React from "react";

import Week from "./Week";

import {
  Logo,
  Block,
  Social,
  LinkText,
  Container,
  ViberIcon,
  MessengerIcon,
  LocationText,
} from "./styles";
import { MediumText } from "styles/text";

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
        <div>
          <Week label="Пн-Пт" text="9.00-19.00" />
          <Week label="Сб" text="9.00-16.00" />
        </div>

        <MediumText fs={16}>
          (096) 020-52-00
          <br /> liashukdent@gmail.com
        </MediumText>
        <LocationText>
          Софіївська Борщагівка, ЖК «Софія», вул. Миру 30/18
        </LocationText>
        <Social>
          <ViberIcon src={viberIcon} alt="viber" />
          <MessengerIcon src={messengerIcon} alt="messenger" />
        </Social>
      </Block>

      <Block align="center">
        <LinkText>Послуги</LinkText>
        <LinkText>Про клініку</LinkText>
        <LinkText>Лікарі</LinkText>
        <LinkText>Ціни</LinkText>
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
