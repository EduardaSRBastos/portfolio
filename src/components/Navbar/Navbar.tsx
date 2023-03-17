import { useState } from "react";
import logo from "../../Images/LogoE.png";
import {
    NavbarContainer,
    LogoContainer,
    Logo,
    Buttons,
    Button,
    ButtonContainer,
} from "./Style";

export default function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    var [aux, setAux] = useState<number>(0);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 380 && window.scrollY <= 1040){
         setColorchange(true);
         setAux(1);
       }
       else if(window.scrollY >= 1040 && window.scrollY <= 1700){
        setColorchange(true);
        setAux(2);
      }
      else if(window.scrollY >= 1700 && window.scrollY <= 2360){
        setColorchange(true);
        setAux(3);
      }
       else{
         setColorchange(false);
       }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return (
        <NavbarContainer>
            <LogoContainer onClick={(e) => {
                    e.preventDefault();
                    window.location.href='#';
                    }}>  
                    <Logo src={logo} alt='Logo'/>
            </LogoContainer>
            <Buttons>
                <ButtonContainer onClick={(e) => {
                    e.preventDefault();
                    window.location.href='#about';
                    }}>  
                    <Button className={(colorChange && aux === 1) ? 'navbar colorChange' : 'navbar'}>
                        ABOUT ME
                    </Button>
                </ButtonContainer>

                <ButtonContainer onClick={(e) => {
                    e.preventDefault();
                    window.location.href='#skills';
                    }}>
                    <Button className={(colorChange && aux === 2) ? 'navbar colorChange' : 'navbar'}>
                        SKILLS
                    </Button>
                </ButtonContainer>

                <ButtonContainer onClick={(e) => {
                    e.preventDefault();
                    window.location.href='#projects';
                    }}>
                    <Button className={(colorChange && aux === 3) ? 'navbar colorChange' : 'navbar'}>
                        PROJECTS
                    </Button>
                </ButtonContainer>

                <ButtonContainer onClick={(e) => {
                    e.preventDefault();
                    window.location.href='#contact';
                    }}>  
                    <Button>
                        CONTACT
                    </Button>
                </ButtonContainer>
            </Buttons>
        </NavbarContainer>
    )
  }