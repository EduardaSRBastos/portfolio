import { HStack, Text } from "@chakra-ui/react";
import styled from "styled-components";
import SpeechBalloon from "../../Images/SpeechBalloon.png"

export const HomeContainer = styled(HStack)`
  height: 148vh;
  margin-top: -14vh;
  background: url(${SpeechBalloon}) center no-repeat;
  background-color: #34353A;
  background-size: 50% auto;
  max-width: 100%;
`;

export const TextContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: -22vh;
  text-align: center;
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