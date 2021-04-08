import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="oinkydao home page">
          <img
            src="https://github.com/oinkydao/pancake-uikit/blob/master/src/widgets/Menu/logo.svg?raw=true"
            alt="Milkswap Logo"
            className="mobile-icon"
          />
          <img
            src="https://github.com/oinkydao/pancake-uikit/blob/master/src/widgets/Menu/large-logo.png?raw=true"
            alt="Milkswap Logo"
            className="desktop-icon"
          />
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="oinkydao home page">
          <img
            src="https://github.com/oinkydao/pancake-uikit/blob/master/src/widgets/Menu/logo.svg?raw=true"
            alt="oinkydao Logo"
            className="mobile-icon"
          />
          <img
            src="https://github.com/oinkydao/pancake-uikit/blob/master/src/widgets/Menu/large-logo.png?raw=true"
            alt="oinkydao Logo"
            className="desktop-icon"
          />
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
