import { Icon, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LogoE from "../../Files/LogoE.png";
import SidePanel from "../SidePanel/SidePanel";
import { BiMenuAltRight } from 'react-icons/bi';

import {
    NavbarContainer,
    LogoContainer,
    Logo,
    Buttons,
    Button,
    ButtonContainer,
} from "./Style";
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    var [aux, setAux] = useState<number>(0);
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLayoutPage, setIsLayoutPage] = useState(true);

    useEffect(() => {
        if (window.location.hash.includes('/art')) {
          setColorchange(false);
          setIsLayoutPage(false);
          window.scrollTo({
            top: 0,
            behavior: 'auto',
          });
        }
      }, []);
    
      const changeNavbarColor = () => {
        if (window.innerWidth >= 768) {
          const viewportHeight = window.innerHeight;
          const scrollPositions = [
            0.8 * viewportHeight,
            1.8 * viewportHeight,
            2.7 * viewportHeight,
            3.7 * viewportHeight,
            4.4 * viewportHeight,
          ];
      
          const currentScrollY = window.scrollY;
      
          for (let i = 0; i < scrollPositions.length; i++) {
            if (currentScrollY >= scrollPositions[i] && currentScrollY <= scrollPositions[i + 1]) {
              setColorchange(true);
              setAux(i + 1);
              return;
            }
          }
      
          setColorchange(false);
        }
      };       
  
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <NavbarContainer>
      {!isLayoutPage ? (
        <LogoContainer>
          <Link smooth to="/">
            <Logo src={LogoE} alt='Logo' />
          </Link>
        </LogoContainer>
      ) : (
        <Link smooth to="#">
          <LogoContainer>
            <Logo src={LogoE} alt='Logo' />
          </LogoContainer>
        </Link>
      )}
  
      {isLayoutPage && !isMobile && (
        <Buttons>
          <ButtonContainer>
            <Link smooth to="#about">
              <Button className={colorChange && aux === 1 ? 'navbar colorChange' : 'navbar'}>
                ABOUT ME
              </Button>
            </Link>
          </ButtonContainer>
          <ButtonContainer>
            <Link smooth to="#skills">
              <Button className={colorChange && aux === 2 ? 'navbar colorChange' : 'navbar'}>
                SKILLS
              </Button>
            </Link>
          </ButtonContainer>
          <ButtonContainer>
            <Link smooth to="#projects">
              <Button className={colorChange && aux === 3 ? 'navbar colorChange' : 'navbar'}>
                PROJECTS
              </Button>
            </Link>
          </ButtonContainer>
          <ButtonContainer>
            <Link smooth to="#contact">
              <Button className={colorChange && aux === 4 ? 'navbar colorChange' : 'navbar'}>
                CONTACT
              </Button>
            </Link>
          </ButtonContainer>
        </Buttons>
      )}
  
      {isMobile && (
        <Buttons>
          <ButtonContainer>
            <Button onClick={onOpen}>
              <Icon as={BiMenuAltRight} boxSize="10" position="absolute" right="0" top="0" bottom="0" m="auto" />
            </Button>
          </ButtonContainer>
          <SidePanel isOpen={isOpen} onClose={onClose} />
        </Buttons>
      )}
    </NavbarContainer>
  );
}  