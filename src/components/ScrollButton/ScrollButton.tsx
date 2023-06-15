import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { ButtonIcon } from './Style';

export default function ScrollButton() {
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToTop = window.scrollY <= 300;
      setIsTopButtonVisible(!isScrolledToTop);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <>
      <ButtonIcon
        as={IoIosArrowUp}
        onClick={scrollToTop}
        className={`${isTopButtonVisible ? 'show' : ''}`}
      />
    </>
  );
}
