import { Box, Text, Icon } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 100px;
  height: 650px;
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
  display: grid; 
  align-items: center;
  background: #4F5056;
  margin: 50px 150px;
  border-radius: 20px;
  padding-bottom: 50px;
  width: 80%;
  min-width: 900px;
`;


export const IconsContainer = styled.div`
  display: flex; 
  margin: -30px 20px 20px -30px;
`;

export const IconContainer = styled.div`
  display: grid; 
  margin: auto;
  padding: auto;
  height: auto;
  max-width: 140px;
  text-align: center;
  color: white;
  :hover {
    color: #FFDA18;
  }
`;

export const Icons = styled(Icon)`
  font-size: 60px;
  margin: 90px 60px 10px;
`;

export const IconText = styled(Text)`
  font-size: 20px;
  cursor: default;
`;