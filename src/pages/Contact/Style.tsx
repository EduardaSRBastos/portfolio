import { Box, Text, Button } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 150px;
  height: 1000px;
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
  display: flex; 
  align-items: center;
`;

export const EmailContainer = styled.div`
  display: grid; 
  margin-left: 150px;
  margin-top: 30px;
  cursor: default;
`;

export const InputText = styled(Text)`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

export const EmailButton = styled(Button)`
  font-size: 20px;
  background: #FFDA18 !important;
  color: black;
  width: fit-content;
  justify-self: center;
  :hover {
    background: #c7a302 !important;
  }
`;

export const TextContainer = styled.div`
  display: grid; 
  margin-left: 300px;
  cursor: default;
`;

export const Name = styled(Text)`
  font-size: 40px;
  color: #FFDA18;
`;

export const DevText = styled(Text)`
  font-size: 28px;
  color: white;
`;

export const EmailText = styled(Text)`
  font-size: 24px;
  color: white;
`;

export const IconContainer = styled.div`
  display: flex; 
  margin: auto;
  font-size: 40px;
  color: white;
`;