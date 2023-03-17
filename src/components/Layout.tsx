import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Navbar from "./Navbar/Navbar";
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <><Navbar />
        <Outlet/>
        <About/>
        <Skills/>
        <Projects />
        </>
    )
}
export default Layout;
