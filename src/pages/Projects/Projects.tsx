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
    ProjectTextContainer,
    ProjectDescription
} from "./Style";
import { useState } from "react";

export default function Projects() {
    const projectDisclosure = useDisclosure();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<any>([]);
    const [haveWebsite, setHaveWebsite] = useState<string>("");
    const [haveGitRepo, setHaveGitRepo] = useState<string>("");
    const [technology, setTechnology] = useState<any>([]);

    function setInfoModal(name: string){

        if(name==="Candyland") {
            setTitle("Candyland");
            setDescription("Candyland is a graphical application composed of 3D elements, with an interactive scenario.\n" +
            "The world is made up of different static and animated 3D candy-themed objects. It is possible to change the camera, "+
            "for perspective and orthogonal, as well as turn on and off lamps and ambient lights. " +
            "It also contains a plane object that you can control.\nA group project with Rui Duarte.");
            setTechnology(["HTML", "JavaScript", "Three.js", "WebGL"]);
            setImage(["Candyland.png", "Candyland2.png", "Candyland3.png"]);
            setHaveWebsite("https://eduardasrbastos.github.io/WebGL-Project");
            setHaveGitRepo("https://github.com/EduardaSRBastos/WebGL-Project");
            projectDisclosure.onToggle();
        }
        if(name==="HMRE") {
            setTitle("HMRE (Help to Maintain Routine for the Elderly)");
            setDescription("This mockup application has the function of helping the elderly, "+
            "providing the best access to places present in the person's daily routine."+
            "\nGroup project with Duarte Garcês, Francisco Marinho, Ricardo Bessa and Rui Duarte.");
            setTechnology(["Css", "HTML", "JavaScript"]);
            setImage(["HMRE.png", "HMRE2.png", "HMRE3.png","HMRE4.png", "HMRE5.png", "HMRE6.png"]);
            setHaveWebsite("https://eduardasrbastos.github.io/AccessibilityProject/home");
            setHaveGitRepo("https://github.com/EduardaSRBastos/AccessibilityProject");
            projectDisclosure.onToggle();
        }
        if(name==="SBConceptMolds") {
            setTitle("SB Concept Molds");
            setDescription("This project allows the management of plastic injection mold design projects." +
            "\nIt consists of a database that contains data on customers, projects and parts catalogs for molds, "+ 
            "and a program that displays the current project and its related information, "+ 
            "the projects carried out and their components, the each mold constituent, "+
            "the customers and their project-related information.");
            setTechnology(["C# .NET", "SQL", "WinForms"]);
            setImage(["SBConceptMolds.png", "SBConceptMolds2.png", "SBConceptMolds3.png", "SBConceptMolds4.png"]);
            setHaveGitRepo("https://github.com/EduardaSRBastos/FinalProject-2018");
            projectDisclosure.onToggle();
        }
        if(name==="GameShop") {
            setTitle("GameShop");
            setDescription("This project is a website that showcases games developed by Nectar Interactive and "+
            "allows customers to purchase and customize the game. Has a FAQ list and a personal page.\n"+
            "The project consists of the backend, backoffice and frontoffice."+
            "\nProject made with members of the Bee Academy 2022/2023 team, Bee Engineering.");
            setTechnology(["ASP.NET Core", "C# .NET", "Docker", "JavaScript", "Layered Architecture", "Material UI", "React", "T-SQL"]);
            setImage(["GameShop.png", "GameShop2.png", "GameShop3.png","GameShop4.png", "GameShop5.png"]);
            setHaveWebsite("https://bee-gameshop.azurewebsites.net");
            projectDisclosure.onToggle();
        }
        if(name==="BeeTheBest") {
            setTitle("Bee The Best");
            setDescription("This project is a website that keeps track of the tournaments and participants in Bee"+
            " the Best events.\n"+
            "The project consists of the backend, backoffice and frontoffice."+
            "\nProject made with members of the Bee Academy 2022/2023 team, Bee Engineering.");
            setTechnology(["ASP.NET Core", "C# .NET","Chakra UI", "Docker", "Entity Framework Core", "Layered Architecture",
            "React", "Scrum", "T-SQL", "TypeScript"]);
            setImage(["BeeTheBest.png", "BeeTheBest2.png", "BeeTheBest3.png", "BeeTheBest4.png"]);
            setHaveWebsite("https://btb.bee-eng.pt");
            projectDisclosure.onToggle();
        }
        if(name==="BeeIn") {
            setTitle("BeeIn");
            setDescription("This project is a professional networking website for the workers of the company Bee Engineering.\n" +
            "The project consists of the backend, backoffice and frontoffice."+
            "\nAs it is a project under development, it still lacks pages and components, such as the backoffice (admin)."+
            "\nProject being made with members of the Bee Academy 2022/2023 team, Bee Engineering.");
            setTechnology(["ASP.NET Core", "C# .NET","Chakra UI", "Docker", "Entity Framework Core", "Layered Architecture",
            "React", "Scrum", "T-SQL", "TypeScript"]);
            setImage(["BeeIn.png", "BeeIn2.png", "BeeIn3.png","BeeIn4.png", "BeeIn5.png"]);
            //setHaveWebsite("https://eduardasrbastos.github.io/WebGL-Project/");
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
                <ItemsContainer  style={{zIndex: 1, position:"relative"}}>
                    <ProjectsContainer>
                        <ProjectContainer>
                            <ProjectImage src={Candyland} alt='Project Candyland' />
                            <ProjectTextContainer>
                            <ProjectText>Candyland</ProjectText>
                            <ProjectDescription>Three.js</ProjectDescription>
                            <ProjectButton onClick={() =>setInfoModal("Candyland")}>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>

                        <ProjectContainer>
                            <ProjectImage src={HMRE3} alt='Project HMRE' />
                            <ProjectTextContainer>
                            <ProjectText>HMRE</ProjectText>
                            <ProjectDescription>HTML</ProjectDescription>
                            <ProjectButton onClick={() =>setInfoModal("HMRE")}>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>

                        <ProjectContainer>
                            <ProjectImage src={SBConceptMolds} alt='Project SB Concept Molds' />
                            <ProjectTextContainer>
                            <ProjectText>SB Concept Molds</ProjectText>
                            <ProjectDescription>WinForms</ProjectDescription>
                            <ProjectButton onClick={() =>setInfoModal("SBConceptMolds")}>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>

                    </ProjectsContainer>
                    <ProjectsContainer>
                        <ProjectContainer>
                            <ProjectImage src={GameShop} alt='Project GameShop' />
                            <ProjectTextContainer>
                            <ProjectText>GameShop</ProjectText>
                            <ProjectDescription>React</ProjectDescription>
                            <ProjectButton onClick={() =>setInfoModal("GameShop")}>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>

                        <ProjectContainer>
                            <ProjectImage src={BeeTheBest} alt='Project Bee The Best' />
                            <ProjectTextContainer>
                            <ProjectText>Bee The Best</ProjectText>
                            <ProjectDescription>React</ProjectDescription>
                            <ProjectButton onClick={() =>setInfoModal("BeeTheBest")}>View</ProjectButton>
                            </ProjectTextContainer>
                        </ProjectContainer>
                        
                        <ProjectContainer>
                            <ProjectImage src={BeeIn} alt='Project BeeIn' />
                            <ProjectTextContainer>
                            <ProjectText>BeeIn</ProjectText>
                            <ProjectDescription>React</ProjectDescription>
                            <ProjectButton onClick={() =>setInfoModal("BeeIn")}>View</ProjectButton>
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