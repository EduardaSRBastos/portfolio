import {
    Container,
    TitleContainer,
    Title,
    Line,
    PicturesContainer,
    PictureContainer,
    Picture,
    PictureButtonContainer,
    PictureButton,
    ItemsContainer,
} from "./Style";

import Navbar from "../../components/Navbar/Navbar";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import PhotoModal from "../../components/PhotoModal/PhotoModal";

export default function Photo() {

    const photoDisclosure = useDisclosure();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<any>();
    const [image, setImage] = useState<string>("");
    const [links, setLinks] = useState<any>([]);
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    function setInfoModal(name: string){

        if (name === "Blue Car") {
            setTitle(name);
            setDescription(
              <div>
                Circuito Internacional Vila Real<br/>02/07/2022<br/><br/>Vila Real<br/>SONY DSC-HX300<br/>f/4 1/2000sec ISO-160
              </div>
            );
            setImage("DSC07635");
            photoDisclosure.onToggle();
          } 
          else if (name === "White Plane") {
            setTitle(name);
            setDescription(
              <div>
                Circuito Internacional Vila Real<br/>02/07/2022<br/><br/>Vila Real<br/>SONY DSC-HX300<br/>f/3.5 1/1600sec ISO-160
              </div>
            );
            setImage("DSC07648");
            photoDisclosure.onToggle();
          }
          else if (name === "Light Blue Car") {
            setTitle(name);
            setDescription(
              <div>
                Circuito Internacional Vila Real<br/>02/07/2022<br/><br/>Vila Real<br/>SONY DSC-HX300<br/>f/4 1/1600sec ISO-160
              </div>
            );
            setImage("DSC07735");
            photoDisclosure.onToggle();
          }
    }

    const images = [
      { src: "./Images/Photo/DSC07635.JPG", alt: "Blue Car Photo", name: "Blue Car" },
      { src: "./Images/Photo/DSC07648.JPG", alt: "White Plane Photo", name: "White Plane" },
      { src: "./Images/Photo/DSC07735.JPG", alt: "Light Blue Car Photo", name: "Light Blue Car" },
    ];

    const imagesPerRow = 4;

    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
      const row = images.slice(i, i + imagesPerRow);
      rows.push(row);
    }
    
    return (
      <div id='photo'>
        <Navbar />
        <ScrollButton />
        <Container>       
        <TitleContainer>
            <Line />
            <Title>PHOTO</Title>
          </TitleContainer>
        {!isMobile ? (<>
          <ItemsContainer style={{ zIndex: 1 }}>
            {rows.map((row) => (<>
                {row.map((img: { src: any; alt: any; name: string; }) => (
                  <PicturesContainer key={img.src}>
                    <PictureContainer>
                      <Picture src={img.src} alt={img.alt} />
                      <PictureButtonContainer>
                        <PictureButton onClick={() => setInfoModal(img.name)}>View</PictureButton>
                      </PictureButtonContainer>
                    </PictureContainer>
                  </PicturesContainer>
                ))}</>
            ))}
          </ItemsContainer>
          </>):(<>
          <ItemsContainer style={{ zIndex: 1}}>
            <PicturesContainer>
              {images.map((img: { src: any; alt: any; name: string; }) => (
                <PictureContainer key={img.src}>
                  <Picture src={img.src} alt={img.alt} />
                  <PictureButtonContainer>
                    <PictureButton onClick={() => setInfoModal(img.name)}>View</PictureButton>
                  </PictureButtonContainer>
                </PictureContainer>
                ))}
              </PicturesContainer>
          </ItemsContainer>
          </>)}
        </Container>
        <PhotoModal
          isOpen={photoDisclosure.isOpen}
          onClose={photoDisclosure.onClose}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          image={image}
          setImage={setImage}
          links={links}
          setLinks={setLinks}
          children={undefined}
        />
      </div>
    );
  }