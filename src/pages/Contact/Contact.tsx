import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from 'react-icons/bs';
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
import { FormControl, FormErrorMessage, Icon, Input, Link, Textarea } from "@chakra-ui/react";
import { useState } from 'react';

export default function Contact() {
    const [message, setMessage] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    function SendEmail() {
        if(email === "" || !(re.test(email))) {
            setIsInvalid(true);
        } else {
            window.location.href = `mailto:eduardasofia2000@gmail.com?subject=Contacting from Portfolio&body=${message} %0D%0A %0D%0AFrom ${email}`;
            window.location.reload();
        }
    }

    return (
        <div id='contact'>
            <Container>
                <TitleContainer>
                    <Line />
                    <Title>CONTACT</Title>
                </TitleContainer>
                <ItemsContainer>
                    <EmailContainer>
                        <FormControl isRequired isInvalid={isInvalid}>
                        <InputText>Email</InputText>
                        <Input type="email" w="400px" h="30px" mb="20px" bg="white" borderRadius="0"
                        onChange={(event) => setEmail(event.target.value)}/>
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                        </FormControl>
                        <InputText>Message</InputText>
                        <Textarea w="400px" h="215px" mb="20px" bg="white" borderRadius="0"
                        onChange={(event) => setMessage(event.target.value)}/>
                        <EmailButton type="submit" onClick={SendEmail}>Send Email</EmailButton>
                    </EmailContainer>
                    <TextContainer>
                        <Name>Eduarda</Name>
                        <DevText>Software and Web Developer</DevText>
                        <EmailText> <br/> Email: eduardasofia2000@gmail.com</EmailText>
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