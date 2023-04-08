import { Box, Text, Button, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.5vh;
  height: 148vh;
  background-color: #34353A;
`;

export const TitleContainer = styled.div`
  display: flex; 
  cursor: default;
  align-items: center;
`;

export const Line = styled(Box)`
  background: #FFDA18;
  height: 0.2vh;
  width: 6vh;
  margin-right: 2.9vh;
  box-shadow: 0 0 0.7vh black;
`;

export const Title = styled(Text)`
  font-size: 4.50vh;
  color: #FFDA18;
  text-shadow: 0 0 0.7vh black;
`;

export const ItemsContainer = styled.div`
  display: grid; 
  align-items: center;
  margin-top: 2.8vh;
`;

export const ProjectsContainer = styled.div`
  display: flex; 
  margin: auto;
  position: relative;
`;

export const ProjectContainer = styled.div`
  margin: 2.8vh;
  position: relative;
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
  font-size: 2.8vh;
  padding-top: 28%;
  top: 0%;
  text-align: center;
  width: 100%;
  opacity: 0;
  transition: .3s ease-in-out;
  :hover {
    opacity: 1;
    backdrop-filter: blur(0.4vh) brightness(0.5);
    text-shadow: 0 0 0.7vh black;
  }
`;

export const ProjectText = styled(Text)`
  text-align: center;
  width: 100%;
  cursor: default;
  color: white;
`;

export const ProjectButton = styled(Button)`
  text-align: center;
  background-color: #FFDA18 !important;
  color: black;
  margin-top: 2vh;
  height: 4.3vh !important;
  :hover {
    background: #c7a302 !important;
  }
`;