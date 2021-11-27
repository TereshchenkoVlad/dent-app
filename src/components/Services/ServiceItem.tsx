import React from "react";

import { NormalTitle, SmallText } from "styles/text";
import { theme } from "styles/colors";
import styled from "styled-components";

const styles = {
  title: {
    marginBottom: 10,
  },
};

interface Props {
  title: string;
  iconURL: string;
  imageURL: string;
  description: string;
}

const ServiceItem = ({ title, iconURL, imageURL, description }: Props) => {
  return (
    <ItemWrapper>
      <ItemImage className="service_image" src={imageURL} alt="main" />

      <Item>
        <Icon className="service_icon" src={iconURL} alt="icon" />
        <NormalTitle
          className="service_text"
          style={styles.title}
          color={theme.black}
        >
          {title}
        </NormalTitle>
        <SmallText className="service_text">{description}</SmallText>
      </Item>
    </ItemWrapper>
  );
};

export default ServiceItem;

const ItemWrapper = styled.div`
  width: 315px;
  height: 256px;
  border-radius: 5px;
  background-color: ${theme.blueTransparent};
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  user-select: none;
  &:hover .service_image {
    opacity: 1;
  }
  &:hover .service_text {
    color: ${theme.mainWhite};
  }
  &:hover .service_icon {
    filter: brightness(300%);
  }
`;

const Item = styled.div`
  position: absolute;
  padding: 0 30px;
`;

const ItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity ease-in-out 0.35s;
`;

const Icon = styled.img`
  margin-top: 53px;
  width: 35px;
  height: 35px;
  margin-bottom: 15px;
`;
