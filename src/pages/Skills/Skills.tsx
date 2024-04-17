import { SiCsharp, SiMicrosoftsqlserver, SiVisualstudiocode, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiFigma, SiAngular, SiMulesoft, SiPython  } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { FaJava } from "react-icons/fa";

import {
    Container,
    TitleContainer,
    Title,
    Line,
    IconsContainer,
    IconContainer,
    ItemsContainer,
    Icons,
    IconText
} from "./Style";
import { Tooltip } from '@chakra-ui/react';

export default function Skills() {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <div id='skills'>
            <Container>
                <TitleContainer>
                    <Line />
                    <Title>SKILLS</Title>
                </TitleContainer>
                <ItemsContainer  style={{zIndex: 1, position:"absolute"}}>
                {!isMobile ? (<>
                    <IconsContainer>
                        <Tooltip hasArrow label="Level 3" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiCsharp}/>
                            <IconText>C# .NET</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 3" openDelay={300}>
                        <IconContainer>
                            <Icons as={FaJava}/>
                            <IconText>Java</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 2" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiPython}/>
                            <IconText>Python</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 3" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiMicrosoftsqlserver}/>
                            <IconText>SQL Server</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 4" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiVisualstudiocode}/>
                            <IconText>Visual Studio<br/>VS Code</IconText>
                        </IconContainer>
                        </Tooltip>
                    </IconsContainer>
                    <IconsContainer>
                        <Tooltip hasArrow label="Level 4" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiFigma}/>
                            <IconText>Figma</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 4" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiHtml5}/>
                            <IconText>HTML</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 4" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiCss3}/>
                            <IconText>CSS</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 3" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiJavascript}/>
                            <IconText>JavaScript</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 3" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiTypescript}/>
                            <IconText>Typescript</IconText>
                        </IconContainer>
                        </Tooltip>
                    </IconsContainer>

                    <IconsContainer>

                        <Tooltip hasArrow label="Level 3" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiReact}/>
                            <IconText>React</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 2" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiAngular}/>
                            <IconText>Angular</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 3" openDelay={300}>
                        <IconContainer>
                            <Icons as={SiMulesoft}/>
                            <IconText>Mulesoft</IconText>
                        </IconContainer>
                        </Tooltip>

                        <Tooltip hasArrow label="Level 3" openDelay={300}>
                        <IconContainer>
                            <Icons as={BsGithub}/>
                            <IconText>GitHub</IconText>
                        </IconContainer>
                        </Tooltip>
                    </IconsContainer>
                    </>): (<>
                        <IconsContainer>
                            <Tooltip hasArrow label="Level 3" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiCsharp}/>
                                <IconText>C# .NET</IconText>
                            </IconContainer>
                            </Tooltip>

                            <Tooltip hasArrow label="Level 3" openDelay={300}>
                            <IconContainer>
                                <Icons as={FaJava}/>
                                <IconText>Java</IconText>
                            </IconContainer>
                            </Tooltip>
                        </IconsContainer>
                        <IconsContainer>
                            <Tooltip hasArrow label="Level 2" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiPython}/>
                                <IconText>Python</IconText>
                            </IconContainer>
                            </Tooltip>
                            <Tooltip hasArrow label="Level 3" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiMicrosoftsqlserver}/>
                                <IconText>SQL Server</IconText>
                            </IconContainer>
                            </Tooltip>
                        </IconsContainer>
                        <IconsContainer>
                            <Tooltip hasArrow label="Level 4" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiVisualstudiocode}/>
                                <IconText>Visual Studio<br/>VS Code</IconText>
                            </IconContainer>
                            </Tooltip>

                            <Tooltip hasArrow label="Level 3" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiMulesoft}/>
                                <IconText>Mulesoft</IconText>
                            </IconContainer>
                            </Tooltip>
                        </IconsContainer>
                        <IconsContainer>
                            <Tooltip hasArrow label="Level 3" openDelay={300}>
                            <IconContainer>
                                <Icons as={BsGithub}/>
                                <IconText>GitHub</IconText>
                            </IconContainer>
                            </Tooltip>
                            <Tooltip hasArrow label="Level 4" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiFigma}/>
                                <IconText>Figma</IconText>
                            </IconContainer>
                            </Tooltip>
                        </IconsContainer>
                        <IconsContainer>
                            <Tooltip hasArrow label="Level 4" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiHtml5}/>
                                <IconText>HTML</IconText>
                            </IconContainer>
                            </Tooltip>

                            <Tooltip hasArrow label="Level 4" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiCss3}/>
                                <IconText>CSS</IconText>
                            </IconContainer>
                            </Tooltip>
                        </IconsContainer>
                        <IconsContainer>
                            <Tooltip hasArrow label="Level 3" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiJavascript}/>
                                <IconText>JavaScript</IconText>
                            </IconContainer>
                            </Tooltip>

                            <Tooltip hasArrow label="Level 3" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiTypescript}/>
                                <IconText>Typescript</IconText>
                            </IconContainer>
                            </Tooltip>
                        </IconsContainer>
                        <IconsContainer>
                            <Tooltip hasArrow label="Level 3" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiReact}/>
                                <IconText>React</IconText>
                            </IconContainer>
                            </Tooltip>

                            <Tooltip hasArrow label="Level 3" openDelay={300}>
                            <IconContainer>
                                <Icons as={SiAngular}/>
                                <IconText>Angular</IconText>
                            </IconContainer>
                            </Tooltip>
                        </IconsContainer>
                    </>)}
                </ItemsContainer>
            </Container>
        </div>
    );
}