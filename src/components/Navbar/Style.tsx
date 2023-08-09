import { HStack, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const NavbarContainer = styled(HStack)`
  height: 6.5vh;
  background-color: #2D2E32;
  box-shadow: 0px 0.4vh 1.4vh 0 #00000058;
  border-bottom: 0.14vh solid black; 
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
`;

export const LogoContainer = styled.div`
  margin-left: 10vh;
  height: 6vh;

  @media only screen and (max-width: 920px) {
    margin-left: 3vh;
  }

  :hover {
    animation: boing 0.9s both;
  }

 @keyframes boing {
   0% {
     transform: scale3d(1.1, 1.1, 1.1);
   }
   30% {
     transform: scale3d(1.35, 0.85, 1.1);
   }
   40% {
     transform: scale3d(0.85, 1.35, 1.1);
   }
   50% {
     transform: scale3d(1.25, 0.95, 1.1);
   }
   65% {
     transform: scale3d(1.05, 1.15, 1.1);
   }
   75% {
     transform: scale3d(1.15, 1.05, 1.1);
   }
   100% {
     transform: scale3d(1.1, 1.1, 1.1);
   }
 }
`;

export const Logo = styled(Image)`
  height: 100%;
  cursor: pointer;
`;

export const Buttons = styled(HStack)`
  position: absolute;
  right: 10vh;

  @media only screen and (max-width: 920px) {
    right: 2vh;
  }
`;

export const ButtonContainer = styled.div`
  padding: 1.5vh;

  @media only screen and (max-width: 920px) {
    padding: 1vh;
  }
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
    height: 0.3vh;
    bottom: 0;
    left: 0;
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

  @media only screen and (max-width: 920px) {
    font-size: 2vh;
  }
`;