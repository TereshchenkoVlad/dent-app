import { EnumSeviceID, SERVICES } from "data/services";
import React from "react";
import styled from "styled-components";
import ServiceDescription from "./ServiceDescription";

import ServiceItem from "./ServiceItem";

interface Props {
  onServicePress: (id: EnumSeviceID) => void;
}

const Services = ({ onServicePress }: Props) => {
  return (
    <Container id="services">
      {SERVICES.map((service, i) => {
        if (i === 0) {
          return (
            <React.Fragment key={i.toString()}>
              <ServiceDescription />
              <ServiceItem service={service} onPress={onServicePress} />
            </React.Fragment>
          );
        }

        return (
          <ServiceItem
            service={service}
            key={i.toString()}
            onPress={onServicePress}
          />
        );
      })}
    </Container>
  );
};

export default Services;

const first_point = 1000;
const second_point = 700;
const third_point = 400;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 100px 0 80px 0;
  @media only screen and (max-width: ${first_point}px) {
    padding: 60px 0 40px 0;
  }
  @media only screen and (max-width: ${second_point}px) {
    padding: 20px 0 20px 0;
  }
  @media only screen and (max-width: ${third_point}px) {
    padding: 0px 0 20px 0;
  }
`;
