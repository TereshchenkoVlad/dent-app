import React from "react";

import callImage from "assets/images/icons/call_button.svg";
import styled from "styled-components";
import { theme } from "styles/colors";

const first_point = 935;
const second_point = 700;
const third_point = 500;

const PhoneAnimation = () => {
  return (
    <Container>
      <Block>
        <CallImage src={callImage} alt="phone" />
        <Circle />
      </Block>
    </Container>
  );
};

export default PhoneAnimation;

const Container = styled.div`
  position: absolute;
  right: 60px;
  bottom: 15px;
  animation: rubber 5s linear infinite;
  @keyframes rubber {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0);
    }
  }
  @media only screen and (max-width: ${second_point}px) {
    right: 20px;
    bottom: 10px;
  }
`;

const Block = styled.div`
  position: relative;
`;

const CallImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 200px;
  height: 200px;
  @media only screen and (max-width: ${first_point}px) {
    width: 150px;
    height: 150px;
  }
  @media only screen and (max-width: ${second_point}px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: ${third_point}px) {
    width: 80px;
    height: 80px;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: ${theme.mainBlue};
  animation: scaling 2s linear infinite;

  @keyframes scaling {
    0% {
      transform: scale(0.5);
      opacity: 0.7;
    }
    100% {
      transform: scale(1.4);
      opacity: 0.1;
    }
  }

  @media only screen and (max-width: ${first_point}px) {
    width: 150px;
    height: 150px;
  }
  @media only screen and (max-width: ${second_point}px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: ${third_point}px) {
    width: 80px;
    height: 80px;
  }
`;
