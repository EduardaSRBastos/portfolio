import { Box, Text, Button, FormLabel, Input, Textarea } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.5vh;
  height: 95vh;
  background-color: #34353A;

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

export const ItemsContainer = styled.div`
  display: flex; 
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: grid;
  }
`;

export const EmailContainer = styled.div`
  display: grid; 
  margin-left: 21vh;
  margin-top: 4.2vh;
  cursor: default;
  caret-color: #ffb618;

  @media only screen and (max-width: 768px) {
    margin-left: 4vh;
    width: 30%;
  }
`;

export const InputText = styled(FormLabel)`
  font-size: 2.7vh;
  color: white;
  margin-bottom: 1.2vh;
`;

export const EmailInput = styled(Input)`
  width: 45vh !important;
  margin-bottom: 20px;
  background-color: white !important;

  @media only screen and (max-width: 768px) {
    width: 42vh !important;
  }
`;

export const MessageText = styled(Textarea)`
  width: 45vh !important;
  height: 215px !important;
  margin-bottom: 20px;
  background-color: white !important;

  @media only screen and (max-width: 768px) {
    width: 42vh !important;
  }
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
  margin-top: 5vh;

  @media only screen and (max-width: 768px) {
    margin-left: 4vh;
    width: 30%;
  }
`;

export const Name = styled(Text)`
  font-size: 5.7vh;
  color: var(--primary-color);

  @media only screen and (max-width: 768px) {
    font-size: 5vh;
  }
`;

export const DevText = styled(Text)`
  font-size: 3.9vh;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 3vh;
  }
`;

export const EmailText = styled(Text)`
  font-size: 3.4vh;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 2.8vh;
  }
`;

export const IconContainer = styled.div`
  display: flex; 
  margin: auto;
  font-size: 4vh;
  color: white;

  @media only screen and (max-width: 768px) {
    width: 120%;
    margin-left: -3vh;
  }
`;