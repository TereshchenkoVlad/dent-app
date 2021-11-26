import styled from "styled-components/macro";

import { theme } from "styles/colors";

export const Container = styled.div``;

export const PreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.mainBlue};
  padding: 12px 60px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0px 60px;
  background-color: ${theme.mainWhite};
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.img`
  width: 162px;
  height: 46px;
  margin-right: 153px;
`;

export const ViberIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

export const MessengerIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const LocationIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 13px;
`;

export const PhoneIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 13px;
`;
