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

export const Picture = styled(Image)`
  height: 47.8vh;
  border-radius: 29vh;
  margin: -4.4vh 11.5vh 7vh 5.5vh;
  max-width: 100%;
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