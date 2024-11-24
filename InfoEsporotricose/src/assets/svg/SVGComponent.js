import React from "react";
import Stethoscope from "./icons/Stethoscope";
import Prevention from "./icons/Prevention";
import HowToDeal from "./icons/HowToDeal";
import Glossary from "./icons/Glossary";
import AboutUs from "./icons/AboutUs";
import { buttonSizes } from "../../styles";

const SVGComponent = (props) => {
    switch (props.name) {
        case "Sinais & sintomas":
            return <Stethoscope width={`${buttonSizes * .5}`} height={`${buttonSizes * .5}`} />;
        case "Prevenção":
            return <Prevention width={`${buttonSizes * .6}`} height={`${buttonSizes * .6}`} />;
        case "Como lidar?":
            return <HowToDeal width={`${buttonSizes * .5}`} height={`${buttonSizes * .5}`} />;
        case "Glossário":
            return <Glossary width={`${buttonSizes * .55}`} height={`${buttonSizes * .55}`} />;
        case "Sobre nós":
            return <AboutUs width={`${buttonSizes * .35}`} height={`${buttonSizes * .35}`} />
        default: break;
    }
}

export default SVGComponent;