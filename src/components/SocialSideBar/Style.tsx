import { Icon, Link } from "@chakra-ui/react";
import styled from "styled-components";

export const SocialBarContainer = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-40%);
    left: 0%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 0 3vh 3vh 0;
    width: 3.3%;
    height: 32%;
    transition: all 0.5s ease;
    :hover {
        width: 3.8%;
    }
`;

export const Links = styled(Link)`
    display: block;
    margin: 20% 0;
    width: 100%;
    padding-top: 15%;
    height: 18%;
    text-align: center;
    font-size: 200%;
    transition: all 0.5s ease;
    position: relative;
    :before {
        content: attr(data-name);
        display: block;
        position: absolute;
        background: #1a1a1d;
        border-radius: 5%;
        margin-top: -5%;   
        left: 98%;
        padding: 5% 25%; 
        text-align: center;
        font-size: 70%;
        opacity: 0;
        transition: all 0.5s ease;
    }

    :hover:before { 
        opacity: 1;
        animation: pulseText 1.5s linear infinite;
      }  
    
      @keyframes pulseText {
        0% {
          transform: scale(1);
        }
        20% {
          transform: scale(1.03);
        }
        40% {
          transform: scale(1);
        }
        60% {
          transform: scale(0.98);
        }
        100% {
          transform: scale(1);
        }
      }
`;


export const Icons = styled(Icon)`
  position: relative;
  transition: 0.4s;
  max-width: 100%;
  left: 12%;

  :hover { 
    filter: brightness(140%);
    animation: pulse 1.5s linear infinite;
  }  

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.1);
    }
    40% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  &:active,
  &:focus {
    animation: spin 0.2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(360deg) scale(2);
    }
  }
`;