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
    MenuButtonContainer,
    MenuButton
} from "./Style";

import Navbar from "../../components/Navbar/Navbar";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ArtModal from "../../components/ArtModal/ArtModal";
import SocialSideBar from "../../components/SocialSideBar/SocialSideBar";
import CatPawBackground from "../../components/Background/CatPawBackground";

export default function Art() {

    const artDisclosure = useDisclosure();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<any>();
    const [image, setImage] = useState<string>("");
    const [links, setLinks] = useState<any>([]);
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    function setInfoModal(name: string){

        if (name === "Apple") {
            setTitle("Apple Stamp");
            const anchor = (
                <a
                  href="https://www.instagram.com/ellolovey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(event) => {
                    const target = event.target as HTMLElement;
                    target.style.color = 'var(--primary-color)';
                  }}
                  onMouseOut={(event) => {
                    const target = event.target as HTMLElement;
                    target.style.color = 'white';
                  }}
                >
                  @ellolovey
                </a>
              );
            setDescription(
              <div>
                Doodle a Day from {anchor}.<br/>24/09/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/310317723/", "https://www.deviantart.com/itsdudi/art/Apple-Doodle-930986964",
                    "https://www.instagram.com/p/Ci5ctQNN5fG/", "https://www.redbubble.com/shop/ap/126301642"]);
            artDisclosure.onToggle();
          } 
          else if (name === "Armadillo") {
            setTitle("Armadillo Stamp");
            setDescription(
              <div>
                Armadillo - Day 15 of Inktober 2022.<br/>15/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/282143677/", "https://www.deviantart.com/itsdudi/art/Armadillo-933406013",
                    "https://www.instagram.com/p/CjvbaBFt9Dh/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Bat") {
            setTitle("Bat Sticker");
            setDescription(
              <div>
                Bat - Day 3 of Inktober 2022.<br/>03/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/636312158/", "https://www.deviantart.com/itsdudi/art/Peachy-the-Bat-931736424",
                    "https://www.instagram.com/p/CjQhFr0NRv3/", "https://www.redbubble.com/shop/ap/137985141"]);
            artDisclosure.onToggle();
          }
          else if (name === "Blue Lion") {
            setTitle("Colorful Lion");
            const anchor = (
                <a
                  href="https://www.instagram.com/natsurae_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(event) => {
                    const target = event.target as HTMLElement;
                    target.style.color = 'var(--primary-color)';
                  }}
                  onMouseOut={(event) => {
                    const target = event.target as HTMLElement;
                    target.style.color = 'white';
                  }}
                >
                  @natsurae_
                </a>
              );
            setDescription(
              <div>
                Fantasy OC Challenge from {anchor}.<br/>07/02/2023<br/><br/>Ibis Paint X <br/>Samsung SM-G991B (S21)
              </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/381395245/", "https://www.deviantart.com/itsdudi/art/Blue-Lion-948816350",
                    "https://www.instagram.com/p/CoXm7GkosDt/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Heist") {
            setTitle("Raccoon Sticker");
            setDescription(
              <div>
                Heist - Day 22 of Inktober 2022.<br/>22/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/305362783/", "https://www.deviantart.com/itsdudi/art/Heist-Sticker-934501587",
                    "https://www.instagram.com/p/CkBfJ3It_st/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Kind") {
            setTitle("Cat and Bunny Friends");
            setDescription(
              <div>
                Kind - Day 13 of Inktober 2022.<br/>13/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/555435625/", "https://www.deviantart.com/itsdudi/art/Kind-933060092",
                    "https://www.instagram.com/p/CjqSKDStBd_/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Leaves") {
            setTitle("Leaves Phone Wallpaper");
            const anchor = (
                <a
                  href="https://www.instagram.com/ellolovey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(event) => {
                    const target = event.target as HTMLElement;
                    target.style.color = 'var(--primary-color)';
                  }}
                  onMouseOut={(event) => {
                    const target = event.target as HTMLElement;
                    target.style.color = 'white';
                  }}
                >
                  @ellolovey
                </a>
              );
            setDescription(
              <div>
                Doodle a Day from {anchor}.<br/>30/09/2023<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/168787365/", "https://www.deviantart.com/itsdudi/art/Leaves-Phone-Wallpaper-931494542",
                    "https://www.instagram.com/p/CjIrhbftHtk/", "https://www.redbubble.com/shop/ap/126377688"]);
            artDisclosure.onToggle();
          }
          else if (name === "LittleMisfortune") {
            setTitle("Misfortune and Benjamin");
            setDescription(
              <div>
                Fanart of Little Misfortune<br/>26/08/2021<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/842441642/", "https://www.deviantart.com/itsdudi/art/LittleMisfortune-889954418",
                    "https://www.instagram.com/p/CindHXyNHPh/", "https://www.redbubble.com/shop/ap/126469132"]);
            artDisclosure.onToggle();
          }
          else if (name === "Snack") {
            setTitle("Halloween Snacks Sticker");
            setDescription(
                <div>
                  Snack - Day 27 of Inktober 2022.<br/>27/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/197576551/", "https://www.deviantart.com/itsdudi/art/Snack-Sticker-935856552",
                      "https://www.instagram.com/p/CkObwyfNKvs/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Snail") {
            setTitle("Snail");
            const anchor = (
                <a
                  href="https://www.instagram.com/ellolovey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={(event) => {
                    const target = event.target as HTMLElement;
                    target.style.color = 'var(--primary-color)';
                  }}
                  onMouseOut={(event) => {
                    const target = event.target as HTMLElement;
                    target.style.color = 'white';
                  }}
                >
                  @ellolovey
                </a>
              );
            setDescription(
              <div>
                Doodle a Day from {anchor}.<br/>23/09/2023<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/387660244/", "https://www.deviantart.com/itsdudi/art/Snail-930745678",
                      "https://www.instagram.com/p/Ci21w8LtMUQ/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Twilight Sky") {
            setTitle("Twilight Sky Wallpaper");
            setDescription(
                <div>
                  Wallpaper of a Forest and Twilight Sky.<br/>23/04/2021<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/694341429/", "https://www.deviantart.com/itsdudi/art/Twilight-Sky-876983794",
                      "https://www.instagram.com/p/CiAH9NDDOh-/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Tiger") {
            setTitle("Saber-Toothed Tiger");
            setDescription(
                <div>
                  Saber-Toothed Tiger Face<br/>28/07/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/574700491/", "https://www.deviantart.com/itsdudi/art/Tiger-Doodle-924013117",
                      "https://www.instagram.com/p/CiVX1biNW8l/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Bluff") {
            setTitle("Pumpkin Bluffing Sticker");
            setDescription(
                <div>
                  Bluff - Day 20 of Inktober 2022.<br/>20/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/874250545/", "https://www.deviantart.com/itsdudi/art/Bluff-934499215",
                      "https://www.instagram.com/p/Cj8N7ACNFvE/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Bouquet") {
            setTitle("Halloween Roses Bouquet Sticker");
            setDescription(
                <div>
                  Bouquet - Day 06 of Inktober 2022.<br/>06/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/595500539/", "https://www.deviantart.com/itsdudi/art/Rose-Bouquet-Sticker-932167304",
                      "https://www.instagram.com/p/CjYZ4nftzS1/", "https://www.redbubble.com/shop/ap/138114454"]);
            artDisclosure.onToggle();
          }
          else if (name === "Bulbasaur Sticker") {
            setTitle("Bulbasaur Sticker");
            setDescription(
                <div>
                  Bulbasaur from Pokémon<br/>18/08/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/751162656/", "https://www.deviantart.com/itsdudi/art/Bulbasaur-Stickers-Bundle-926385594",
                      "https://www.instagram.com/p/Ci-kw9DtnCP/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Candles") {
            setTitle("Candles on Table");
            const anchor = (
              <a
                href="https://www.instagram.com/ellolovey/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'var(--primary-color)';
                }}
                onMouseOut={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'white';
                }}
              >
                @ellolovey
              </a>
            );
            setDescription(
            <div>
              Doodle a Day from {anchor}.<br/>20/09/2023<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
            </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/439940902/", "https://www.deviantart.com/itsdudi/art/Rose-Bouquet-Sticker-932167304",
                    "https://www.instagram.com/p/CivLbGyN2Hb/", "https://www.redbubble.com/shop/ap/138114454"]);
            artDisclosure.onToggle();
          }
          else if (name === "Magpies") {
            setTitle("Magpies on Trunk");
            setDescription(
                <div>
                  Magpies on Trunk<br/>09/04/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/347440484/", "https://www.deviantart.com/itsdudi/art/Magpies-924010803",
                      "https://www.instagram.com/p/CiNo8GSDH0J/", "https://www.redbubble.com/shop/ap/126555950"]);
            artDisclosure.onToggle();
          }
          else if (name === "Marinette") {
            setTitle("Marinette");
            setDescription(
                <div>
                  Marinette From Miraculous Ladybug<br/>24/04/2021<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/831421785/", "https://www.deviantart.com/itsdudi/art/Marinette-Dupain-Cheng-877426439",
                      "https://www.instagram.com/p/CiDhqygDKGT/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Match") {
            setTitle("Match Lamp");
            setDescription(
                <div>
                  Match - Day 08 of Inktober 2022.<br/>08/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/685325760/", "https://www.deviantart.com/itsdudi/art/Match-932413873",
                      "https://www.instagram.com/p/CjdiOQwNWo3/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Muffin") {
            setTitle("Cat and Bunny Muffins Phone Wallpaper");
            const anchor = (
              <a
                href="https://www.instagram.com/ellolovey/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'var(--primary-color)';
                }}
                onMouseOut={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'white';
                }}
              >
                @ellolovey
              </a>
            );
            setDescription(
            <div>
              Doodle a Day from {anchor}.<br/>14/09/2023<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
            </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/636895012/", "https://www.deviantart.com/itsdudi/art/Muffins-Phone-Wallpaper-Pack-929493577",
                    "https://www.instagram.com/p/CiftsHpthRk/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Soup") {
            setTitle("Soup On A Cat Mug Stamp");
            const anchor = (
              <a
                href="https://www.instagram.com/ellolovey/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'var(--primary-color)';
                }}
                onMouseOut={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'white';
                }}
              >
                @ellolovey
              </a>
            );
            setDescription(
            <div>
              Doodle a Day from {anchor}.<br/>19/09/2023<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
            </div>
            );
            setImage(name);
            setLinks(["https://ibispaint.com/art/392457661/", "https://www.deviantart.com/itsdudi/art/Soup-Doodle-930204250",
                    "https://www.instagram.com/p/CisnaobtUZR/"]);
            artDisclosure.onToggle();
          }
          else if (name === "StevenLionBackground") {
            setTitle("Lion Landscape Wallpaper");
            setDescription(
                <div>
                  Lion Landscape From Steven Universe<br/>12/09/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/732531767/", "https://www.deviantart.com/itsdudi/art/Steven-Landscape-929256906",
                      "https://www.instagram.com/p/CikzoAwNLLa/"]);
            artDisclosure.onToggle();
          }
          else if (name === "StarNight") {
            setTitle("Star Night Wallpaper");
            setDescription(
                <div>
                Star Night Wallpaper<br/>18/09/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/746260413/", "https://www.deviantart.com/itsdudi/art/Star-Night-930087166",
                      "https://www.instagram.com/p/CiqFrY7NlkQ/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Scurry Cat") {
            setTitle("Running Cat");
            setDescription(
                <div>
                  Scurry Cat - Day 02 of Inktober 2022.<br/>02/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/558734840/", "https://www.deviantart.com/itsdudi/art/Scurry-Cat-931736050",
                      "https://www.instagram.com/p/CjOBalKtoPR/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Crabby") {
            setTitle("Grumpy Cat Sticker");
            setDescription(
                <div>
                  Crabby - Day 10 of Inktober 2022.<br/>10/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/717648225/", "https://www.deviantart.com/itsdudi/art/Crabby-932776658",
                      "https://www.instagram.com/p/CjifGubNqYh/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Eagle") {
            setTitle("Eagle Over Forest Phone Wallpaper");
            setDescription(
                <div>
                  Eagle - Day 11 of Inktober 2022.<br/>11/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/257053915/", "https://www.deviantart.com/itsdudi/art/Eagle-932776914",
                      "https://www.instagram.com/p/CjlSIQpNynL/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Farm") {
            setTitle("Skeleton Farmer Sticker");
            setDescription(
                <div>
                  Farm - Day 31 of Inktober 2022.<br/>31/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/716747618/", "https://www.deviantart.com/itsdudi/art/Farm-935858432",
                      "https://www.instagram.com/p/CkYtCj_NSc5/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Flame - Calcifer") {
            setTitle("Calcifer (Howl's Moving Castle) Sticker");
            setDescription(
                <div>
                  Flame - Day 5 of Inktober 2022.<br/>05/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/855073005/", "https://www.deviantart.com/itsdudi/art/Flame-Calcifer-Sticker-932167035",
                      "https://www.instagram.com/p/CjVpnyZtUoU/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Nest") {
            setTitle("Raven Throwing Out Eggs From Nest");
            setDescription(
                <div>
                  Nest - Day 9 of Inktober 2022.<br/>09/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/376958594/", "https://www.deviantart.com/itsdudi/art/Raven-Throwing-Out-Eggs-from-a-Nest-932414089",
                      "https://www.instagram.com/p/Cjf-rDRN4LJ/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Night Sky") {
            setTitle("Night Sky");
            setDescription(
                <div>
                  Night Sky Through Window.<br/>29/04/2021<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/155989734/", "https://www.deviantart.com/itsdudi/art/Night-Sky-Through-the-Window-877930164",
                      "https://www.instagram.com/p/CiGLGyzjREa/", "https://www.redbubble.com/shop/ap/126733892"]);
            artDisclosure.onToggle();
          }
          else if (name === "Oc 3D") {
            setTitle("OC");
            setDescription(
                <div>
                  Original Character.<br/>25/02/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/601957876/", "https://www.deviantart.com/itsdudi/art/Oc-908116996",
                      "https://www.instagram.com/p/CiS0RH-tWDQ/", "https://www.redbubble.com/shop/ap/126746065"]);
            artDisclosure.onToggle();
          }
          else if (name === "Pancake") {
            setTitle("Pancake");
            setDescription(
                <div>
                  Banana Pancakes.<br/>08/04/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/932116067/", "https://www.deviantart.com/itsdudi/art/Pancakes-Doodle-924013278",
                      "https://www.instagram.com/p/CiQHHJWDYOZ/", "https://www.redbubble.com/shop/ap/127310881"]);
            artDisclosure.onToggle();
          }
          else if (name === "Tempting") {
            setTitle("Hands Holding Apple From Twilight");
            setDescription(
                <div>
                  Tempting - Day 25 of Inktober 2022.<br/>25/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/729145599/", "https://www.deviantart.com/itsdudi/art/Tempting-Twilight-Book-Cover-934504428",
                      "https://www.instagram.com/p/CkJK9rZNDjQ/"]);
            artDisclosure.onToggle();
          }
          else if (name === "TreeBannerSunset") {
            setTitle("Tree at Sunset");
            setDescription(
                <div>
                  Flower Tree At Sunset Banner Wallpaper.<br/>08/02/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/805480450/", "https://www.deviantart.com/itsdudi/art/Tree-Banner-906407023",
                      "https://www.instagram.com/p/CiLPB9-jXD4/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Scrape") {
            setTitle("Cat Scratching Wall");
            setDescription(
                <div>
                  Scrape - Day 18 of Inktober 2022.<br/>18/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/669832489/", "https://www.deviantart.com/itsdudi/art/Scrape-934498756",
                      "https://www.instagram.com/p/Cj3HeYrtWzc/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Metanimal Band") {
            setTitle("Metanimal Band");
            setDescription(
                <div>
                  Animal Rock Band With Capybara, Cat And Bee.<br/>10/08/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/788890290/", "https://www.deviantart.com/itsdudi/art/Metanimal-Band-925496806",
                      "https://www.instagram.com/p/CiadfRnNjiA/", "https://www.redbubble.com/shop/ap/126613736"]);
            artDisclosure.onToggle();
          }
          else if (name === "Forget") {
            setTitle("Blue Witch");
            setDescription(
                <div>
                  Forget - Day 12 of Inktober 2022.<br/>12/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/708863449/", "https://www.deviantart.com/itsdudi/art/Forget-932777294",
                      "https://www.instagram.com/p/CjnmutQNZyJ/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Fowl") {
            setTitle("Chicken Over Pumpkin Sticker");
            setDescription(
                <div>
                  Fowl - Day 16 of Inktober 2022.<br/>16/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/799382018/", "https://www.deviantart.com/itsdudi/art/Fowl-Sticker-933406302",
                      "https://www.instagram.com/p/Cjx7JMntN7d/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Fox") {
            setTitle("Fox Phone Wallpaper");
            const anchor = (
              <a
                href="https://www.instagram.com/ellolovey/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'var(--primary-color)';
                }}
                onMouseOut={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'white';
                }}
              >
                @ellolovey
              </a>
            );
            setDescription(
              <div>
                Doodle a Day from {anchor}.<br/>27/09/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
              setImage(name);
              setLinks(["https://ibispaint.com/art/273305532/", "https://www.deviantart.com/itsdudi/art/Fox-Wallpaper-931225542",
                      "https://www.instagram.com/p/CjBFJdpNflB/", "https://www.redbubble.com/shop/ap/126376676"]);
            artDisclosure.onToggle();
          }
          else if (name === "Fungi") {
            setTitle("Mushrooms");
            const anchor = (
              <a
                href="https://www.instagram.com/ellolovey/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'var(--primary-color)';
                }}
                onMouseOut={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'white';
                }}
              >
                @ellolovey
              </a>
            );
            setDescription(
              <div>
                Doodle a Day from {anchor}.<br/>15/09/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
              setImage(name);
              setLinks(["https://ibispaint.com/art/581706870/", "https://www.deviantart.com/itsdudi/art/Mushroom-Icon-Pack-929609663",
                      "https://www.instagram.com/p/CiieWqgtijH/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Pizza") {
            setTitle("Pizza");
            setDescription(
                <div>
                  Pizza On Wheels<br/>10/04/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/715991278/", "https://www.deviantart.com/itsdudi/art/Pizza-on-Wheels-924012569",
                      "https://www.instagram.com/p/CiYG-1LNzbk/", "https://www.redbubble.com/shop/ap/127650476"]);
            artDisclosure.onToggle();
          }
          else if (name === "Ponytail") {
            setTitle("Yato From Noragami");
            setDescription(
                <div>
                  Ponytail - Day 19 of Inktober 2022.<br/>19/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/581688919/", "https://www.deviantart.com/itsdudi/art/Yato-Noragami-934499023",
                      "https://www.instagram.com/p/Cj5zZg9t7H_/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Salty") {
            setTitle("Cubes of Pink Salt");
            setDescription(
                <div>
                  Salty - Day 17 of Inktober 2022.<br/>17/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/273315995/", "https://www.deviantart.com/itsdudi/art/Salty-933406656",
                      "https://www.instagram.com/p/Cj0iBwmthTR/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Scallop") {
            setTitle("Scallop On Black Sand Sticker");
            setDescription(
                <div>
                  Scallop - Day 4 of Inktober 2022.<br/>04/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/973560413/", "https://www.deviantart.com/itsdudi/art/Scallop-931860489",
                      "https://www.instagram.com/p/CjTGneSNb-E/", "https://www.redbubble.com/shop/ap/137987276"]);
            artDisclosure.onToggle();
          }
          else if (name === "Trip") {
            setTitle("Yellow Van Passing Through A Pumpkin Patch Sticker");
            setDescription(
                <div>
                  Trip - Day 7 of Inktober 2022.<br/>07/10/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/886267066/", "https://www.deviantart.com/itsdudi/art/Trip-Sticker-932167873",
                      "https://www.instagram.com/p/Cja4T8ptVAQ/", "https://www.redbubble.com/shop/ap/138115382"]);
            artDisclosure.onToggle();
          }
          else if (name === "Cat404") {
            setTitle("Cat for 404 Page");
            setDescription(
                <div>
                  Cat With A Electrical Plug Sticker.<br/>30/04/2023<br/><br/>Ibis Paint X <br/>Samsung SM-G991B (S21)
                </div>
              );
              setImage(name);
              setLinks(["https://www.instagram.com/p/Cqu-1UqorxR/"]);
            artDisclosure.onToggle();
          }
          else if (name === "Charmander Sticker") {
            setTitle("Charmander Sticker");
            setDescription(
                <div>
                  Charmander from Pokémon Sticker.<br/>17/09/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
                </div>
              );
              setImage(name);
              setLinks(["https://ibispaint.com/art/439741442/", "https://www.deviantart.com/itsdudi/art/Charmander-Sticker-Bundle-929916032"]);
            artDisclosure.onToggle();
          }
          else if (name === "Campfire") {
            setTitle("Campfire");
            const anchor = (
              <a
                href="https://www.instagram.com/ellolovey/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseOver={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'var(--primary-color)';
                }}
                onMouseOut={(event) => {
                  const target = event.target as HTMLElement;
                  target.style.color = 'white';
                }}
              >
                @ellolovey
              </a>
            );
            setDescription(
              <div>
                Doodle a Day from {anchor}.<br/>28/09/2022<br/><br/>Ibis Paint X <br/>Samsung SM-A405FN (A40)
              </div>
            );
              setImage(name);
              setLinks(["https://ibispaint.com/art/500792546/", "https://www.deviantart.com/itsdudi/art/Campfire-931355976",
                      "https://www.instagram.com/p/CjDpI_qNlTz/", "https://www.redbubble.com/shop/ap/126305659"]);
            artDisclosure.onToggle();
          }
    }

    const images = [
      { src: "./Images/Art/Apple.png", alt: "Apple Stamp Digital Art", name: "Apple" },
      { src: "./Images/Art/Armadillo.png", alt: "Armadillo Stamp Digital Art", name: "Armadillo" },
      { src: "./Images/Art/Bat.png", alt: "Bat Sticker Digital Art", name: "Bat" },
      { src: "./Images/Art/Blue Lion.png", alt: "Colorful Lion Digital Art", name: "Blue Lion" },
      { src: "./Images/Art/Heist.png", alt: "Raccoon With a Banana Sticker Digital Art", name: "Heist" },
      { src: "./Images/Art/Kind.png", alt: "Cat and Bunny Friends Digital Art", name: "Kind" },
      { src: "./Images/Art/Leaves.png", alt: "Leaves Phone Wallpaper Digital Art", name: "Leaves" },
      { src: "./Images/Art/LittleMisfortune.png", alt: "Little Misfortune Wallpaper Digital Art", name: "LittleMisfortune" },
      { src: "./Images/Art/Snack.png", alt: "Halloween Snacks Sticker Digital Art", name: "Snack" },
      { src: "./Images/Art/Snail.png", alt: "Cute Snail Digital Art", name: "Snail" },
      { src: "./Images/Art/Twilight Sky.png", alt: "Twilight Sky And Forest Wallpaper Digital Art", name: "Twilight Sky" },
      { src: "./Images/Art/Tiger.png", alt: "Saber-Toothed Tiger Digital Art", name: "Tiger" },
      { src: "./Images/Art/Bluff.png", alt: "Pumpkin Bluffing Sticker Digital Art", name: "Bluff" }, 
      { src: "./Images/Art/Bouquet.png", alt: "Bouquet of Dark Red Roses Sticker Digital Art", name: "Bouquet" }, 
      { src: "./Images/Art/Bulbasaur Sticker.png", alt: "Bulbasaur Sticker Digital Art", name: "Bulbasaur Sticker" }, 
      { src: "./Images/Art/Candles.png", alt: "Candles on Table Digital Art", name: "Candles" }, 
      { src: "./Images/Art/Magpies.png", alt: "Magpies on Trunk Wallpaper Digital Art", name: "Magpies" }, 
      { src: "./Images/Art/Marinette.png", alt: "Marinette From Miraculous Ladybug Digital Art", name: "Marinette" }, 
      { src: "./Images/Art/Match.png", alt: "Match Lamp Digital Art", name: "Match" }, 
      { src: "./Images/Art/Muffin.png", alt: "Cat and Bunny Muffins Phone Wallpaper Digital Art", name: "Muffin" }, 
      { src: "./Images/Art/Soup.png", alt: "Soup On A Cat Mug Stamp Digital Art", name: "Soup" }, 
      { src: "./Images/Art/StevenLionBackground.png", alt: "Lion Landscape From Steven Universe Wallpaper Digital Art", name: "StevenLionBackground" }, 
      { src: "./Images/Art/StarNight.png", alt: "Star Night Wallpaper Digital Art", name: "StarNight" }, 
      { src: "./Images/Art/Scurry Cat.png", alt: "Running Cat Digital Art", name: "Scurry Cat" },
      { src: "./Images/Art/Crabby.png", alt: "Grumpy Cat Sticker Digital Art", name: "Crabby" },
      { src: "./Images/Art/Eagle.png", alt: "Eagle Over Forest Phone Wallpaper Digital Art", name: "Eagle" },
      { src: "./Images/Art/Farm.png", alt: "Skeleton Farmer Sticker Digital Art", name: "Farm" },
      { src: "./Images/Art/Flame - Calcifer.png", alt: "Calcifer Sticker Digital Art", name: "Flame - Calcifer" },
      { src: "./Images/Art/Nest.png", alt: "Raven Throwing Out Eggs From Nest Digital Art", name: "Nest" },
      { src: "./Images/Art/Night Sky.png", alt: "Night Sky Through Window Digital Art", name: "Night Sky" },
      { src: "./Images/Art/Oc 3D.png", alt: "Original Character Digital Art", name: "Oc 3D" },
      { src: "./Images/Art/Pancake.png", alt: "Banana Pancakes Digital Art", name: "Pancake" },
      { src: "./Images/Art/Tempting.png", alt: "Hands Holding Apple From Twilight Digital Art", name: "Tempting" },
      { src: "./Images/Art/TreeBannerSunset.png", alt: "Flower Tree At Sunset Wallpaper Digital Art", name: "TreeBannerSunset" },
      { src: "./Images/Art/Scrape.png", alt: "Cat Scratching Wall Digital Art", name: "Scrape" },
      { src: "./Images/Art/Metanimal Band.png", alt: "Animal Rock Band With Capybara, Cat And Bee Digital Art", name: "Metanimal Band" },
      { src: "./Images/Art/Forget.png", alt: "Blue Witch Digital Art", name: "Forget" },
      { src: "./Images/Art/Fowl.png", alt: "Chicken Over Pumpkin Sticker Digital Art", name: "Fowl" },
      { src: "./Images/Art/Fox.png", alt: "Fox Phone Wallpaper Digital Art", name: "Fox" },
      { src: "./Images/Art/Fungi.png", alt: "Mushrooms Digital Art", name: "Fungi" },
      { src: "./Images/Art/Pizza.png", alt: "Pizza On Wheels Digital Art", name: "Pizza" },
      { src: "./Images/Art/Ponytail.png", alt: "Yato Digital Art", name: "Ponytail" },
      { src: "./Images/Art/Salty.png", alt: "Cubes of Pink Salt Digital Art", name: "Salty" },
      { src: "./Images/Art/Scallop.png", alt: "Scallop On Black Sand Sticker Digital Art", name: "Scallop" },
      { src: "./Images/Art/Trip.png", alt: "Yellow Van Passing Through A Pumpkin Patch Sticker Digital Art", name: "Trip" },
      { src: "./Images/Art/Cat404.png", alt: "Cat With A Electrical Plug Sticker Digital Art", name: "Cat404" },
      { src: "./Images/Art/Charmander Sticker.png", alt: "Charmander Sticker Digital Art", name: "Charmander Sticker" },
      { src: "./Images/Art/Campfire.png", alt: "Campfire Digital Art", name: "Campfire" }
    ];

    const [showAll, setShowAll] = useState(true);
    const [showStickers, setShowStickers] = useState(false);
    const [showWallpapers, setShowWallpapers] = useState(false);

    const toggleShowAll = () => {
      setShowWallpapers(false);
      setShowStickers(false);
      setShowAll(true);
    };

    const toggleShowWallpapers = () => {
      setShowWallpapers(true);
      setShowStickers(false);
      setShowAll(false);
    };
    
    const toggleShowStickers = () => {
      setShowWallpapers(false);
      setShowStickers(true);
      setShowAll(false);
    };
    
    const filteredWallpaperImages = showWallpapers ? images.filter(img => img.alt.includes('Wallpaper')) : images;
    const filteredStickerImages = showStickers ? images.filter(img => img.alt.includes('Sticker')) : images;
    
    const rows = showWallpapers ? filteredWallpaperImages.reduce((acc: any[], img, i) => {
      const rowIndex = Math.floor(i / 3);
      acc[rowIndex] = [...(acc[rowIndex] || []), img];
      return acc;
    }, []) : showStickers ? filteredStickerImages.reduce((acc: any[], img, i) => {
      const rowIndex = Math.floor(i / 4);
      acc[rowIndex] = [...(acc[rowIndex] || []), img];
      return acc;
    }, []) : showAll ? images.reduce((acc: any[], img, i) => {
      const rowIndex = Math.floor(i / 12);
      acc[rowIndex] = [...(acc[rowIndex] || []), img];
      return acc;
    }, []) : [];
    ;

    const isMobileRows = isMobile ? [rows.flat()] : rows;
    
    return (
      <div id='art'>
        <CatPawBackground />
        <Navbar />
        <SocialSideBar />
        <ScrollButton />
        <Container>       
        <TitleContainer>
            <Line />
            <Title>ART</Title>
            <MenuButtonContainer>
              <MenuButton
                onClick={toggleShowAll}
                style={{ backgroundColor: showAll ? "var(--primary-color)" : "white" }}
              >
                All
              </MenuButton>
              <MenuButton
                onClick={toggleShowWallpapers}
                style={{ backgroundColor: showWallpapers ? "var(--primary-color)" : "white" }}
              >
                Wallpaper
              </MenuButton>
              <MenuButton
                onClick={toggleShowStickers}
                style={{ backgroundColor: showStickers ? "var(--primary-color)" : "white" }}
              >
                Sticker
              </MenuButton>
            </MenuButtonContainer>
          </TitleContainer>
        {!isMobile ? (<>
          <ItemsContainer style={{ zIndex: 1}}>
            {rows.map((row, i) => (
              <PicturesContainer key={i}>
                {row.map((img: { src: any; alt: any; name: string; }) => (
                  <PictureContainer key={img.src}>
                    <Picture src={img.src} alt={img.alt} />
                    <PictureButtonContainer>
                      <PictureButton onClick={() => setInfoModal(img.name)}>View</PictureButton>
                    </PictureButtonContainer>
                  </PictureContainer>
                ))}
              </PicturesContainer>
            ))}
          </ItemsContainer>
          </>):(<>
          <ItemsContainer style={{ zIndex: 1}}>
            {isMobileRows.map((row, i) => (
              <PicturesContainer key={i}>
                {row.map((img: { src: any; alt: any; name: string; }) => (
                  <PictureContainer key={img.src}>
                    <Picture src={img.src} alt={img.alt} />
                    <PictureButtonContainer>
                      <PictureButton onClick={() => setInfoModal(img.name)}>View</PictureButton>
                    </PictureButtonContainer>
                  </PictureContainer>
                ))}
              </PicturesContainer>
            ))}
          </ItemsContainer>
          </>)}
        </Container>
        <ArtModal
          isOpen={artDisclosure.isOpen}
          onClose={artDisclosure.onClose}
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