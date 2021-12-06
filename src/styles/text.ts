import styled from "styled-components";
import { theme } from "./colors";

const first_point = 515;

interface TextProps {
  color?: string;
  fs?: number;
}

export const LargeTitle = styled.p`
  color: ${theme.mainWhite};
  font-size: 52px;
  font-family: Gilroy-Medium;
`;

export const BigTitle = styled.p`
  color: ${theme.black};
  font-size: 28px;
  font-family: Gilroy-SemiBold;

  @media only screen and (max-width: ${first_point}px) {
    font-size: 24px;
  }
`;

export const Title = styled.p`
  color: ${theme.mainWhite};
  font-size: 24px;
  font-family: Gilroy-SemiBold;
`;

export const NormalTitle = styled.p`
  color: ${({ color }: TextProps) => (color ? color : theme.mainWhite)};
  font-size: 18px;
  font-family: Gilroy-SemiBold;
`;

export const RegularType1 = styled.p`
  color: ${({ color }: TextProps) => (color ? color : theme.greyDark)};
  font-size: 20px;
  font-family: Gilroy-Regular;
`;

export const RegularType2 = styled.p`
  color: ${({ color }: TextProps) => (color ? color : theme.greyDark)};
  font-size: 14px;
  font-family: Gilroy-Regular;
`;

export const SmallBold = styled.p`
  color: ${({ color }: TextProps) => (color ? color : theme.mainWhite)};
  font-size: 14px;
  font-family: Gilroy-SemiBold;
`;

export const SemiBoldText = styled.p`
  color: ${({ color }: TextProps) => (color ? color : theme.black)};
  font-size: ${({ fs }: TextProps) => (fs ? fs : 20)}px;
  font-family: Gilroy-SemiBold;
`;

export const MediumText = styled.p`
  color: ${({ color }: TextProps) => (color ? color : theme.mainWhite)};
  font-size: ${({ fs }: TextProps) => (fs ? fs : 14)}px;
  font-family: Gilroy-Medium;
`;
