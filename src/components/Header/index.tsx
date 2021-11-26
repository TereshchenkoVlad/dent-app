import React from "react";
import styled from "styled-components/macro";

import { theme } from "../../styles/colors";
import { NormalText } from "../../styles/text";

import phoneIcon from "../../assets/icons/phone.svg";
import locationIcon from "../../assets/icons/location.svg";

const Header = () => {
  return (
    <Container>
      <PreHeader>
        <LocationContainer>
          <LocationIcon src={locationIcon} alt="location" />
          <NormalText>
            Софіївська Борщагівка, ЖК «Софія», вул. Миру 30/18
          </NormalText>
        </LocationContainer>
        <ContactsContainer>
          <PhoneIcon src={phoneIcon} alt="phone" />
          <NormalText>(096) 020-52-00</NormalText>
        </ContactsContainer>
      </PreHeader>
      <iframe
        title="id"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10172.766216026877!2d30.3788098!3d50.4002676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d4d7b0d972f9adf!2z0KHRgtC-0LzQsNGC0L7Qu9C-0LPRltGPINC70ZbQutCw0YDRjyDQm9GP0YjRg9C60LAsINCW0Log0KHQvtGE0ZbRjw!5e0!3m2!1suk!2sua!4v1637953610830!5m2!1suk!2sua"
        width="100%"
        height="528"
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </Container>
  );
};

export default Header;

const Container = styled.div``;

const PreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.mainBlue};
  padding: 12px 60px;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContactsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LocationIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 13px;
`;

const PhoneIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 13px;
`;
