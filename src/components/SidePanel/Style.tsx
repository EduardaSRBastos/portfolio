import { VStack } from "@chakra-ui/react";
import styled from "styled-components";

export const SidePanelContainer = styled.div`
    height: 32vh;
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
      width: 20vh;
    }
`;

export const CloseButton = styled.a`
    color: white;
    position: absolute;
    top: 1%;
    right: 5%;
    font-size: 5vh;

    :hover {
        color: var(--primary-color);
    }
`;

export const Buttons = styled(VStack)`
`;

export const ButtonContainer = styled.div`
  padding-bottom: 1vh;
`;

export const Button = styled.button`
  color: white;
  background-color: transparent;
  font-size: 2.5vh;
  position: relative;
  :after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    background-color: var(--primary-color);
    transition: transform 0.25s ease-out;
  }
  :hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  :hover {
    color: var(--primary-color);
  }
`;