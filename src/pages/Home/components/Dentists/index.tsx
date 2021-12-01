import React from "react";

import DoctorCard from "components/DoctorCard";

import { theme } from "styles/colors";
import { BigTitle, MediumText } from "styles/text";

import {
  Line,
  Wrapper,
  ActionContainer,
  TittleContainer,
  DentistsContainer,
} from "./styles";

import { DOCTORS } from "data/doctors";

const styles = {
  subTitle: {
    textAlign: "center" as any,
  },
  button: {
    marginRight: 28,
  },
};

const Dentists = () => {
  return (
    <Wrapper id="doctors">
      <TittleContainer>
        <BigTitle>Кваліфіковані стоматологи</BigTitle>
        <Line />
      </TittleContainer>

      <ActionContainer>
        <MediumText style={styles.subTitle} fs={18} color={theme.black}>
          Допоможуть зберігти і повернути
          <br /> здоров’я ваших зубів
        </MediumText>
      </ActionContainer>

      <DentistsContainer>
        {DOCTORS.map((doctor, i) => (
          <DoctorCard
            key={i.toString()}
            title={doctor.name}
            description={doctor.description}
            url=""
          />
        ))}
      </DentistsContainer>
    </Wrapper>
  );
};

export default Dentists;
