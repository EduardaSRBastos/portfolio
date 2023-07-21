import { useEffect, useRef, useState } from 'react';
import { Icon } from "@chakra-ui/react";
import { AiOutlineClose } from 'react-icons/ai';
import { Buttons, Button, ButtonContainer, SidePanelContainer, CloseButton } from "./Style";
import React from 'react';

export default function SidePanel({ isOpen, onClose }: SidePanelProps) {
  const sidePanelRef = useRef<HTMLDivElement>(null);
  const [isTouchOutside, setIsTouchOutside] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideSidePanel = sidePanelRef.current?.contains(target);
      setIsTouchOutside(!isInsideSidePanel);
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleTouchOutside = () => {
      if (isOpen && isTouchOutside) {
        onClose();
      }
      setIsTouchOutside(false);
    };

    window.addEventListener('touchstart', handleTouchOutside);

    return () => {
      window.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [isOpen, onClose, isTouchOutside]);

  return (
    <SidePanelContainer className={isOpen ? "open" : ""} ref={sidePanelRef}>
      <CloseButton onClick={onClose}><Icon as={AiOutlineClose} /></CloseButton>
      <Buttons>
        <ButtonContainer onClick={(e) => {
          e.preventDefault();
          window.location.href = "/#about";
        }}>
          <Button>
            ABOUT ME
          </Button>
        </ButtonContainer>

        <ButtonContainer onClick={(e) => {
          e.preventDefault();
          window.location.href = "/#skills";
        }}>
          <Button>
            SKILLS
          </Button>
        </ButtonContainer>

        <ButtonContainer onClick={(e) => {
          e.preventDefault();
          window.location.href = "/#projects";
        }}>
          <Button>
            PROJECTS
          </Button>
        </ButtonContainer>

        <ButtonContainer onClick={(e) => {
          e.preventDefault();
          window.location.href = "/#contact";
        }}>
          <Button>
            CONTACT
          </Button>
        </ButtonContainer>
      </Buttons>
    </SidePanelContainer>
  );
}

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}
