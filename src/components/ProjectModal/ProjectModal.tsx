import { Button, Container, Modal, ModalBody, ModalCloseButton, ModalContent, 
  ModalOverlay, ModalProps, Text, Image, Link } from "@chakra-ui/react";
  import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "./slick-theme.css";
import Slider from "react-slick";

export default function ProjectModal(
  { title, setTitle, 
    description, setDescription,
    image, setImage,
    haveWebsite, setHaveWebsite,
    haveGitRepo, setHaveGitRepo,
    technology, setTechnology,
    ...props
  } 
  : ProjectModalProps) {
    function closeModal() {
      setColor([]);
      setColumn(2);
      setHaveWebsite("");
      setHaveGitRepo("");
      props.onClose();
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    nextArrow: <IoIosArrowForward color="white"/>,
    prevArrow: <IoIosArrowBack color="white" />,
  };

  const [color, setColor] = useState<any>([]);
  var i = 0;
  const [column, setColumn] = useState<number>(2);

  function generateRandomColor(size:number) {
    for(var i = 0; i< size; i++) {
      var auxColor=(Math.floor(100000 + Math.random() * 900000));
      color.push(auxColor);
    }
  }

  useEffect(()=> {
    if(technology.length > 9) {
      setColumn(4);
    }else if(technology.length > 4) {
      setColumn(3);
    }else{
      setColumn(2);
    }
  },[column, technology.length])
  
  useEffect(()=>{ 
        generateRandomColor(technology.length);
  },[generateRandomColor(technology.length)])

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={closeModal} isCentered={true} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent bg="#34353A" maxW="169vh" maxH="87vh" m="auto">
          <ModalCloseButton fontSize="2.8vh" color="white" _hover={{ color:"#FFDA18", fontSize:"3.4vh" }}/>

          <ModalBody mt="5.65vh">
            <Container display="flex" h="49.5vh" w="117vh">
              <Container ml="-45vh" maxW="84vh" pos="absolute">
                <Slider {...settings}>
                { image.map( (e:number) => 
                  <Image  src={`../../Images/${e}`} alt={title} w="76vh" h="42.5vh" maxW="100%" objectFit="contain"/>
                  )}
                </Slider>
              </Container>
              <Container textAlign="justify" pos="absolute" ml="42.3vh" cursor="default">
              <Text color="#FFDA18" fontSize="4.5vh" mb="2.7vh" mt="-1.5vh" textAlign="center">{title}</Text>
              <Text color="white" fontSize="2.9vh" whiteSpace="pre-line">{description}</Text>
              </Container>
            </Container>
            <Container display="flex" ml="0">
              <Container display="flex" w="177vh" mb="1.5vh">
                <Container display="grid" gridTemplateColumns={`repeat(${column}, 1fr)`} m="auto" p="auto">
                { technology.map( (e:number) => 
                  <Button bg={"#" + color[++i]} _hover={{ opacity:"0.7" }} color="white" fontSize="2vh" 
                  textShadow="0 0 0.14vh #000" m="0.7vh" p="1.2vh" w="fit-content" key={e}>
                    {e}
                  </Button>
                  )}
                </Container>
                {(haveGitRepo.length>0) &&(<>
                <Link href={haveGitRepo} isExternal m="3.6vh" ml="28vh">
                  <Button whiteSpace="nowrap" fontSize="2.3vh" bg="#BDBDBD" p="3.6vh 1.4vh" _hover={{ filter: "brightness(110%)", transform: "scale(1.1)" }}>
                      View GitHub<br/>Repo</Button>
                </Link>
                </>)}
              </Container>
              <Container p="1.2vh 5.8vh" ml="63%" pos="absolute">
              {(haveWebsite.length>0) &&(<>
                <Link href={haveWebsite} isExternal>
                  <Button fontSize="2.85vh" bg="#FFDA18" p="3.6vh 2.1vh" _hover={{ filter: "brightness(110%)", transform: "scale(1.1)" }}>View Website</Button>
                </Link>
                </>)}
              </Container>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

interface ProjectModalProps extends ModalProps {
  title: string;
  setTitle: (a: string) => void;
  description: string;
  setDescription: (a: string) => void;
  image: any;
  setImage: (a: any) => void;
  haveWebsite: string;
  setHaveWebsite: (a: string) => void;
  haveGitRepo: string;
  setHaveGitRepo: (a: string) => void;
  technology: any;
  setTechnology: (a: any) => void;
}