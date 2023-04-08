import React, {useEffect, useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';
import {
   ButtonIcon,
} from "./Style";

export default function ScrollButton() {
const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            setIsTopButtonVisible(true);
        } else {
            setIsTopButtonVisible(false);
        }
    });
}, []);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "auto",
    });
};

return (
    <>
   <ButtonIcon as={IoIosArrowUp} onClick={scrollToTop} className={`${isTopButtonVisible ? 'show': null}`}/>
    </>
);
}
