import styled from "styled-components";
import { theme } from "styles/colors";
import { BigTitle, RegularType1, MediumText } from "styles/text";

const first_point = 1315;
const second_point = 760;
const third_point = 455;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 100px;
  @media only screen and (max-width: ${first_point}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutTitle = styled(BigTitle)`
  margin-bottom: 40px;
  @media only screen and (max-width: ${second_point}px) {
    font-size: 24px;
    margin-bottom: 35px;
  }
  @media only screen and (max-width: ${third_point}px) {
    font-size: 20px;
    margin-bottom: 25px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  max-width: 722px;
  @media only screen and (max-width: ${first_point}px) {
    margin-right: 0;
  }
  @media only screen and (max-width: ${second_point}px) {
    max-width: 420px;
  }
  @media only screen and (max-width: ${third_point}px) {
    max-width: 320px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 520px;
  height: 600px;
  @media only screen and (max-width: ${first_point}px) {
    max-width: 722px;
    height: auto;
  }
  @media only screen and (max-width: ${second_point}px) {
    max-width: 420px;
  }
  @media only screen and (max-width: ${third_point}px) {
    max-width: 320px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${first_point}px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: ${third_point}px) {
    margin-top: 20px;
  }
`;

export const TeamImage = styled.img`
  height: 600px;
  border-radius: 5px;
  @media only screen and (max-width: ${second_point}px) {
    height: 350px;
  }
  @media only screen and (max-width: ${third_point}px) {
    height: 290px;
  }
`;

export const TextWrapper = styled.div`
  text-align: justify;
  @media only screen and (max-width: ${first_point}px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: ${third_point}px) {
    margin-top: 20px;
  }
`;

export const NormalText = styled(RegularType1)`
  @media only screen and (max-width: ${second_point}px) {
    font-size: 17px;
  }
  @media only screen and (max-width: ${third_point}px) {
    font-size: 16px;
  }
`;

export const BoldText = styled(MediumText)`
  font-size: 22px;
  color: ${theme.black};
  @media only screen and (max-width: ${second_point}px) {
    font-size: 18px;
  }
  @media only screen and (max-width: ${third_point}px) {
    font-size: 17px;
  }
`;

export const CallBackWrapper = styled.div`
  width: 177px;
  margin-left: 25px;
  @media only screen and (max-width: ${second_point}px) {
    display: none;
  }
`;
