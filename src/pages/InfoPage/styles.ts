import styled from "styled-components";
import { theme } from "styles/colors";
import { MediumText, SemiBoldText } from "styles/text";

const first_point = 760;
const second_point = 515;

export const BackHomeWrapper = styled.div`
  margin: 20px 0 40px 60px;

  @media only screen and (max-width: ${first_point}px) {
    margin: 20px 0 30px 30px;
  }
  @media only screen and (max-width: ${second_point}px) {
    margin: 20px 0 15px 15px;
  }
`;

export const ChildrenContainer = styled.div`
  padding: 0 60px 50px 60px;

  @media only screen and (max-width: ${first_point}px) {
    padding: 0 30px 50px 30px;
  }
  @media only screen and (max-width: ${second_point}px) {
    padding: 0 15px 50px 15px;
  }
`;

export const Text = styled(MediumText)`
  color: ${theme.black};
  font-size: 20px;
  text-align: justify;
  @media only screen and (max-width: ${first_point}px) {
    font-size: 18px;
  }
  @media only screen and (max-width: ${first_point}px) {
    font-size: 16px;
  }
`;

export const BoldText = styled(SemiBoldText)`
  color: ${theme.black};
  font-size: 20px;
  text-align: justify;
  @media only screen and (max-width: ${first_point}px) {
    font-size: 18px;
  }
  @media only screen and (max-width: ${first_point}px) {
    font-size: 16px;
  }
`;

export const SpanBold = styled.span`
  color: ${theme.black};
  font-size: 24px;
  font-family: Gilroy-SemiBold;
  @media only screen and (max-width: ${first_point}px) {
    font-size: 20px;
  }
  @media only screen and (max-width: ${first_point}px) {
    font-size: 18px;
  }
`;

export const LabelText = styled(SemiBoldText)`
  color: ${theme.black};
  font-size: 24px;
  text-align: justify;
  @media only screen and (max-width: ${first_point}px) {
    font-size: 20px;
  }
  @media only screen and (max-width: ${first_point}px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  margin-left: 35px;
  @media only screen and (max-width: ${first_point}px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: ${second_point}px) {
    margin-left: 10px;
  }
`;

export const ListItem = styled.li`
  color: ${theme.black};
  font-size: 20px;
  font-family: Gilroy-Medium;
  @media only screen and (max-width: ${first_point}px) {
    font-size: 18px;
  }
  @media only screen and (max-width: ${first_point}px) {
    font-size: 16px;
  }
`;
