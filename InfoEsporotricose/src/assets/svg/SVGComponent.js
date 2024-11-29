import React from "react";
import Prevention from "./icons/Prevention.svg";
import Stethoscope from "./icons/Stethoscope.svg"
import HowToDeal from "./icons/HowToDeal.svg";
import Glossary from "./icons/Glossary.svg";
import AboutUs from "./icons/AboutUs.svg";
import { buttonSizes } from "../../styles";

const SVGComponent = (props) => {
    switch (props.name) {
        case "Sinais & sintomas":
            return <Stethoscope width={buttonSizes * .52} height={buttonSizes * .52} />;
        case "Prevenção":
            return <Prevention width={`${buttonSizes * .6}`} height={`${buttonSizes * .6}`} />;
        case "Como lidar?":
            return <HowToDeal width={`${buttonSizes * .55}`} height={`${buttonSizes * .55}`} />;
        case "Glossário":
            return <Glossary width={`${buttonSizes * .55}`} height={`${buttonSizes * .55}`} />;
        case "Sobre nós":
            return <AboutUs width={`${buttonSizes * .4}`} height={`${buttonSizes * .4}`} />
        default: break;
    }
}

export default SVGComponent;