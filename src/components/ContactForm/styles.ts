import styled from "styled-components";
import { theme } from "styles/colors";
import { Title } from "styles/text";

const first_point = 935;
const second_point = 485;

export const Form = styled.form`
  position: absolute;
  bottom: 0;
  left: 60px;
  width: 421px;
  height: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.mainBlue};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 10;

  @media only screen and (max-width: ${first_point}px) {
    position: fixed;
    top: 140px;
    left: 30px;
  }
  @media only screen and (max-width: ${second_point}px) {
    position: fixed;
    top: 140px;
    left: calc(50vw - 160px);
    width: 320px;
    height: 420px;
  }
`;

export const FormTitle = styled(Title)`
  margin-bottom: 30px;
  margin-top: 50px;

  @media only screen and (max-width: ${second_point}px) {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
`;
