import { Modal, ModalBody, ModalCloseButton, ModalContent, 
  ModalOverlay, ModalProps, Text, Image, Link, Icon, Flex, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { SiDeviantart, SiInstagram, SiRedbubble } from "react-icons/si";

import IbisPaint from "../../Files/ibis-paint.png";

export default function ProjectModal(
  { title, setTitle, 
    description, setDescription,
    image, setImage,
    links, setLinks,
    ...props
  } 
  : ProjectModalProps) {
    function closeModal() {
      props.onClose();
  }

  useEffect(() => {
      document.body.style.background = 'inherit';
  }, []);
 
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={closeModal} isCentered={true} scrollBehavior="inside">
        <ModalOverlay backdropFilter="blur(0.5vh)"/>
        <ModalContent bg="#34353A" maxW="160vh" maxH="90vh" minW="140vh" minH="70vh" m="auto">
          <ModalCloseButton fontSize="2.8vh" color="white" _hover={{ color:"#FFDA18", fontSize:"3.4vh" }}/>

          <ModalBody mt="5.65vh" mb="5.65vh" display="flex" justifyContent="center" alignItems="center">
            <Box display="flex" w="100%">
              <Box w="100%">
                  <Image src={`./Images/Art/${image}.png`} alt={title} maxW="100%" objectFit="contain"/>
              </Box>
              <Box textAlign="justify" w="100%" h="100%" display="grid" m="auto">
                <Text color="#FFDA18" fontSize="4.5vh" mb="2.7vh" mt="-1.5vh" textAlign="center">{title}</Text>
                <Text color="white" fontSize="2.9vh" ml="20%">
                  {description}
                </Text>
                <Flex justify="center" align="center" mt="5%">
                  {links.map((link:string) => (
                    <Link href={link} isExternal m="3.6vh" key={link}>
                      {link.includes("ibispaint") ? (
                        <Icon
                        as={Image}
                        src={IbisPaint}
                        w="40px"
                        h="40px"
                        css={{
                          filter: "invert(32%) sepia(98%) saturate(3757%) hue-rotate(189deg) brightness(114%) contrast(114%)",
                          transition: "0.4s",
                          ":hover": {
                            filter: "invert(32%) sepia(98%) saturate(3757%) hue-rotate(189deg) brightness(140%) contrast(114%)",
                            transform: "scale(1.2)",
                          },
                        }}
                        maxW="100%"
                      />
                      ) : link.includes("deviantart") ? (
                        <Icon
                          as={SiDeviantart}
                          boxSize="8"
                          color="#04cc47"
                          _hover={{ filter: "brightness(140%)", transform: "scale(1.2)" }}
                          transition="0.4s"
                          maxW="100%"
                        />
                      ) : link.includes("instagram") ? (
                        <Icon
                          as={SiInstagram}
                          boxSize="8"
                          color="#c72f9a"
                          _hover={{ filter: "brightness(140%)", transform: "scale(1.2)" }}
                          transition="0.4s"
                          maxW="100%"
                        />
                      ) : link.includes("redbubble") ? (
                        <Icon
                          as={SiRedbubble}
                          boxSize="8"
                          color="#de1420"
                          _hover={{ filter: "brightness(140%)", transform: "scale(1.2)" }}
                          transition="0.4s"
                          maxW="100%"
                        />
                      ) : ( []
                      )}
                    </Link>
                  ))}
                </Flex>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

interface ProjectModalProps extends ModalProps {
  title: string;
  setTitle: (a: string) => void;
  description: any;
  setDescription: (a: any) => void;
  image: any;
  setImage: (a: any) => void;
  links: any;
  setLinks: (a: any) => void;
}