import React from "react";
import styled from "styled-components";

import { LinkType } from "config/i18n";

import { theme } from "styles/colors";
import { MediumText } from "styles/text";
import { forth_point, Link } from "./styles";

const styles = {
  item: {
    marginBottom: 15,
  },
};

interface Props {
  links: LinkType[];
  onLinkPress: () => void;
}

const DropMenu = ({ links, onLinkPress }: Props) => {
  return (
    <Container>
      {links.map((link, index) => {
        const style = links.length - 1 === index ? {} : styles.item;
        return (
          <Link href={`#` + link.id} key={link.id} onClick={onLinkPress}>
            <MediumText {...{ style }}>{link.name}</MediumText>
          </Link>
        );
      })}
    </Container>
  );
};

export default DropMenu;

const Container = styled.div`
  width: 120px;
  position: absolute;
  right: 0;
  top: 40px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${theme.mainBlue};
  z-index: 10;

  @media only screen and (max-width: ${forth_point}px) {
    top: 30px;
  }
`;
