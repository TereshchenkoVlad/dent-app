import styled from "styled-components";
import { theme } from "styles/colors";
import { SemiBoldText } from "styles/text";

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
`;

export const Title = styled(SemiBoldText)`
  font-size: 64px;
  color: ${theme.mainWhite};
`;
