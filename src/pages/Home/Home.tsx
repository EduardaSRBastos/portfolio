import {
    HomeContainer,
    TextContainer,
} from "./Style";

import { SpeechBalloon } from "../../components/HomeSpeechBalloon/JavaScript/app";
import React from "react";

export default function Home() {
  
    return (
        <div id=''>
            <HomeContainer>
                <TextContainer style={{zIndex:1}}>
                <SpeechBalloon/>
                </TextContainer>
            </HomeContainer>
        </div>
    );
}