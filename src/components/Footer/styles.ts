import styled from "styled-components";
import { theme } from "styles/colors";
import { MediumText } from "styles/text";

const first_point = 1117;
const second_point = 825;
const third_point = 685;

interface Props {
  align?: "center";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const Block = styled.div`
  height: 100px;
  padding: 0 60px 0 60px;
  background-color: ${theme.mainBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: ${({ align }: Props) => (align ? align : "space-between")};
  margin-top: 2px;

  @media only screen and (max-width: ${second_point}px) {
    padding: 0 30px 0 30px;
  }
  @media only screen and (max-width: ${third_point}px) {
    flex-direction: column;
    height: 250px;
    align-items: center;
    padding: 20px 0;
  }
`;

export const LinkText = styled(MediumText)`
  margin-right: 80px;
  font-size: 16px;
  @media only screen and (max-width: ${third_point}px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 162px;
  height: 46px;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
`;

export const ViberIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

export const MessengerIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const LocationText = styled(MediumText)`
  font-size: 16px;
  @media only screen and (max-width: ${first_point}px) {
    display: none;
  }
`;
