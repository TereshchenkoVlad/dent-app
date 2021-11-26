import React from "react";

import { ActionText, NormalText } from "styles/text";

import logoDark from "assets/images/logoDark.svg";
import phoneIcon from "assets/images/icons/phone.svg";
import viberIcon from "assets/images/icons/viber.svg";
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
} from "./styles";
import { t } from "i18next";

const styles = {
  acitionText: {
    marginRight: 40,
  },
};

const HeaderComponent = () => {
  return (
    <Container>
      <PreHeader>
        <LocationContainer>
          <LocationIcon src={locationIcon} alt="location" />
          <NormalText>{t("location")}</NormalText>
        </LocationContainer>
        <ContactsContainer>
          <PhoneIcon src={phoneIcon} alt="phone" />
          <NormalText>(096) 020-52-00</NormalText>
        </ContactsContainer>
      </PreHeader>

      <Header>
        <Navigation>
          <LogoIcon src={logoDark} alt="logo" />
          <ActionText style={styles.acitionText}>
            {t("navigation.services")}
          </ActionText>
          <ActionText style={styles.acitionText}>
            {t("navigation.about_clinic")}
          </ActionText>
          <ActionText style={styles.acitionText}>
            {t("navigation.doctors")}
          </ActionText>
          <ActionText style={styles.acitionText}>
            {t("navigation.prices")}
          </ActionText>
          <ActionText>{t("navigation.contacts")}</ActionText>
        </Navigation>
        <Social>
          <ViberIcon src={viberIcon} alt="viber" />
          <MessengerIcon src={messengerIcon} alt="messenger" />
        </Social>
      </Header>
    </Container>
  );
};

export default HeaderComponent;
