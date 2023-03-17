import { SiCsharp, SiMicrosoftsqlserver, SiVisualstudiocode, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiFigma } from 'react-icons/si';
import { TfiLayoutTabWindow } from 'react-icons/tfi';
import { BsGithub } from 'react-icons/bs';

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

export default function Skills() {
    return (
        <div id='skills'>
            <Container>
                <TitleContainer>
                    <Line />
                    <Title>SKILLS</Title>
                </TitleContainer>
                <ItemsContainer>
                    <IconsContainer>
                        <IconContainer>
                            <Icons as={SiCsharp}/>
                            <IconText>C# .NET</IconText>
                        </IconContainer>

                        <IconContainer>
                            <Icons as={SiMicrosoftsqlserver}/>
                            <IconText>SQL Server</IconText>
                        </IconContainer>

                        <IconContainer>
                            <Icons as={SiVisualstudiocode}/>
                            <IconText>Visual Studio<p/>VS Code</IconText>
                        </IconContainer>

                        <IconContainer>
                            <Icons as={TfiLayoutTabWindow}/>
                            <IconText>WPF<p/>WinForms</IconText>
                        </IconContainer>
                        
                        <IconContainer>
                            <Icons as={BsGithub}/>
                            <IconText>GitHub</IconText>
                        </IconContainer>
                    </IconsContainer>
                    <IconsContainer>
                        <IconContainer>
                            <Icons as={SiHtml5}/>
                            <IconText>HTML</IconText>
                        </IconContainer>

                        <IconContainer>
                            <Icons as={SiCss3}/>
                            <IconText>CSS</IconText>
                        </IconContainer>

                        <IconContainer>
                            <Icons as={SiJavascript}/>
                            <IconText>JavaScript</IconText>
                        </IconContainer>

                        <IconContainer>
                            <Icons as={SiTypescript}/>
                            <IconText>Typescript</IconText>
                        </IconContainer>

                        <IconContainer>
                            <Icons as={SiReact}/>
                            <IconText>React</IconText>
                        </IconContainer>
                        
                        <IconContainer>
                            <Icons as={SiFigma}/>
                            <IconText>Figma</IconText>
                        </IconContainer>
                    </IconsContainer>
                </ItemsContainer>
            </Container>
        </div>
    );
}