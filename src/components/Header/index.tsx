import React from "react";
import styled from "styled-components/macro";

import { theme } from "styles/colors";
import { NormalText } from "styles/text";

import phoneIcon from "assets/icons/phone.svg";
import locationIcon from "assets/icons/location.svg";

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
