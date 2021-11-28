import React from "react";
import styled from "styled-components";

import arrowLeft from "assets/images/icons/arrow-left.svg";
import { theme } from "styles/colors";

interface Props {
  type: "left" | "right";
}

const NextButton = ({ type }: Props) => {
  return (
    <Container>
      {type === "left" ? (
        <IconLeft className="action_icon" src={arrowLeft} alt="icon" />
      ) : (
        <IconRight className="action_icon" src={arrowLeft} alt="icon" />
      )}
    </Container>
  );
};

export default NextButton;

const Container = styled.div`
  width: 64px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid ${theme.mainBlue};
  &:hover .action_icon {
    filter: brightness(300%);
  }
  &:hover {
    background-color: ${theme.mainBlue};
  }
  cursor: pointer;
`;

const IconLeft = styled.img`
  width: 18px;
  height: 18px;
`;

const IconRight = styled.img`
  width: 18px;
  height: 18px;
  transform: rotate(180deg);
`;
