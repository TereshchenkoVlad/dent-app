import React from "react";

import { NormalTitle, RegularType2 } from "styles/text";
import { theme } from "styles/colors";
import styled from "styled-components";
import { EnumSeviceID, SeviceType } from "data/services";

const styles = {
  title: {
    marginBottom: 10,
  },
};

interface Props {
  service: SeviceType;
  onPress: (id: EnumSeviceID) => void;
}

const ServiceItem = ({ service, onPress }: Props) => {
  return (
    <ItemWrapper onClick={() => onPress(service.id)}>
      <Filter className="service_image" />
      <ItemImage className="service_image" src={service.imageURL} alt="main" />

      <Item>
        <Icon className="service_icon" src={service.iconURL} alt="icon" />
        <NormalTitle
          className="service_text"
          style={styles.title}
          color={theme.black}
        >
          {service.title}
        </NormalTitle>
        <RegularType2 className="service_text">
          {service.description}
        </RegularType2>
      </Item>
    </ItemWrapper>
  );
};

export default ServiceItem;

const first_point = 500;

const ItemWrapper = styled.div`
  width: 315px;
  height: 256px;
  border-radius: 5px;
  background-color: ${theme.blueTransparent};
  margin: 20px;
  position: relative;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.3);
  }

  &:hover .service_image {
    opacity: 1;
  }
  &:hover .service_text {
    color: ${theme.mainWhite};
  }
  &:hover .service_icon {
    filter: brightness(0) invert(1);
  }

  @media only screen and (max-width: ${first_point}px) {
    width: 280px;
    height: 240px;
    margin: 15px;
  }
`;

const Item = styled.div`
  position: absolute;
  padding: 0 30px;
  z-index: 2;
`;

const ItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 5px;
  transition: opacity ease-in-out 0.35s;
`;

const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 5px;
  transition: opacity ease-in-out 0.35s;
  background: linear-gradient(
    0deg,
    rgba(0, 172, 237, 0.7),
    rgba(0, 172, 237, 0.7)
  );
  z-index: 1;
`;

const Icon = styled.img`
  margin-top: 53px;
  width: 35px;
  height: 35px;
  margin-bottom: 15px;
  @media only screen and (max-width: ${first_point}px) {
    margin-top: 25px;
  }
`;
