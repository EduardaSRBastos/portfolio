import { HStack, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const HomeContainer = styled(HStack)`
  height: auto;
  margin-top: 25vh;
  background-color: #34353A;
  background-size: 50% auto;
  width: 100%;
  max-width: 100%;
  
  @media only screen and (min-width: 768px) {
    min-height: 90vh;
    margin-top: 8vh;
    
  }
`;

export const TextContainer = styled.div`
  margin-top: 5vh;
  cursor: default;
`;