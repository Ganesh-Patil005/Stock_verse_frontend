import OpenAccount from "../OpenAccount";
import Education from "./Educationsec";
import Hero from "./Hero";
import Award from "./Award";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Home (){

    return(
        <> 
        <Hero />
        <Award />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount/>
        </>
    );
};