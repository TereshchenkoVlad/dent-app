import React from "react";
import { t } from "i18next";

import { LinkType } from "config/i18n";

import Week from "./Week";

import {
  Logo,
  Link,
  Social,
  LinkText,
  Container,
  ViberIcon,
  FirstBlock,
  SecondBlock,
  ThirdBlock,
  MessengerIcon,
  LocationText,
} from "./styles";
import { MediumText } from "styles/text";

import logoLight from "assets/images/logoLight.svg";
import viberIcon from "assets/images/icons/viber.svg";
import messengerIcon from "assets/images/icons/messenger.svg";

const styles = {
  guarantee: { marginBottom: 15 },
};

const Footer = () => {
  const LINKS = t("header.links", { returnObjects: true }) as LinkType[];

  return (
    <Container>
      <FirstBlock>
        <Logo src={logoLight} alt="logo light" />
        <div>
          <Week label="Пн-Пт" text="9.00-19.00" />
          <Week label="Сб" text="9.00-16.00" />
        </div>

        <MediumText fs={16} style={{ visibility: "unset" }}>
          (096) 020-52-00
          <br /> liashukdent@gmail.com
        </MediumText>
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
        {LINKS.map((link) => (
          <Link key={link.id} href={`#` + link.id}>
            <LinkText>{link.name}</LinkText>
          </Link>
        ))}
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
