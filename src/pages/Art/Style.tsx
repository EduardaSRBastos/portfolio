import { Box, Text, Image, Button } from "@chakra-ui/react";
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

export const MenuButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex: auto;
  right: 15%;
  gap: 8%;
`;

export const MenuButton = styled(Button)`
flex: 0 0 45%;
  color: black;
  border-radius: 1.5vh !important;
  :hover {
    filter: brightness(110%);
    transform: scale(1.2);
  }
`;

export const ItemsContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  margin-top: 2%;
  margin-left: 2.3%;
`;

export const PicturesContainer = styled.div`
  flex: 24%;
  max-width: 24%;
  padding: 0 2.5vh;
`;

export const PictureContainer = styled.div`
  margin: 2.8vh;
  position: relative;
  ::before
      {
          content:'';
          position:relative;
          width:100%;
          height:100%;
      }
  transition: .5s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

export const Picture = styled(Image)`
  margin-top: 2vh;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.15);
`;

export const PictureButtonContainer = styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  justify-content: center;
  top: 0%;
  text-align: center;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease-in-out;
  ::before
      {
          content:'';
          position:absolute;
          width:100%;
          height:100%;
          box-shadow:inset 0px 0px 3px 1px rgba(52,53,58,1);
      }
  :hover {
    opacity: 1;
    backdrop-filter: blur(0.4vh) brightness(0.5);
  }
`;

export const PictureButton = styled(Button)`
  background-color: #FFDA18 !important;
  color: black;
  padding: 5%;
  margin-top: 2vh;
  height: 5vh !important;
  :hover {
    filter: brightness(110%);
    transform: scale(1.2);
  }
`;