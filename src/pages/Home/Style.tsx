import { HStack, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const HomeContainer = styled(HStack)`
  height: 1000px;
  background: url(Images/SpeechBalloon.png) center no-repeat;
  background-color: #34353A;
  background-size: 671px 482px;
`;

export const TextContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: -150px;
  text-align: center;
  cursor: default;
`;

export const Name = styled(Text)`
  font-size: 96px;
  color: #FFC524;
`;

export const Title = styled(Text)`
  font-size: 40px;
  color: black;
`;