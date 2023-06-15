import {
    HomeContainer,
    TextContainer,
} from "./Style";

import { SpeechBalloon } from "../../components/HomeSpeechBalloon/JavaScript/app";

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