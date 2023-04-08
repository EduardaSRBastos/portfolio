import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from 'react-icons/bs';
import {
    Container,
    TitleContainer,
    Title,
    Line,
    Picture,
    ItemsContainer,
    TextContainer,
    AboutText,
    YellowText,
    LinksText,
    IconContainer,
} from "./Style";
import { Link, Icon } from "@chakra-ui/react";
import Oc from "../../Images/Oc.png"

export default function About() {

    return (
        <div id='about'>
            <Container>
                <TitleContainer>
                    <Line />
                    <Title>ABOUT ME</Title>
                </TitleContainer>
                <ItemsContainer>
                    <Picture src={Oc} alt='Profile Picture' />
                    <TextContainer>
                        <AboutText>
                            Hi! I’m <YellowText>Eduarda</YellowText>. <br/>
                            <br/>
                            I’m a Software and Web Developer.<br/>
                            I have a Bachelor Degree in Computer Engineering.<br/>
                            <br/>
                            I've always been curious about programming, and when I was a kid, 
                            I used to customize my Tumblr and blog themes by editing the HTML page. 
                            It was almost magical to see the page changing with lines of text. In high school, 
                            I decided to take a computer course.<br/>
                            <br/>
                            In my free time, I like <LinksText onClick={(e) => {
                            e.preventDefault();
                            window.location.href='#art';
                            }}>painting</LinksText> and <LinksText onClick={(e) => {
                            e.preventDefault();
                            window.location.href='#photo';
                            }}>photography</LinksText>.
                        </AboutText>
                        <IconContainer>
                            <Link href="https://github.com/EduardaSRBastos" target={"_blank"} m="40px 30px">
                                <Icon as={BsGithub} _hover={{color: "black"}} transition="0.4s" maxW=" 100%"/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/eduardabastos/" target={"_blank"} m="40px 30px">
                                <Icon as={BsLinkedin} _hover={{color: "#0A66C2"}} transition="0.4s" maxW=" 100%"/>
                            </Link>
                            <Link href="mailto:eduardasofia2000@gmail.com" target={"_blank"} m="40px 30px">
                                <Icon as={BsFillEnvelopeFill} _hover={{color: "#c71610"}} transition="0.4s" maxW=" 100%"/>
                            </Link>
                        </IconContainer>
                    </TextContainer>
                </ItemsContainer>
            </Container>
        </div>
    );
}