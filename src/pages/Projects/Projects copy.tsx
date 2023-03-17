import Oc from "../../Images/Oc.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
    Container,
    TitleContainer,
    Title,
    Line,
    ProjectsContainer,
    ProjectContainer,
    ItemsContainer,
    ProjectText,
    ProjectImage
} from "./Style";
export default function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      };
    return (
        <div id='projects'>
            <Container>
                <TitleContainer>
                    <Line />
                    <Title>PROJECTS</Title>
                </TitleContainer>
                <ProjectContainer>
                <ProjectsContainer>
                    <ItemsContainer>
                            <Slider {...settings}>
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            </Slider>
                    </ItemsContainer>

                    <ItemsContainer>
                            <Slider {...settings}>
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            </Slider>
                    </ItemsContainer>

                    <ItemsContainer>
                            <Slider {...settings}>
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            </Slider>
                    </ItemsContainer>
                </ProjectsContainer>

                <ProjectsContainer>
                    <ItemsContainer>
                            <Slider {...settings}>
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            </Slider>
                    </ItemsContainer>

                    <ItemsContainer>
                            <Slider {...settings}>
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            </Slider>
                    </ItemsContainer>

                    <ItemsContainer>
                            <Slider {...settings}>
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            <ProjectImage src={Oc} alt='Profile Picture' />
                            </Slider>
                    </ItemsContainer>
                </ProjectsContainer>
                </ProjectContainer>
            </Container>
        </div>
    );
}