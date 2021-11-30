import React, { useRef } from "react";
import Slider from "react-slick";

import { theme } from "styles/colors";
import NextButton from "components/NextButton";
import { BigTitle, MediumText } from "styles/text";

import {
  ActionContainer,
  ButtonContainer,
  Container,
  Line,
  TittleContainer,
  Wrapper,
} from "./styles";
import DoctorCard from "components/DoctorCard";
import { DOCTORS } from "data/doctors";
import styled from "styled-components";

const styles = {
  subTitle: {
    textAlign: "center" as any,
  },
  button: {
    marginRight: 28,
  },
};

const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1415,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Dentists = () => {
  let list = useRef<any>(undefined).current;

  const next = () => {
    if (list) {
      list.slickNext();
    }
  };
  const previous = () => {
    if (list) {
      list.slickPrev();
    }
  };

  return (
    <Wrapper>
      <Container>
        <TittleContainer>
          <BigTitle>Кваліфіковані стоматологи</BigTitle>
          <Line />
        </TittleContainer>

        <ActionContainer>
          <MediumText style={styles.subTitle} fs={18} color={theme.black}>
            Допоможуть зберігти і повернути
            <br /> здоров’я ваших зубів
          </MediumText>

          {/* <ButtonContainer>
            <div style={styles.button} onClick={previous}>
              <NextButton type="left" />
            </div>
            <div onClick={next}>
              <NextButton type="right" />
            </div>
          </ButtonContainer> */}
        </ActionContainer>

        {/* <StyledSlider ref={(c) => (list = c)} {...settings}> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {DOCTORS.map((doctor, i) => (
            <DoctorCard
              key={i.toString()}
              title={doctor.name}
              description={doctor.description}
              url=""
            />
          ))}
        </div>

        {/* </StyledSlider> */}
      </Container>
    </Wrapper>
  );
};

export default Dentists;

const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 0 !important;
  }
`;
