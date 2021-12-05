import styled from "styled-components/macro";

import { theme } from "styles/colors";

const first_point = 1050;
const second_point = 905;
const third_point = 825;
export const forth_point = 575;

export const Container = styled.div``;
export const Link = styled.a`
  text-decoration: none;
  color: ${theme.black};
`;

export const PreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.mainBlue};
  padding: 12px 60px;
  @media only screen and (max-width: ${second_point}px) {
    padding: 12px 20px;
  }
  @media only screen and (max-width: ${forth_point}px) {
    justify-content: flex-end;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0px 60px;
  background-color: ${theme.mainWhite};
  @media only screen and (max-width: ${second_point}px) {
    padding: 0px 20px;
  }
  @media only screen and (max-width: ${forth_point}px) {
    height: 50px;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${third_point}px) {
    display: none;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const WebLinks = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${third_point}px) {
    display: none;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${forth_point}px) {
    display: none;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.img`
  width: 162px;
  height: 46px;
  margin-right: 153px;

  @media only screen and (max-width: ${first_point}px) {
    margin-right: 50px;
  }
  @media only screen and (max-width: ${forth_point}px) {
    width: 122px;
    height: 36px;
  }
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

export const BurgerContainer = styled.div`
  position: relative;
  display: none;
  @media only screen and (max-width: ${third_point}px) {
    display: flex;
  }
`;

export const BurgerIcon = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: opacity 0.35s ease-in-out;
  &:hover {
    opacity: 0.7;
  }

  @media only screen and (max-width: ${forth_point}px) {
    width: 25px;
    height: 25px;
  }
`;

export const PhoneLink = styled.a`
  text-decoration: none;
  color: ${theme.mainWhite};
`;
