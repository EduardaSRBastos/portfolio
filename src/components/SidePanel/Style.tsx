import { VStack } from "@chakra-ui/react";
import styled from "styled-components";

export const SidePanelContainer = styled.div`
    height: 50vh;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #2D2E32;
    box-shadow: 0px 0.4vh 1.4vh 0 #00000058;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-top: 60px;
    transition: 0.5s;
    border-bottom-left-radius: 5%;

    &.open {
        width: 30vh;
    }
`;

export const CloseButton = styled.a`
    color: white;
    position: absolute;
    top: 5%;
    right: 10%;
    font-size: 5vh;

    :hover {
        color: #FFDA18;
    }
`;

export const Buttons = styled(VStack)`
  @media only screen and (max-width: 920px) {
    right: 3vh;
  }
`;

export const ButtonContainer = styled.div`

  @media only screen and (max-width: 920px) {
    padding: 1.5vh;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: transparent;
  font-size: 4.2vh;
  position: relative;
  :after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.3vh;
    bottom: 0;
    left: 0;
    background-color: #FFDA18;
    transition: transform 0.25s ease-out;
  }
  :hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  :hover {
    color: #FFDA18;
  }

  @media only screen and (max-width: 920px) {
    font-size: 4vh;
  }
`;