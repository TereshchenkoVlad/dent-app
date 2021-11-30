import styled from "styled-components";
import { theme } from "styles/colors";

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
