import styled from "styled-components";
import { theme } from "./colors";

export const Title = styled.p`
  color: ${theme.mainWhite};
  font-size: 24px;
  font-family: Gilroy-SemiBold;
`;

export const NormalTitle = styled.p`
  color: ${theme.mainWhite};
  font-size: 18px;
  font-family: Gilroy-SemiBold;
`;

export const NormalText = styled.p`
  color: ${theme.mainWhite};
  font-size: 14px;
  font-family: Gilroy-Medium;
`;

export const SmallBold = styled.p`
  color: ${theme.mainWhite};
  font-size: 14px;
  font-family: Gilroy-SemiBold;
`;

export const ActionText = styled.p`
  color: ${theme.black};
  font-size: 16px;
  font-family: Gilroy-Medium;
`;
