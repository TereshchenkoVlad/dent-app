import React from "react";

import callImage from "assets/images/icons/call_button.svg";
import styled from "styled-components";
import { theme } from "styles/colors";

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
`;

const Block = styled.div`
  position: relative;
`;

const CallImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 200px;
  height: 200px;
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
`;
