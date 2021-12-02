import styled from "styled-components";
import { BigTitle } from "styles/text";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin-bottom: 100px;
`;

export const AboutTitle = styled(BigTitle)`
  width: 722px;
  margin-bottom: 40px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 520px;
  height: 600px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TeamImage = styled.img`
  width: 722px;
  height: 600px;
`;
