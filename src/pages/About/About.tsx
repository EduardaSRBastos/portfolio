import { BsGithub, BsLinkedin, BsFillEnvelopeFill, BsFileEarmarkPersonFill } from 'react-icons/bs';
import {
    Container,
    TitleContainer,
    Title,
    Line,
    PictureContainer,
    Picture,
    ItemsContainer,
    TextContainer,
    AboutText,
    YellowText,
    LinksText,
    IconContainer,
} from "./Style";
import { Link, Icon, Tooltip } from "@chakra-ui/react";
import Oc from "../../Files/Oc.png";

export default function About() {

    return (
        <div id='about' >
            <Container >
                <TitleContainer>
                    <Line />
                    <Title>ABOUT ME</Title>
                </TitleContainer>
                <ItemsContainer style={{zIndex: 1, position:"absolute"}}>
                    <PictureContainer>
                    <Picture src={Oc} alt='Profile Picture' />
                    </PictureContainer>
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
                            In my free time, I enjoy making <LinksText smooth to="/art">art</LinksText> and <LinksText 
                            smooth to="/photo">photography</LinksText>.
                        </AboutText>
                        <IconContainer>
                            <Tooltip hasArrow label="GitHub"  openDelay={150} bg="black">
                                <Link href="https://github.com/EduardaSRBastos" target={"_blank"} m="40px 30px">
                                    <Icon as={BsGithub} _hover={{color: "black", transform: "scale(1.2)"}} transition="0.4s" maxW=" 160%"/>
                                </Link>
                            </Tooltip>
                            <Tooltip hasArrow label="LinkedIn"  openDelay={150} bg="#0A66C2">
                                <Link href="https://www.linkedin.com/in/eduardabastos/" target={"_blank"} m="40px 30px">
                                    <Icon as={BsLinkedin} _hover={{color: "#0A66C2", transform: "scale(1.2)"}} transition="0.4s" maxW=" 160%"/>
                                </Link>
                            </Tooltip>
                            <Tooltip hasArrow label="Mail"  openDelay={150} bg="#c71610">
                                <Link href="mailto:eduardasofia2000@gmail.com" target={"_blank"} m="40px 30px">
                                    <Icon as={BsFillEnvelopeFill} _hover={{color: "#c71610", transform: "scale(1.2)"}} transition="0.4s" maxW=" 160%"/>
                                </Link>
                            </Tooltip>
                            <Tooltip hasArrow label="Resume"  openDelay={150} bg="#4940f8">
                                <Link href="./EduardaBastosCV.pdf" download = "EduardaResume.pdf" target={"_blank"} m="40px 30px">
                                    <Icon as={BsFileEarmarkPersonFill} _hover={{color: "#4940f8", transform: "scale(1.2)"}} transition="0.4s" maxW=" 160%"/>
                                </Link>
                            </Tooltip>
                        </IconContainer>
                    </TextContainer>
                </ItemsContainer>
            </Container>
        </div>
    );
}