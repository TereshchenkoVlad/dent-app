import React from "react";

import arrowBlue from "assets/images/icons/arrow-blue.png";
import styled from "styled-components";
import { MediumText } from "styles/text";
import { theme } from "styles/colors";

interface Props {
  onClick: () => void;
}

const BackHome = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Arrow src={arrowBlue} alt="arrow" />
      <Text>повернутись до головного меню</Text>
    </Container>
  );
};

export default BackHome;

const Container = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const Arrow = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 5px;
`;

const Text = styled(MediumText)`
  font-size: 16px;
  color: ${theme.mainBlue};
`;
