import React from "react";
import styled from "styled-components";
import { theme } from "styles/colors";
import { MediumText, SemiBoldText } from "styles/text";

const styles = {
  title: {
    marginBottom: 15,
  },
  text: {
    maxWidth: 270,
    textAlign: "center" as any,
  },
};

interface Props {
  title: string;
  description: string;
  url: string;
}

const DoctorCard = ({ title, description, url }: Props) => {
  return (
    <Container>
      <Image
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        alt="doctor"
      />
      <Content>
        <SemiBoldText style={styles.title}>{title}</SemiBoldText>
        <MediumText style={styles.text} fs={16} color={theme.black}>
          {description}
        </MediumText>
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
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 427px;
  height: 388px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.mainWhite};
`;
