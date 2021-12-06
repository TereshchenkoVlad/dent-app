import React from "react";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import { LinkType } from "config/i18n";

import Week from "./Week";

import {
  Logo,
  Link,
  Social,
  Contacts,
  LinkText,
  Container,
  ViberIcon,
  FirstBlock,
  SecondBlock,
  ThirdBlock,
  MessengerIcon,
  LocationText,
  WeeksContainer,
} from "./styles";
import { MediumText } from "styles/text";

import logoLight from "assets/images/logoLight.svg";
import viberIcon from "assets/images/icons/viber.png";
import messengerIcon from "assets/images/icons/messenger.png";

const styles = {
  guarantee: { marginBottom: 15 },
};

const Footer = () => {
  let navigate = useNavigate();

  const LINKS = t("header.links", { returnObjects: true }) as LinkType[];

  const toHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <FirstBlock>
        <Logo src={logoLight} alt="logo light" onClick={toHome} />
        <WeeksContainer>
          <Week label="Пн-Пт" text="9.00-19.00" />
          <Week label="Сб" text="9.00-16.00" />
        </WeeksContainer>

        <Contacts>
          (096) 020-52-00
          <br /> liashukdent@gmail.com
        </Contacts>
        <LocationText>
          Софіївська Борщагівка, ЖК «Софія», вул. Миру 30/18
        </LocationText>
        <Social>
          <Link href="viber://chat?number=380960205200">
            <ViberIcon src={viberIcon} alt="viber" />
          </Link>

          <Link href="https://www.facebook.com/liashuk.clinic/" target="_blank">
            <MessengerIcon src={messengerIcon} alt="messenger" />
          </Link>
        </Social>
      </FirstBlock>

      <SecondBlock>
        {LINKS.map((link, index) => {
          return (
            <Link key={link.id} href={`#` + link.id} onClick={toHome}>
              <LinkText>{link.name}</LinkText>
            </Link>
          );
        })}
      </SecondBlock>

      <ThirdBlock>
        <MediumText fs={16}>2021 Стоматологія лікаря Ляшука</MediumText>
        <div>
          <MediumText style={styles.guarantee} fs={16}>
            Гарантійні умови
          </MediumText>
          <MediumText fs={16}>Публічний договір ФОП Ляшук</MediumText>
        </div>
      </ThirdBlock>
    </Container>
  );
};

export default Footer;
