import { Body, BoxContainer, Circle, Shadow, LoadingText } from "./Style";


export default function LoadingScreen() {
  return (
    
    <Body>
    <BoxContainer>
        <Circle className="circle"></Circle>
        <Circle className="circle"></Circle>
        <Circle className="circle"></Circle>
        <Shadow className="shadow"></Shadow>
        <Shadow className="shadow"></Shadow>
        <Shadow className="shadow"></Shadow>
        <LoadingText className="text">L</LoadingText>
        <LoadingText className="text">O</LoadingText>
        <LoadingText className="text">A</LoadingText>
        <LoadingText className="text">D</LoadingText>
        <LoadingText className="text">I</LoadingText>
        <LoadingText className="text">N</LoadingText>
        <LoadingText className="text">G</LoadingText>
    </BoxContainer>
    </Body>
  );
}