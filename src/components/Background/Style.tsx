import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
import CatPaw from "../../Files/CatPaw.png"

export const Body = styled.div`
    padding:0;
    margin:0;
    height: 100vh;
    max-width: 100%;
    overflow: hidden;
    z-index: -1;
`;

export const Paw = styled(Box)`
    position: absolute;
    width: 50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    animation: pawAnimation 4s linear infinite;

    @keyframes pawAnimation {
        0% {
        {background-image: url(${CatPaw});opacity: 0;};
        }
        50% {
        {background-image: url(${CatPaw});opacity: 0.1;};
        }
        100% {
        {background-image: url(${CatPaw});opacity: 0;};
        }
    }
`;