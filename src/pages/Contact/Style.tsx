import { Box, Text, Button, FormLabel } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.5vh;
  height: 95vh;
  background-color: #34353A;
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

  @media only screen and (max-width: 768px) {
    width: 4vh;
  }
`;

export const Title = styled(Text)`
  font-size: 3.6vh;
  color: var(--primary-color);
  text-shadow: 0 0 0.7vh black;

  @media only screen and (max-width: 768px) {
    font-size: 3vh;
  }
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
  background: var(--primary-color) !important;
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
  color: var(--primary-color);
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
  font-size: 4vh;
  color: white;
`;