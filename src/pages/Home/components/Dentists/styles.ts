import styled from "styled-components";
import { theme } from "styles/colors";

export const Wrapper = styled.div`
  margin-bottom: 80px;
`;

export const Container = styled.div`
  padding: 0 60px;
`;

export const TittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Line = styled.div`
  width: 132px;
  height: 3px;
  border-radius: 2px;
  background-color: ${theme.mainBlue};
  margin-top: 10px;
`;
