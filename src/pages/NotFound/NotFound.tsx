import { ButtonHome, ImageCat, LinkButton, NotFoundContainer, Text404, TextContainer, TextDoesntExist, TextImageContainer, TextNotFound, TextOooops } from "./Style";
import Cat404 from "../../Files/Cat404.png"
import Cat404Closed from "../../Files/Cat404_ClosedEyes.png"
import Cat404Glowing from "../../Files/Cat404_Glowing.png"
import catMeow from "../../Files/CatMeow.wav";
import { useState } from "react";
import React from "react";

export default function NotFound() {

    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
      const image = event.currentTarget;
      const imageRect = image.getBoundingClientRect();
      const mouseX = event.clientX - imageRect.left;
      const mouseY = event.clientY - imageRect.top;
    
      if (mouseX > 70 && mouseX < 200 && mouseY > 260 && mouseY < 400) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    }

    const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
      const image = event.currentTarget;
      const imageRect = image.getBoundingClientRect();
      const mouseX = event.clientX - imageRect.left;
      const mouseY = event.clientY - imageRect.top;
    
      if (mouseX > 70 && mouseX < 200 && mouseY > 260 && mouseY < 400) {
        setIsClicked(!isClicked);
        if (image.src === window.location.origin + Cat404Closed) {
          const audio = new Audio(catMeow);
          audio.volume = 0.5;
          audio.play();
        }
      }
    }

    
    return (
        <NotFoundContainer>
            <TextImageContainer>
                <TextContainer>
                    <Text404>404</Text404>
                    <TextNotFound>Page Not Found</TextNotFound>
                    <TextOooops>Oooops! Looks like the cat pulled the plug again.</TextOooops>
                    <TextDoesntExist>(The page you are looking for doesn't exist.)</TextDoesntExist>
                    <LinkButton reloadDocument to='/'>
                        <ButtonHome>Back to Home</ButtonHome>
                    </LinkButton>
                    
                </TextContainer>
                <ImageCat
                  src={isClicked ? Cat404Glowing : (isHovering ? Cat404Closed : Cat404)}
                  alt="Cat Image for 404 Page - Not Found"
                  onMouseMove={handleMouseMove}
                  onClick={handleClick}
                  isHovering={isHovering}
                ></ImageCat>
          </TextImageContainer>
        </NotFoundContainer>
    )
}
