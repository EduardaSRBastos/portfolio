import Oc from "../../Images/Oc.png";
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
    Icons
} from "./Style";
import { Link } from "@chakra-ui/react";

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
                            Hi! I’m <YellowText>Eduarda</YellowText>. <p/>
                            <br/>
                            I’m a Software and Web Developer.<p/>
                            I have a Bachelor Degree in Computer Engineering.<p/>
                            <br/>
                            I've always been curious about programming, and when I was a kid, 
                            I used to customize my Tumblr and blog themes by editing the HTML page. 
                            It was almost magical to see the page changing with lines of text. In high school, 
                            I decided to take a computer course.<p/>
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
                            <Link href="https://github.com/EduardaSRBastos" target={"_blank"}>
                                <Icons  as={BsGithub} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/eduardabastos/" target={"_blank"}>
                                <Icons as={BsLinkedin} />
                            </Link>
                            <Link href="mailto:eduardasofia2000@gmail.com" target={"_blank"}>
                            <Icons as={BsFillEnvelopeFill} />
                            </Link>
                        </IconContainer>
                    </TextContainer>
                </ItemsContainer>
            </Container>
        </div>
    );
}