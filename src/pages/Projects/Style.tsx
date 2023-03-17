import { Box, Text, Button, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 70px;
  height: 650px;
  background-color: #34353A;
`;

export const TitleContainer = styled.div`
  display: flex; 
  cursor: default;
  align-items: center;
`;

export const Line = styled(Box)`
  background: #FFDA18;
  height: 2px;
  width: 40px;
  margin-right: 20px;
  box-shadow: 0 0 5px black;
`;

export const Title = styled(Text)`
  font-size: 32px;
  color: #FFDA18;
  text-shadow: 0 0 5px black;
`;

export const ItemsContainer = styled.div`
  display: grid; 
  align-items: center;
  margin-top: 20px;
`;

export const ProjectsContainer = styled.div`
  display: flex; 
  margin: auto;
  position: relative;
`;

export const ProjectContainer = styled.div`
  margin: 20px;
  position: relative;
`;

export const ProjectImage = styled(Image)`
  width: 300px;
  height: 200px;
`;

export const ProjectTextContainer = styled.div`
  width: 300px;
  height: 200px;
  position: absolute;
  font-size: 20px;
  padding-top: 28%;
  top: 0%;
  text-align: center;
  width: 100%;
  opacity: 0;
  transition: .3s ease-in-out;
  :hover {
    opacity: 1;
    backdrop-filter: blur(3px) brightness(0.5);
    text-shadow: 0 0 5px black;
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
  margin-top: 15px;
  height: 30px !important;
`;