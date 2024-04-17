import { Modal, ModalBody, ModalCloseButton, ModalContent, 
  ModalOverlay, ModalProps, Text, Image, Link, Icon, Flex, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { SiDeviantart, SiInstagram, SiRedbubble } from "react-icons/si";
import IbisPaint from "../../Files/ibis-paint.png";
import CatPawBackground from "../../components/Background/CatPawBackground";

export default function ArtModal(
  { title, setTitle, 
    description, setDescription,
    image, setImage,
    links, setLinks,
    ...props
  } 
  : ArtModalProps) {
    function closeModal() {
      props.onClose();
  }

  useEffect(() => {
      document.body.style.background = 'inherit';
  }, []);
  
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
 
  return (
    <>
    <CatPawBackground />
      <Modal isOpen={props.isOpen} onClose={closeModal} isCentered={true} scrollBehavior="inside">
        <ModalOverlay backdropFilter="blur(0.3vh)"/>
        {!isMobile ? (
        <ModalContent bg="#34353A30" backdropFilter={"blur(5vh)"} maxW="169vh" maxH="87vh" m="auto" boxShadow="0 8px 32px 0 #34353A01" border="1px solid #34353A90" borderRadius="5vh">
          <ModalCloseButton fontSize="2.8vh" color="white" _hover={{ color:"var(--primary-color)", fontSize:"3.4vh" }} m="1%"/>

          <ModalBody mt="5.65vh" mb="5.65vh" display="flex" justifyContent="center" alignItems="center">
            <Box display="flex" w="100%" m="auto">
              <Box w="90%" display="flex" justifyContent="center">
                  <Image src={`./Images/Art/${image}.png`} alt={title} maxW="90%" objectFit="contain"/>
              </Box>
              <Box textAlign="justify" w="100%" h="100%" display="grid" m="auto">
                <Text color="var(--primary-color)" fontSize="3.5vh" mb="2.7vh" textAlign="center">{title}</Text>
                <Text color="white" fontSize="2vh" ml="20%">
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
        ):(
          <ModalContent bg="#34353A30" backdropFilter={"blur(5vh)"} w="90%" maxH="80vh" boxShadow="0 8px 32px 0 #34353A01" border="1px solid #34353A90" borderRadius="5vh">
          <ModalCloseButton fontSize="2.8vh" color="white" _hover={{ color:"var(--primary-color)", fontSize:"3.4vh" }} m="2%"/>

          <ModalBody mt="5.65vh" display="flex" justifyContent="center" alignItems="center">
            <Box display="grid" w="100%" m="auto">
              <Box w="100%" display="flex" justifyContent="center" mt="5%">
                  <Image src={`./Images/Art/${image}.png`} alt={title} maxW="100%" objectFit="contain"/>
              </Box>
              <Box textAlign="justify" w="100%" h="100%" display="grid" m="auto">
                <Text color="var(--primary-color)" fontSize="3.5vh" mb="2.7vh" mt="5%" textAlign="center">{title}</Text>
                <Text color="white" fontSize="2vh" ml="10%">
                  {description}
                </Text>
                <Flex justify="center" align="center" mt="3%">
                  {links.map((link:string) => (
                    <Link href={link} isExternal m="2vh" key={link}>
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
        )}
      </Modal>
    </>
  )
}

interface ArtModalProps extends ModalProps {
  title: string;
  setTitle: (a: string) => void;
  description: any;
  setDescription: (a: any) => void;
  image: any;
  setImage: (a: any) => void;
  links: any;
  setLinks: (a: any) => void;
}