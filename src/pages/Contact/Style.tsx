import { Box, Text, Button, FormLabel } from "@chakra-ui/react";
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
  display: flex; 
  align-items: center;
`;

export const EmailContainer = styled.div`
  display: grid; 
  margin-left: 21vh;
  margin-top: 4.2vh;
  cursor: default;
`;

export const InputText = styled(FormLabel)`
  font-size: 2.7vh;
  color: white;
  margin-bottom: 1.2vh;
`;

export const EmailButton = styled(Button)`
  font-size: 2.7vh;
  background: #FFDA18 !important;
  color: black;
  width: fit-content;
  justify-self: center;
  transition: transform 0.4s ease-in-out;
  :hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }
`;

export const TextContainer = styled.div`
  display: grid; 
  margin-left: 43vh;
  cursor: default;
`;

export const Name = styled(Text)`
  font-size: 5.7vh;
  color: #FFDA18;
`;

export const DevText = styled(Text)`
  font-size: 3.9vh;
  color: white;
`;

export const EmailText = styled(Text)`
  font-size: 3.4vh;
  color: white;
`;

export const IconContainer = styled.div`
  display: flex; 
  margin: auto;
  font-size: 5.6vh;
  color: white;
`;