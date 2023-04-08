import { Link } from "react-router-dom";
import { ButtonHome, ImageCat, LinkButton, NotFoundContainer, Text404, TextContainer, TextDoesntExist, TextImageContainer, TextNotFound, TextOooops } from "./Style";
import Cat404 from "../../Images/Cat404.png"

export default function NotFound() {

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
                <ImageCat src={Cat404} alt="Cat Image for 404 Page - Not Found"></ImageCat>
            </TextImageContainer>
        </NotFoundContainer>
    )
}
