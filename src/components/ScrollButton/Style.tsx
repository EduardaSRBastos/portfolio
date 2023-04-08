import { Icon } from "@chakra-ui/react";
import styled from "styled-components";

export const ButtonIcon = styled(Icon)`
transition: all 0.5s linear; 
cursor: pointer;
font-size: 10vh;  
color: #FFDA18; 
position: fixed; 
bottom: 2.9vh; 
right: 4vh;
z-index: 1000;
transform: scale(0);

&.show {
    transform: scale(1);
    color: white;
}
:hover {
    color: #FFDA18; 
    transform: translate(0, -2.2vh) scale(1.2);
}
`;