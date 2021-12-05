import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";
import { MediumText, SemiBoldText } from "styles/text";

const first_point = 515;

interface Props {
  title: string;
  description: string;
  url: string;
}

const DoctorCard = ({ title, description, url }: Props) => {
  return (
    <Container>
      <Image src={url} alt="doctor" />
      <Content>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Content>
    </Container>
  );
};

export default DoctorCard;

const Container = styled.div`
  width: 427px;
  height: 540px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin: 20px;
  border-radius: 5px;
  overflow: hidden;

  @media only screen and (max-width: ${first_point}px) {
    margin: 5px;
    width: 280px;
    height: 340px;
  }
`;

const Image = styled.img`
  flex: 1;
`;

const Title = styled(SemiBoldText)`
  margin-bottom: 15px;
  @media only screen and (max-width: ${first_point}px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const Text = styled(MediumText)`
  width: 270px;
  text-align: center;
  font-size: 16px;
  color: ${theme.black};
  @media only screen and (max-width: ${first_point}px) {
    font-size: 12px;
    width: 230px;
  }
`;

const Content = styled.div`
  height: 152px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.mainWhite};

  @media only screen and (max-width: ${first_point}px) {
    height: 80px;
  }
`;
