import {useEffect, useState} from 'react';
import { SiDeviantart, SiInstagram, SiLinktree, SiRedbubble } from 'react-icons/si';
import {
   Icons, Links, SocialBarContainer,
} from "./Style";
import React from 'react';

export default function SocialSideBar() {

return (
    <>
    <SocialBarContainer>
        <Links href={"https://linktr.ee/itsdudi"} isExternal data-name="Linktree"color="#40da5b">
            <Icons
                as={SiLinktree}
            />
        </Links>

        <Links href={"https://www.instagram.com/itsdudibee/"} isExternal data-name="Instagram" color="#c72f9a">
            <Icons
                as={SiInstagram}
            />

        </Links> <Links href={"https://www.deviantart.com/itsdudi"} isExternal data-name="Deviantart" color="#04cc47">
            <Icons
                as={SiDeviantart}
            />
        </Links>

        <Links href={"https://www.redbubble.com/people/ItsDudi/"} isExternal data-name="Redbubble" color="#de1420">
            <Icons
                as={SiRedbubble}
            />
        </Links>
    </SocialBarContainer>
    </>
);
}
