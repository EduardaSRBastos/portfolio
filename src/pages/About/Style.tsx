import { Box, Text, Image } from "@chakra-ui/react";
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

export const PictureContainer = styled.div`
  height: 47.8vh;
  border-radius: 30vh;
  width: 60%;
  height: 60%;
  margin: -4.4vh 11.5vh 7vh 5.5vh;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const Picture = styled(Image)`
  transition: transform 0.4s ease-in-out;
  box-shadow: 0 0 200px rgba(255, 255, 255, 0.5);
  ${PictureContainer}:hover & {
    transform: scale(1.15);
  }
`;

export const ItemsContainer = styled.div`
  display: flex; 
  cursor: default;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: grid; 
  margin-right: 11.2vh;
`;

export const AboutText = styled(Text)`
  font-size: 3.4vh;
  color: #E8E8E8;
  text-align: justify;
  margin-top: 4.2vh;
`;

export const YellowText = styled.span`
  color: #FFDA18;
  font-size: 3.8vh;
`;

export const LinksText = styled.a`
  color: #FFDA18;
  text-decoration: underline;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex; 
  margin: auto;
  font-size: 5.6vh;
  color: white;
`;