import { Box, Text, Icon } from "@chakra-ui/react";
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
  display: grid; 
  align-items: center;
  background: #4F5056;
  margin: 5vh 20.5vh;
  border-radius: 2.5vh;
  padding-bottom: 7vh;
  width: 80%;
  min-width: 134vh;
`;


export const IconsContainer = styled.div`
  display: flex; 
  margin: -4.3vh 2.7vh 2.8vh -2.8vh;
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
    color: #FFDA18;
    transform: scale(1.2);
  }
`;

export const Icons = styled(Icon)`
  font-size: 8.4vh;
  margin: 12.7vh 8vh 1.4vh;
  max-width: 100%;
`;

export const IconText = styled(Text)`
  font-size: 2.8vh;
  cursor: default;
`;