import styled from "styled-components";
import { theme } from "styles/colors";

export const Form = styled.form`
  position: absolute;
  bottom: 0;
  left: 60px;
  width: 421px;
  height: 593px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.mainBlue};
`;
