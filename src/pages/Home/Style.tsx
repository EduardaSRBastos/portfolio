import { HStack, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const HomeContainer = styled(HStack)`
  height: 100vh;
  margin-top: 8vh;
  background-color: #34353A;
  background-size: 50% auto;
  max-width: 100%;
`;

export const TextContainer = styled.div`
  margin-top: 4vh;
  cursor: default;
`;

export const Name = styled(Text)`
  font-size: 14vh;
  color: #FFC524;
`;

export const Title = styled(Text)`
  font-size: 5.9vh;
  color: black;
`;