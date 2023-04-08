import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import Navbar from "./Navbar/Navbar";
import {Outlet} from 'react-router-dom';
import ScrollButton from "./ScrollButton/ScrollButton";
import { useEffect, useState } from "react";

const Layout = () => {
    const [is404, setIs404] = useState(false);
    
    useEffect(()=> {
        if(window.location.pathname ==="/404") {
            setIs404(true);
        } else{
            setIs404(false);
        }
    })
    
    return(
        <>
        {is404 ?
        (
            <>
            <Navbar/>
            <NotFound/>
            </>
        ): (
            <>
            <ScrollButton/>
            <Navbar/>
            <Outlet/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            </>
        )}
        </>
    )
}
export default Layout;
