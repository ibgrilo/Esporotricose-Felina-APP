import React from "react";
import Stethoscope from "./icons/Stethoscope";
import Prevention from "./icons/Prevention";
import HowToDeal from "./icons/HowToDeal";
import Glossary from "./icons/Glossary";

const SVGComponent = (props) => {
    switch (props.name) {
        case "Sinais & sintomas":
            return <Stethoscope width={90} height={90} />;
        case "Prevenção":
            return <Prevention width={90} height={90} />;
        case "Como lidar?":
            return <HowToDeal width={90} height={90} />;
        case "Glossário":
            return <Glossary width={90} height={90} />;
        default:
            break;
    }
}

export default SVGComponent;