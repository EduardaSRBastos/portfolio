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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        <ModalContent bg="#34353A" maxW="1200px" maxH="600px" m="auto">
          <ModalCloseButton fontSize="20px" color="white" _hover={{ color:"#FFDA18", fontSize:"24px" }}/>

          <ModalBody mt="40px">
            <Container display="flex" h="350px" w="800px">
              <Container ml="-320px" maxW="600px" pos="absolute">
                <Slider {...settings}>
                { image.map( (e:number) => 
                  <Image  src={`Images/${e}`} alt={title} w="530" h="300" objectFit="contain"/>
                  )}
                </Slider>
              </Container>
              <Container textAlign="justify" pos="absolute" ml="300px" cursor="default">
              <Text color="#FFDA18" fontSize="32px" mb="20px" mt="-10px" textAlign="center">{title}</Text>
              <Text color="white" fontSize="20px" whiteSpace="pre-line">{description}</Text>
              </Container>
            </Container>
            <Container display="flex" ml="0">
              <Container display="flex" w="1200px" mb="10px">
                <Container display="grid" gridTemplateColumns={`repeat(${column}, 1fr)`} m="auto" p="auto">
                { technology.map( (e:number) => 
                  <Button bg={"#" + color[++i]} _hover={{ opacity:"0.7" }} color="white" fontSize="14px" 
                  textShadow="0 0 1px #000" m="5px" p="8px" w="fit-content" key={e}>
                    {e}
                  </Button>
                  )}
                </Container>
                {(haveGitRepo.length>0) &&(<>
                <Link href={haveGitRepo} isExternal m="25px" ml="200px">
                  <Button whiteSpace="nowrap" fontSize="16px" bg="#BDBDBD" p="25px 10px" _hover={{ bg: "#dedede" }}>
                      View GitHub<br/>Repo</Button>
                </Link>
                </>)}
              </Container>
              <Container p="8px 40px" ml="63%" pos="absolute">
              {(haveWebsite.length>0) &&(<>
                <Link href={haveWebsite} isExternal>
                  <Button fontSize="20px" bg="#FFDA18" p="25px 15px" _hover={{ bg: "#c7a302" }}>View Website</Button>
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