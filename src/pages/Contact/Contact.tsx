import { BsGithub, BsLinkedin, BsFillEnvelopeFill, BsFileEarmarkPersonFill } from 'react-icons/bs';
import {
    Container,
    TitleContainer,
    Title,
    Line,
    ItemsContainer,
    TextContainer,
    EmailContainer,
    InputText,
    EmailButton,
    Name,
    DevText,
    EmailText,
    IconContainer,
} from "./Style";
import { FormControl, FormErrorMessage, Icon, Input, Link, Textarea, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from 'react';

export default function Contact() {
    const [message, setMessage] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    function SendEmail() {
        if(email === "" || !(re.test(email))) {
            setIsInvalid(true);
        } else {
            window.location.href = `mailto:eduardasofia2000@gmail.com?subject=Contacting from Eduarda's Portfolio&body=${message} %0D%0A %0D%0AFrom ${email}`;
            setMessage("");
            setEmail("");
        }
    }

    return (
        <div id='contact'>
            <Container>
                <TitleContainer>
                    <Line />
                    <Title>CONTACT</Title>
                </TitleContainer>
                <ItemsContainer  style={{zIndex: 1, position:"absolute"}}>
                    <EmailContainer>
                        <FormControl isRequired isInvalid={isInvalid}>
                        <InputText>Email</InputText>
                        <Input type="email" w="400px" h="30px" mb="20px" bg="white" value={email} placeholder="Email" focusBorderColor="black"
                        onChange={(event) => setEmail(event.target.value)}/>
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                        </FormControl>

                        <InputText>Message</InputText>
                        <Textarea w="400px" h="215px" mb="20px" bg="white" value={message} placeholder="Message" focusBorderColor="black"
                        onChange={(event) => setMessage(event.target.value)}/>
                        <EmailButton type="submit" onClick={SendEmail}>Send Email</EmailButton>
                    </EmailContainer>
                    <TextContainer>
                        <Name>Eduarda</Name>
                        <DevText>Software and Web Developer</DevText>
                        <EmailText> <br/> Email: eduardasofia2000@gmail.com</EmailText>
                        <IconContainer>
                            <Tooltip hasArrow label="GitHub"  openDelay={150} bg="black">
                                <Link href="https://github.com/EduardaSRBastos" target={"_blank"} m="40px 30px">
                                    <Icon as={BsGithub} _hover={{color: "black", transform: "scale(1.2)"}} transition="0.4s" maxW=" 100%"/>
                                </Link>
                            </Tooltip>
                            <Tooltip hasArrow label="LinkedIn"  openDelay={150} bg="#0A66C2">
                                <Link href="https://www.linkedin.com/in/eduardabastos/" target={"_blank"} m="40px 30px">
                                    <Icon as={BsLinkedin} _hover={{color: "#0A66C2", transform: "scale(1.2)"}} transition="0.4s" maxW=" 100%"/>
                                </Link>
                            </Tooltip>
                            <Tooltip hasArrow label="Mail"  openDelay={150} bg="#c71610">
                                <Link href="mailto:eduardasofia2000@gmail.com" target={"_blank"} m="40px 30px">
                                    <Icon as={BsFillEnvelopeFill} _hover={{color: "#c71610", transform: "scale(1.2)"}} transition="0.4s" maxW=" 100%"/>
                                </Link>
                            </Tooltip>
                            <Tooltip hasArrow label="Resume"  openDelay={150} bg="#4940f8">
                                <Link href="./EduardaBastosCV.pdf" download = "EduardaResume.pdf" target={"_blank"} m="40px 30px">
                                    <Icon as={BsFileEarmarkPersonFill} _hover={{color: "#4940f8", transform: "scale(1.2)"}} transition="0.4s" maxW=" 100%"/>
                                </Link>
                            </Tooltip>
                        </IconContainer>
                    </TextContainer>
                </ItemsContainer>
            </Container>
        </div>
    );
}