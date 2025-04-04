import { Box, Text, Image, Button } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 17.5vh;
  height: 90vh;
  background-color: #34353A;

  @media only screen and (max-width: 768px) {
    height: auto;
    padding-top: 14vh;
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

export const MenuButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex: auto;
  right: 15%;
  gap: 8%;

  @media only screen and (max-width: 768px) {
    top: 1.5%;
    right: 15%;
    z-index: 10;
    gap: 5%;
    position: fixed;
  }
`;

export const MenuButton = styled(Button)`
  flex: 0 0 45%;
  color: black;
  border-radius: 2vh !important;
  :hover {
    filter: brightness(110%);
    transform: scale(1.2);
  }

  @media only screen and (max-width: 768px) {
    flex: 0 0 35%;
    height: 4vh !important;
    border-radius: 1.5vh !important;
    font-size: 2vh !important;
  }
`;

export const ItemsContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  margin-top: 2%;
  margin-left: 2.3%;

  @media only screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const PicturesContainer = styled.div`
  flex: 24%;
  max-width: 24%;
  padding: 0 2.5vh;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding 0;
  }
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

  @media only screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const Picture = styled(Image)`
  margin-top: 2vh;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 768px) {
    margin-top: 5vh;
    margin-left: 4vh;
  }
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

  @media only screen and (max-width: 768px) {
    margin-left: 4vh;
  }
`;

export const PictureButton = styled(Button)`
  background-color: var(--primary-color) !important;
  color: black;
  padding: 5%;
  margin-top: 2vh;
  width: 25%;
  border-radius: 5vh !important;
  height: 5vh !important;
  :hover {
    filter: brightness(110%);
    transform: scale(1.2);
  }
`;
