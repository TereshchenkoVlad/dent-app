import React from "react";

import DoctorCard from "components/DoctorCard";

import { BigTitle } from "styles/text";

import {
  Line,
  Wrapper,
  TittleContainer,
  DentistsContainer,
  Subtitle,
} from "./styles";

import { DOCTORS } from "data/doctors";

const Dentists = () => {
  return (
    <Wrapper id="doctors">
      <TittleContainer>
        <BigTitle>Кваліфіковані стоматологи</BigTitle>
        <Line />
      </TittleContainer>

      <Subtitle>
        Допоможуть зберегти і повернути
        <br /> здоров’я ваших зубів
      </Subtitle>

      <DentistsContainer>
        {DOCTORS.map((doctor, i) => (
          <DoctorCard
            key={i.toString()}
            title={doctor.name}
            description={doctor.description}
            url={doctor.url}
          />
        ))}
      </DentistsContainer>
    </Wrapper>
  );
};

export default Dentists;
