import { HStack, Image } from "@chakra-ui/react";
import styled from "styled-components";

export const NavbarContainer = styled(HStack)`
  height: 70px;
  background-color: #2D2E32;
  box-shadow: 0px 3px 10px 0px #00000058;
  border-bottom: 1px solid black; 
  position: fixed;
  width: 100%;
  top: 0;
`;

export const LogoContainer = styled.div`
  margin-left: 50px;
  height: 70px;
`;

export const Logo = styled(Image)`
  height: 100%;
  cursor: pointer;
`;

export const Buttons = styled(HStack)`
  position: absolute;
  right: 50px;
`;

export const ButtonContainer = styled.div`
  padding: 20px;
`;

export const Button = styled.button`
  color: white;
  background-color: transparent;
  font-size: 30px;
  :hover {
    color: #FFDA18;
    text-decoration: underline;
  }
`;