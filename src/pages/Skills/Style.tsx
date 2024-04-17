import { Box, Text, Icon } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.5vh;
  height: 90vh;
  background-color: #34353A;

  @media only screen and (max-width: 768px) {
    height: 160vh;
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
  display: grid; 
  align-items: center;
  background: #4F5056;
  margin: 4vh 20.5vh;
  border-radius: 2.5vh;
  padding-bottom: 5vh;
  width: 80%;
  min-width: 134vh;

  @media only screen and (max-width: 768px) {
    min-width: 98%;
    margin: 4vh;
    height: 20%;
  }
`;

export const IconsContainer = styled.div`
  display: flex; 
  margin: -6vh 2.6vh 2vh -2.8vh;
  
  @media only screen and (max-width: 768px) {
    margin-left: 1vh;
    margin-bottom: 0;
    margin-top: -5vh;
  }
`;

export const IconContainer = styled.div`
  display: grid; 
  margin: auto;
  padding: auto;
  height: auto;
  position: relative;
  max-width: 100%;
  text-align: center;
  color: white;
  transition: all 0.5s ease-in-out;
  :hover {
    color: var(--primary-color);
    transform: scale(1.2);
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const Icons = styled(Icon)`
  font-size: 6vh;
  margin: 12.7vh 8vh 1.4vh;
  max-width: 100%;
`;

export const IconText = styled(Text)`
  font-size: 2.2vh;
  cursor: default;
`;