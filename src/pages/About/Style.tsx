import { Box, Text, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.5vh;
  height: 100vh;
  background-color: #34353A;
  width: 100%;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    height: 190vh;
  }
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

  @media only screen and (max-width: 768px) {
    width: 4vh;
  }
`;

export const Title = styled(Text)`
  font-size: 4.50vh;
  color: #FFDA18;
  text-shadow: 0 0 0.7vh black;

  @media only screen and (max-width: 768px) {
    font-size: 4vh;
  }
`;

export const PictureContainer = styled.div`
  height: 47.8vh;
  border-radius: 30vh;
  width: 60%;
  height: 60%;
  margin: -4.4vh 11.5vh 7vh 5.5vh;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    margin: 4vh 11.5vh 0vh 6.5vh;
    height: 35vh;
    width: 35vh;
  }
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

  @media only screen and (max-width: 768px) {
    display: grid;
  }
`;

export const TextContainer = styled.div`
  display: grid; 
  margin-right: 11.2vh;

  @media only screen and (max-width: 768px) {
  margin: 0 7vh 0 3vh;
  }
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