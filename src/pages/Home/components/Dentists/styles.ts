import styled from "styled-components";
import { theme } from "styles/colors";

export const Wrapper = styled.div`
  margin-bottom: 80px;
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
