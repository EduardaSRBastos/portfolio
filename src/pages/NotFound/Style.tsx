import { Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  height: 100%;
  padding-top: 8vh;
  background-color: #34353A;
`;

export const TextImageContainer = styled.div`
    display: flex;
`;

export const TextContainer = styled.div`
    margin: 10vh;
    text-align: justify;
`;

export const Text404 = styled.h1`
    font-size: 25vh;
    color: #FFDA18;
    margin-bottom: -8vh;
`;

export const TextNotFound = styled.h2`
    font-size: 8vh;
    color: white;
    margin-bottom: 2vh;
`;

export const TextOooops = styled.h3`
    font-size: 4vh;
    color: white;
`;

export const TextDoesntExist = styled.h4`
    font-size: 3vh;
    color: white;
`;

export const LinkButton = styled(Link)`
    display: flex; 
    justify-content: center;
`

export const ButtonHome = styled(Button)`
    margin-top: 3vh;
    font-size: 3vh;
    background: #FFDA18 !important;
    color: black;
    width: fit-content;
    justify-self: center;
    :hover {
      background: #c7a302 !important;
    }
`;

export const ImageCat = styled(Image)`
    width: 45%;
    height: 100%;
`;