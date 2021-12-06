import React, { useState } from "react";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import { LinkType } from "config/i18n";

import DropMenu from "./DropMenu";

import logoDark from "assets/images/logoDark.svg";
import phoneIcon from "assets/images/icons/phone.svg";
import viberIcon from "assets/images/icons/viber.png";
import burgerIcon from "assets/images/icons/burger.svg";
import locationIcon from "assets/images/icons/location.svg";
import messengerIcon from "assets/images/icons/messenger.png";

import {
  Link,
  Social,
  Header,
  WebLinks,
  LogoIcon,
  PhoneIcon,
  PreHeader,
  PhoneLink,
  ViberIcon,
  Navigation,
  BurgerIcon,
  LocationIcon,
  MessengerIcon,
  BurgerContainer,
  ContactsContainer,
  LocationContainer,
} from "./styles";
import { theme } from "styles/colors";
import { MediumText } from "styles/text";

const styles = {
  acitionText: {
    marginRight: 40,
  },
};

const HeaderComponent = () => {
  let navigate = useNavigate();
  const [drop, setDrop] = useState(false);

  const toogleDrop = () => () => setDrop(!drop);

  const LINKS = t("header.links", { returnObjects: true }) as LinkType[];

  const toHome = () => {
    navigate("/");
  };

  return (
    <div id="header">
      <PreHeader>
        <LocationContainer>
          <LocationIcon src={locationIcon} alt="location" />
          <MediumText>{t("header.location")}</MediumText>
        </LocationContainer>
        <ContactsContainer>
          <PhoneIcon src={phoneIcon} alt="phone" />
          <PhoneLink href="tel:0960205200">
            <MediumText>(096) 020-52-00</MediumText>
          </PhoneLink>
        </ContactsContainer>
      </PreHeader>

      <Header>
        <Navigation>
          <LogoIcon src={logoDark} alt="logo" onClick={toHome} />
          <WebLinks>
            {LINKS.map((link, index) => {
              const style =
                LINKS.length - 1 === index ? {} : styles.acitionText;
              return (
                <Link href={`#` + link.id} key={link.id} onClick={toHome}>
                  <MediumText color={theme.black} fs={16} {...{ style }}>
                    {link.name}
                  </MediumText>
                </Link>
              );
            })}
          </WebLinks>
        </Navigation>
        <Social>
          <Link href="viber://chat?number=380960205200">
            <ViberIcon src={viberIcon} alt="viber" />
          </Link>
          <Link href="https://www.facebook.com/liashuk.clinic/" target="_blank">
            <MessengerIcon src={messengerIcon} alt="messenger" />
          </Link>
        </Social>
        <BurgerContainer>
          {drop && <DropMenu links={LINKS} onLinkPress={toHome} />}
          <BurgerIcon src={burgerIcon} alt="burger" onClick={toogleDrop()} />
        </BurgerContainer>
      </Header>
    </div>
  );
};

export default HeaderComponent;
