import { Box, Text, Image, Icon } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 100px;
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

export const Picture = styled(Image)`
  height: 340px;
  border-radius: 200px;
  margin: -30px 80px 50px 40px;
`;

export const ItemsContainer = styled.div`
  display: flex; 
  cursor: default;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: grid; 
  margin-right: 80px;
`;

export const AboutText = styled(Text)`
  font-size: 24px;
  color: #E8E8E8;
  text-align: justify;
  margin-top: 30px;
`;

export const YellowText = styled.span`
  color: #FFDA18;
  font-size: 26px;
`;

export const LinksText = styled.a`
  color: #FFDA18;
  text-decoration: underline;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex; 
  margin: auto;
`;

export const Icons = styled(Icon)`
  font-size: 40px;
  color: white;
  cursor: pointer;
  margin: 40px 30px;
`;