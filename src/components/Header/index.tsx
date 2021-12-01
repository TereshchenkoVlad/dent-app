import React, { useState } from "react";

import { MediumText } from "styles/text";

import logoDark from "assets/images/logoDark.svg";
import phoneIcon from "assets/images/icons/phone.svg";
import viberIcon from "assets/images/icons/viber.svg";
import burgerIcon from "assets/images/icons/burger.svg";
import locationIcon from "assets/images/icons/location.svg";
import messengerIcon from "assets/images/icons/messenger.svg";

import {
  Social,
  Header,
  LogoIcon,
  PhoneIcon,
  PreHeader,
  ViberIcon,
  Container,
  Navigation,
  LocationIcon,
  MessengerIcon,
  LocationContainer,
  ContactsContainer,
  WebLinks,
  BurgerContainer,
  BurgerIcon,
} from "./styles";
import { t } from "i18next";
import { theme } from "styles/colors";
import DropMenu from "./DropMenu";

const styles = {
  acitionText: {
    marginRight: 40,
  },
};

const HeaderComponent = () => {
  const [drop, setDrop] = useState(false);

  const toogleDrop = () => () => setDrop(!drop);

  return (
    <Container>
      <PreHeader>
        <LocationContainer>
          <LocationIcon src={locationIcon} alt="location" />
          <MediumText>{t("header.location")}</MediumText>
        </LocationContainer>
        <ContactsContainer>
          <PhoneIcon src={phoneIcon} alt="phone" />
          <MediumText>(096) 020-52-00</MediumText>
        </ContactsContainer>
      </PreHeader>

      <Header>
        <Navigation>
          <LogoIcon src={logoDark} alt="logo" />
          <WebLinks>
            <MediumText color={theme.black} fs={16} style={styles.acitionText}>
              {t("header.navigation.services")}
            </MediumText>
            <MediumText color={theme.black} fs={16} style={styles.acitionText}>
              {t("header.navigation.about_clinic")}
            </MediumText>
            <MediumText color={theme.black} fs={16} style={styles.acitionText}>
              {t("header.navigation.doctors")}
            </MediumText>
            <MediumText color={theme.black} fs={16} style={styles.acitionText}>
              {t("header.navigation.prices")}
            </MediumText>
            <MediumText color={theme.black} fs={16}>
              {t("header.navigation.contacts")}
            </MediumText>
          </WebLinks>
        </Navigation>
        <Social>
          <ViberIcon src={viberIcon} alt="viber" />
          <MessengerIcon src={messengerIcon} alt="messenger" />
        </Social>
        <BurgerContainer>
          {drop && <DropMenu />}
          <BurgerIcon src={burgerIcon} alt="burger" onClick={toogleDrop()} />
        </BurgerContainer>
      </Header>
    </Container>
  );
};

export default HeaderComponent;
