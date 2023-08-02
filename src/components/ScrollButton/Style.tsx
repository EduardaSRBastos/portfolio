import { Icon } from "@chakra-ui/react";
import styled from "styled-components";

export const ButtonIcon = styled(Icon)`
transition: all 0.5s linear; 
cursor: pointer;
font-size: 8vh;  
color: var(--primary-color); 
position: fixed; 
bottom: 2vh; 
right: 3vh;
z-index: 1000;
transform: scale(0);

&.show {
    transform: scale(1);
    color: white;
}
:hover {
    color: var(--primary-color); 
    transform: translate(0, -2.2vh) scale(1.2);
}
`;