import styled from "styled-components";
import { theme } from "styles/colors";
import { SemiBoldText, Title } from "styles/text";

const first_point = 650;
const second_point = 415;

export const Filter = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  padding: 40px 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.mainBlue};
  border-radius: 5px;
  z-index: 10;
  @media only screen and (max-width: ${first_point}px) {
    padding: 20px 55px;
  }
  @media only screen and (max-width: ${second_point}px) {
    padding: 15px;
  }
`;

export const PopUpText = styled(SemiBoldText)`
  font-size: 14px;
  color: ${theme.mainWhite};
  margin: 35px 0;
  @media only screen and (max-width: ${first_point}px) {
    margin: 25px 0;
  }
`;

export const PopUpTitle = styled(Title)`
  @media only screen and (max-width: ${first_point}px) {
    font-size: 20px;
  }
`;

export const CloseWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  @media only screen and (max-width: ${first_point}px) {
    display: none;
  }
`;

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform ease-in-out 0.3s;

  &:hover {
    transform: rotate(180deg) scale(1.3);
  }
`;
