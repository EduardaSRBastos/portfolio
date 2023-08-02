import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Button, Image, ImageProps } from '@chakra-ui/react';

export const NotFoundContainer = styled.div`
  height: 100%;
  padding-top: 8vh;
  background-color: #34353A;
`;

export const TextImageContainer = styled.div`
    display: flex;
    cursor: default;
`;

export const TextContainer = styled.div`
    margin: 10vh;
    text-align: justify;
`;

export const Text404 = styled.h1`
    font-size: 25vh;
    color: var(--primary-color);
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
    background: var(--primary-color) !important;
    color: black;
    width: fit-content;
    justify-self: center;
    transition: transform 0.4s ease-in-out;
    :hover {
        filter: brightness(110%);
        transform: scale(1.1);
      }
`;

type StyledImageProps = ImageProps & {
    isHovering: boolean;
  };
  
  export const ImageCat = styled(Image)<StyledImageProps>`
    width: 42%;
    height: 100%;
    cursor: ${props => (props.isHovering ? 'pointer' : 'default')};
    object-fit: cover;
  `;