import styled from "styled-components";
import { theme } from "styles/colors";

const first_point = 1215;
const second_point = 950;
const third_point = 605;
const forth_point = 505;
const fifth_point = 385;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 60px;
  top: 200px;
  max-width: 685px;

  @media only screen and (max-width: ${first_point}px) {
    left: 30px;
    max-width: 455px;
  }
  @media only screen and (max-width: ${second_point}px) {
    top: 150px;
    left: 15px;
    max-width: 455px;
  }
  @media only screen and (max-width: ${third_point}px) {
    max-width: 325px;
    top: 100px;
  }
  @media only screen and (max-width: ${forth_point}px) {
    max-width: 225px;
    top: 30px;
  }
  @media only screen and (max-width: ${fifth_point}px) {
    max-width: 205px;
    top: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 52px;
  color: ${theme.mainWhite};
  font-family: Gilroy-Medium;
  @media only screen and (max-width: ${first_point}px) {
    font-size: 35px;
  }
  @media only screen and (max-width: ${third_point}px) {
    font-size: 30px;
  }
  @media only screen and (max-width: ${third_point}px) {
    font-size: 20px;
  }
  @media only screen and (max-width: ${fifth_point}px) {
    font-size: 18px;
  }
`;

export const SubTitle = styled.h1`
  font-size: 20px;
  margin-top: 2vw;
  font-family: Gilroy-Medium;
  color: ${theme.mainWhite};
  @media only screen and (max-width: ${first_point}px) {
    font-size: 18px;
  }
  @media only screen and (max-width: ${second_point}px) {
    font-size: 16px;
  }
  @media only screen and (max-width: ${third_point}px) {
    font-size: 12px;
  }
`;
