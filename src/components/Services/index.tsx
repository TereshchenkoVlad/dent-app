import { SERVICES } from "data/services";
import React from "react";
import styled from "styled-components";
import ServiceDescription from "./ServiceDescription";

import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <Container>
      {SERVICES.map((s, i) => {
        if (i === 0) {
          return (
            <React.Fragment key={i.toString()}>
              <ServiceDescription />
              <ServiceItem
                title={s.title}
                iconURL={s.iconURL}
                imageURL={s.imageURL}
                description={s.description}
              />
            </React.Fragment>
          );
        }

        return (
          <ServiceItem
            key={i.toString()}
            title={s.title}
            iconURL={s.iconURL}
            imageURL={s.imageURL}
            description={s.description}
          />
        );
      })}
    </Container>
  );
};

export default Services;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 100px 60px 80px 60px;
`;
