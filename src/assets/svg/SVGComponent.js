import React from "react";
import Prevention from "./icons/Prevention.svg";
import Stethoscope from "./icons/Stethoscope.svg"
import HowToDeal from "./icons/HowToDeal.svg";
import Glossary from "./icons/Glossary.svg";
import AboutUs from "./icons/AboutUs.svg";
import VisibleSign from "./icons/VisibleSign.svg"
import InvisibleSign from "./icons/InvisibleSign.svg"
import Bandage from "./icons/Bandage.svg"
import Image from "./icons/Image.svg"
import Cross from "./icons/Cross.svg"
import Info from "./icons/Info.svg"
import Brain from "./icons/Brain.svg"
import Lung from "./icons/Lung.svg"
import Mushroom from "./icons/Mushroom.svg"
import Paw from "./icons/Paw.svg"
import Logo from "./icons/Logo.svg"
import { buttonSizes } from "../../styles";

const SVGComponent = (props) => {
    switch (props.name) {
        case "Sinais & sintomas":
            return <Stethoscope width={buttonSizes * .5} height={buttonSizes * .5} />;
        case "Prevenção":
            return <Prevention width={`${buttonSizes * .6}`} height={`${buttonSizes * .6}`} />;
        case "Como lidar?":
            return <HowToDeal width={`${buttonSizes * .55}`} height={`${buttonSizes * .55}`} />;
        case "Glossário":
            return <Glossary width={`${buttonSizes * .55}`} height={`${buttonSizes * .55}`} />;
        case "Sobre nós":
            return <AboutUs width={`${buttonSizes * .4}`} height={`${buttonSizes * .4}`} />
        case "VisibleSign":
            return <VisibleSign width={`${buttonSizes * .22}`} height={`${buttonSizes * .22}`} />
        case "InvisibleSign":
            return <InvisibleSign width={`${buttonSizes * .22}`} height={`${buttonSizes * .22}`} />
        case "Bandage":
            return <Bandage width={`${buttonSizes * .15}`} height={`${buttonSizes * .15}`} />
        case "Image":
            return <Image width={`${buttonSizes * .13}`} height={`${buttonSizes * .13}`} />
        case "Cross":
            return <Cross width={`${buttonSizes * .13}`} height={`${buttonSizes * .13}`} />
        case "Info":
            return <Info width={`${buttonSizes * .13}`} height={`${buttonSizes * .13}`} />
        case "Brain":
            return <Brain width={`${buttonSizes * .15}`} height={`${buttonSizes * .15}`} />
        case "Lung":
            return <Lung width={`${buttonSizes * .15}`} height={`${buttonSizes * .15}`} />
        case "Mushroom":
            return <Mushroom width={`${buttonSizes * .15}`} height={`${buttonSizes * .15}`} />
        case "Paw":
            return <Paw width={`${buttonSizes * .15}`} height={`${buttonSizes * .15}`} />
        case "Logo":
            return <Logo width={`${buttonSizes * .15}`} height={`${buttonSizes * .15}`} />
        default: break;
    }
}

export default SVGComponent;