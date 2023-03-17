import { useDisclosure } from "@chakra-ui/react";
import BeeIn from "../../Project Covers/BeeIn.png";
import BeeTheBest from "../../Project Covers/BeeTheBest.png";
import Candyland from "../../Project Covers/Candyland.png";
import GameShop from "../../Project Covers/GameShop.png";
import HMRE3 from "../../Project Covers/HMRE3.png";
import SBConceptMolds from "../../Project Covers/SBConceptMolds.png";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import {
    Container,
    TitleContainer,
    Title,
    Line,
    ProjectsContainer,
    ProjectContainer,
    ItemsContainer,
    ProjectText,
    ProjectImage,
    ProjectButton,
    ProjectTextContainer
} from "./Style";
export default function Projects() {
    const projectDisclosure = useDisclosure();

    return (
        <div id='projects'>
            <Container>
                <TitleContainer>
                    <Line />
                    <Title>PROJECTS</Title>
                </TitleContainer>
                <ItemsContainer>
                    <ProjectsContainer>
                        <ProjectContainer>
                            <ProjectImage src={Candyland} alt='Project Candyland' />
                            <ProjectTextContainer>
                            <ProjectText>Candyland</ProjectText>
                            <ProjectButton onClick={ projectDisclosure.onToggle}>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>

                        <ProjectContainer>
                            <ProjectImage src={HMRE3} alt='Project HMRE' />
                            <ProjectTextContainer>
                            <ProjectText>HMRE</ProjectText>
                            <ProjectButton>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>

                        <ProjectContainer>
                            <ProjectImage src={SBConceptMolds} alt='Project SB Concept Molds' />
                            <ProjectTextContainer>
                            <ProjectText>SB Concept Molds</ProjectText>
                            <ProjectButton>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>

                    </ProjectsContainer>
                    <ProjectsContainer>
                        <ProjectContainer>
                            <ProjectImage src={GameShop} alt='Project GameShop' />
                            <ProjectTextContainer>
                            <ProjectText>GameShop</ProjectText>
                            <ProjectButton>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>

                        <ProjectContainer>
                            <ProjectImage src={BeeTheBest} alt='Project Bee The Best' />
                            <ProjectTextContainer>
                            <ProjectText>Bee The Best</ProjectText>
                            <ProjectButton>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>
                        
                        <ProjectContainer>
                            <ProjectImage src={BeeIn} alt='Project BeeIn' />
                            <ProjectTextContainer>
                            <ProjectText>BeeIn</ProjectText>
                            <ProjectButton>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>
                       
                    </ProjectsContainer>
                </ItemsContainer>
            </Container>
            <ProjectModal
            isOpen={projectDisclosure.isOpen}
            onClose={projectDisclosure.onClose}
            />
        </div>
       
    );
}