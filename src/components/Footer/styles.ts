import styled from "styled-components";
import { theme } from "styles/colors";
import { MediumText } from "styles/text";

const first_point = 1117;
const second_point = 660;
const third_point = 370;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const InitialBlock = styled.div`
  min-height: 100px;
  background-color: ${theme.mainBlue};
  padding: 0 60px 0 60px;
  display: flex;
  align-items: center;
  margin-top: 2px;

  @media only screen and (max-width: ${first_point}px) {
    padding: 0 30px 0 30px;
  }
`;

export const FirstBlock = styled(InitialBlock)`
  justify-content: space-between;
  @media only screen and (max-width: ${second_point}px) {
    flex-direction: column;
  }
`;

export const SecondBlock = styled(InitialBlock)`
  justify-content: center;
  @media only screen and (max-width: ${third_point}px) {
    flex-direction: column;
    padding: 15px 0;
  }
`;

export const ThirdBlock = styled(InitialBlock)`
  justify-content: space-between;
  @media only screen and (max-width: ${second_point}px) {
    flex-direction: column;
    padding: 15px;
    align-items: flex-start;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${theme.black};
`;

export const LinkText = styled(MediumText)`
  margin-right: 80px;
  font-size: 16px;
  @media only screen and (max-width: ${first_point}px) {
    margin-right: 40px;
  }
  @media only screen and (max-width: ${second_point}px) {
    margin-right: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: ${third_point}px) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Logo = styled.img`
  width: 162px;
  height: 46px;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
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

export const LocationText = styled(MediumText)`
  font-size: 16px;
  @media only screen and (max-width: ${first_point}px) {
    display: none;
  }
`;
