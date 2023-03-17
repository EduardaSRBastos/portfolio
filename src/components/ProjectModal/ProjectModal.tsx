import { Button, Container, Modal, ModalBody, ModalCloseButton, ModalContent, 
  ModalFooter, ModalHeader, ModalOverlay, ModalProps, Tag, Text, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react";

import Oc from "../../Images/Oc.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      props.onClose();
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const [color, setColor] = useState<any>([]);
  var i = 0;

  function generateRandomColor() {
    for(var i = 0; i< technology.length; i++) {
      var auxColor=(Math.floor(100000 + Math.random() * 900000));
      color.push(auxColor);
    }
    }
  
  useEffect(()=>{ 
        generateRandomColor();
  },[props.isOpen])

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={closeModal} isCentered={true}>
        <ModalOverlay />
        <ModalContent bg="#34353A" maxW="1025px" maxH="550px">
          
          <ModalHeader color="#FFDA18">{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Container display="flex">
              <Container ml="-250px" maxW="70%">
                <Slider {...settings}>
                  <Image  src={Oc} alt='Profile Picture' />
                  <Image src={Oc} alt='Profile Picture' />
                </Slider>
              </Container>
              <Container textAlign="justify">
              <Text whiteSpace="pre-wrap" color="white">{description}</Text>
              </Container>
            </Container>
            <Container display="flex" mt="35px" ml="0">
              <Container ml="10px" display="flex">
                <Container>
                { technology.map( (e:number) => 
                  <Tag bg={"#" + color[i++]} color="white" fontSize="14px" 
                  textShadow="0 0 1px #000" m="5px" p="8px" key={e}>
                    { e }</Tag>
                  )}
                </Container>
                <Button whiteSpace="nowrap" fontSize="16px" bg="#BDBDBD" p="10px 45px" m="10px 50px">View GitHub<br/>Repo</Button>
              </Container>
              <Container ml="100px" p="8px 50px">
                <Button fontSize="20px" bg="#FFDA18" m="10px">View Website</Button>
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
  haveWebsite: boolean;
  setHaveWebsite: (a: boolean) => void;
  haveGitRepo: boolean;
  setHaveGitRepo: (a: boolean) => void;
  technology: any;
  setTechnology: (a: any) => void;
}