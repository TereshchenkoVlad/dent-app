import styled from "styled-components";
import { theme } from "styles/colors";
import { MediumText } from "styles/text";

const first_point = 515;

export const Wrapper = styled.div`
  margin-bottom: 80px;
`;

export const TittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled(MediumText)`
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 40px;
  color: ${theme.black};

  @media only screen and (max-width: ${first_point}px) {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const DentistsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Line = styled.div`
  width: 132px;
  height: 3px;
  border-radius: 2px;
  background-color: ${theme.mainBlue};
  margin-top: 10px;
`;
