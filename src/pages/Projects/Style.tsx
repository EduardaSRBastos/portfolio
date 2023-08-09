import { Box, Text, Button, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.5vh;
  height: 90vh;
  background-color: #34353A;
  
  @media only screen and (max-width: 768px) {
    height: 220vh;
  }
`;

export const TitleContainer = styled.div`
  display: flex; 
  cursor: default;
  align-items: center;
`;

export const Line = styled(Box)`
  background: var(--primary-color);
  height: 0.2vh;
  width: 4vh;
  margin-right: 2.5vh;
  box-shadow: 0 0 0.7vh black;
`;

export const Title = styled(Text)`
  font-size: 3.6vh;
  color: var(--primary-color);
  text-shadow: 0 0 0.7vh black;

  @media only screen and (max-width: 768px) {
    font-size: 3vh;
  }
`;

export const ItemsContainer = styled.div`
  display: grid; 
  align-items: center;
  margin-top: 2.8vh;

  @media only screen and (max-width: 768px) {
    margin-right: -5vh;
    margin-left: 1vh;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex; 
  margin: auto;
  position: relative;
`;

export const ProjectContainer = styled.div`
  margin: 2.8vh;
  position: relative;
  transition: .5s ease-in-out;
  :hover {
    transform: scale(1.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.4vh) brightness(0.5);
    opacity: 0;
    transition: opacity .3s ease-in-out;
  }

  :hover::before {
    opacity: 1;
  }
`;

export const ProjectImage = styled(Image)`
  width: 42.5vh;
  height: 28.2vh;
  max-width: 100%;
`;

export const ProjectTextContainer = styled.div`
  width: 42.5vh;
  height: 28.2vh;
  position: absolute;
  top: 0;
  padding-top: 22%;
  text-align: center;
  width: 100%;
  opacity: 0;
  transition: .3s ease-in-out;

  ${ProjectContainer}:hover & {
    opacity: 1;
    text-shadow: 0 0 0.7vh black;
  }
`;

export const ProjectText = styled(Text)`
  font-size: 3vh;
  text-align: center;
  width: 100%;
  cursor: default;
  color: white;
`;

export const ProjectDescription = styled(Text)`
  font-size: 2vh;
  text-align: center;
  width: 100%;
  cursor: default;
  color: #fff0a3;
  margin-top: -2%;
`;

export const ProjectButton = styled(Button)`
  text-align: center;
  background-color: var(--primary-color) !important;
  color: black;
  margin-top: 2vh;
  width: 25%;
  border-radius: 5vh !important;
  height: 4.3vh !important;
  :hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }
`;