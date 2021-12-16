import styled from "styled-components";
import { theme } from "styles/colors";

const first_point = 950;
const second_point = 760;
const third_point = 515;

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
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 21px 60px;
  @media only screen and (max-width: ${second_point}px) {
    padding: 10px 30px;
  }
  @media only screen and (max-width: ${third_point}px) {
    padding: 5px 15px;
  }
`;

export const Title = styled.h1`
  font-family: Gilroy-SemiBold;
  font-size: 64px;
  color: ${theme.mainWhite};
  @media only screen and (max-width: ${first_point}px) {
    font-size: 55px;
  }
  @media only screen and (max-width: ${second_point}px) {
    font-size: 35px;
  }
  @media only screen and (max-width: ${third_point}px) {
    font-size: 28px;
  }
`;
