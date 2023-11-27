import { useState } from "react";
import Dark from "./Dark";
import './Section.scss'

const Section = () => {

    const[darkmode,setDarkmode] = useState(false);
    console.log(darkmode);

    return ( 
        <section
        className={darkmode ? "dunkel" : "light"}>

        <div onClick={() => setDarkmode((darkmode) => !darkmode)}>
        <Dark/>
        </div>

        </section>
    );
}

export default Section;