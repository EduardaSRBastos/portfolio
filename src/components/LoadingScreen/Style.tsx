import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const Body = styled.div`
    height: 100vh;
    background:radial-gradient(var(--primary-color), #ffb100);
    @media only screen and (max-width: 768px) {
        min-width: 115%;    
    }
`;

export const BoxContainer = styled(Box)`
    width:300px;
    height:60px;
    position: absolute;
    left:50%;
    top:45%;
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 768px) {
        margin: -8% 8%;
    }
`;

export const Circle = styled(Box)`
    width:25px;
    height:25px;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    left:15%;
    transform-origin: 50%;
    animation: circle .5s alternate infinite ease;
   
    @keyframes circle{
        0%{
            background-color: #ff995d;
            top:60px;
            height:5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
        }
        40%{
            height:20px;
            border-radius: 50%;
            transform: scaleX(1);
        }
        100%{
            top:0%;
        }
    }

    &.circle:nth-child(2){
        left:45%;
        animation-delay: .2s;
    }
    
    &.circle:nth-child(3){
        left:auto;
        right:15%;
        animation-delay: .3s;
    }
`;

export const Shadow = styled(Box)`
    width:25px;
    height:4px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    top:62px;
    transform-origin: 50%;
    z-index: -1;
    left:15%;
    filter: blur(1px);
    animation: shadow .5s alternate infinite ease;

    @keyframes shadow{
        0%{
            background-color: #ff995d;
            transform: scaleX(1.5);
        }
        40%{
            transform: scaleX(1);
            opacity: .7;
        }
        100%{
            transform: scaleX(.2);
            opacity: .4;
        }
    }

    &.shadow:nth-child(4){
        left: 45%;
        animation-delay: .2s
    }

    &.shadow:nth-child(5){
        left:auto;
        right:15%;
        animation-delay: .3s;
    }
`;

export const LoadingText = styled(Text)`
    position: absolute;
    margin-top: 120px;
    font-size: 20px;
    letter-spacing: 12px;
    color: #fff;
    left: 22%;
    position: relative;
    top: 2px;
    display: inline-block;
    cursor: default;
    animation: text 0.6s ease infinite alternate;
    
    @keyframes text{
        
        0%{
          top: -2px;
          
          text-shadow: 0 1px #ff995d, 
                       0 2px #ff995d, 
                       0 3px #ff995d, 
                       0 4px #ff995d, 
                       0 10px 15px rgba(0, 0, 0, 0.2);

        }
      }
     
      &.text:nth-child(8){
        animation-delay:0.1s;
      }
      &.text:nth-child(9){
        animation-delay:0.2s;
      }
      &.text:nth-child(10){
        animation-delay:0.3s;
      }
      &.text:nth-child(11){
        animation-delay:0.4s;
      }
      &.text:nth-child(12){
        animation-delay:0.5s;
      }
      &.text:nth-child(13){
        animation-delay:0.6s;
      }
      &.text:nth-child(14){
        animation-delay:0.7s;
      }

`;

