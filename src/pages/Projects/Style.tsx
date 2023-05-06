import { Box, Text, Button, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.5vh;
  height: 100vh;
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
  ::before
      {
          content:'';
          position:absolute;
          width:100%;
          height:100%;
          box-shadow:inset 0px 0px 3px 1px rgba(52,53,58,1);
      }
  transition: .5s ease-in-out;
  :hover {
    transform: scale(1.1);
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
  padding-top: 22%;
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
  font-size: 3.5vh;
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
  background-color: #FFDA18 !important;
  color: black;
  margin-top: 2vh;
  height: 4.3vh !important;
  :hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }
`;