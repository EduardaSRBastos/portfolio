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
import { useState } from "react";
export default function Projects() {
    const projectDisclosure = useDisclosure();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<any>("");
    const [haveWebsite, setHaveWebsite] = useState<boolean>(false);
    const [haveGitRepo, setHaveGitRepo] = useState<boolean>(false);
    const [technology, setTechnology] = useState<any>([]);

    function setInfoModal(name: string){

        if(name==="Candyland") {
            setTitle("Candyland");
            setDescription("Candyland is a graphical application composed of 3D elements, with an interactive scenario." +
            "The world is made up of different static and animated 3D candy-themed objects. It is possible to change the camera, "+
            "for perspective and orthogonal, as well as turn on and off lamps and ambient lights. " +
            "It also contains a plane object that you can control.\nA group project with Rui Duarte.");
            setTechnology(["JavaScript", "Three.js", "HTML", "WebGL"]);
            projectDisclosure.onToggle();
        }
        
    }

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
                            <ProjectButton onClick={() =>setInfoModal("Candyland")}>View</ProjectButton>
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
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            image={image}
            setImage={setImage}
            haveWebsite={haveWebsite}
            setHaveWebsite={setHaveWebsite}
            haveGitRepo={haveGitRepo}
            setHaveGitRepo={setHaveGitRepo}
            technology={technology}
            setTechnology={setTechnology}
            children={undefined}
            />
        </div>
       
    );
}