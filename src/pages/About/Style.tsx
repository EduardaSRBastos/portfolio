import { Box, Text, Image } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.5vh;
  height: 90vh;
  background-color: #34353A;
  width: 100%;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    height: 135vh;
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

export const PictureContainer = styled.div`
  height: 47.8vh;
  border-radius: 30vh;
  width: 50%;
  height: 50%;
  margin: 2vh 8vh 7vh 12vh;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    margin: 5vh 0vh 0vh 7vh;
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
  margin-right: 16vh;

  @media only screen and (max-width: 768px) {
  margin: -5vh -3vh 0 3vh;
  }
`;

export const AboutText = styled(Text)`
  font-size: 2.5vh;
  color: #E8E8E8;
  text-align: justify;
  margin-top: 10vh;
`;

export const YellowText = styled.span`
  color: var(--primary-color);
  font-size: 3vh;
`;

export const LinksText = styled(HashLink)`
  color: var(--primary-color);
  text-decoration: underline;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex; 
  margin: auto;
  font-size: 4vh;
  color: white;
`;