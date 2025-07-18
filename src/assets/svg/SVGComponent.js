import React from "react";
import Prevention from "./icons/Prevention.svg";
import Stethoscope from "./icons/Stethoscope.svg";
import HowToDeal from "./icons/HowToDeal.svg";
import Glossary from "./icons/Glossary.svg";
import AboutUs from "./icons/AboutUs.svg";
import SkinSign from "./icons/SkinSign.svg";
import SystemSign from "./icons/SystemSign.svg";
import Bandage from "./icons/Bandage.svg";
import Image from "./icons/Image.svg";
import Cross from "./icons/Cross.svg";
import Info from "./icons/Info.svg";
import Brain from "./icons/Brain.svg";
import Lung from "./icons/Lung.svg";
import Mushroom from "./icons/Mushroom.svg";
import Paw from "./icons/Paw.svg";
import Logo from "./icons/Logo.svg";
import BigBrain from "./icons/BigBrain.svg";
import BigLung from "./icons/BigLung.svg";
import BigMushroom from "./icons/BigMushroom.svg";
import BigPaw from "./icons/BigPaw.svg";
import LocomotorSystemSymptoms from "./icons/LocomotorSystemSymptoms.svg";
import LymphaticSystemSymptoms from "./icons/LymphaticSystemSymptoms.svg";
import NervousSystemSymptoms from "./icons/NervousSystemSymptoms.svg";
import RespiratorySystemSymptoms from "./icons/RespiratorySystemSymptoms.svg";
import DisseminacaoPorLesoes from "./icons/DisseminacaoPorLesoes.svg";
import NodulosEAbscessos from "./icons/NodulosEAbscessos.svg";
import SecrecaoPurulenta from "./icons/SecrecaoPurulenta.svg";
import UlcerasNaPele from "./icons/UlcerasNaPele.svg";
import Location from "./icons/Location.svg";
import MainLogo from "./icons/MainLogo.svg";


import { buttonSizes } from "../../styles";

const SVGComponent = (props) => {
    switch (props.name) {
        case "Sinais Clínicos":
            return <Stethoscope width={buttonSizes * .52} height={buttonSizes * .52} />;
        case "Prevenção":
            return <Prevention width={buttonSizes * .6} height={buttonSizes * .6} />;
        case "Como lidar?":
            return <HowToDeal width={buttonSizes * .55} height={buttonSizes * .55} />;
        case "Glossário":
            return <Glossary width={buttonSizes * .55} height={buttonSizes * .55} />;
        case "Veterinários":
            return <Location width={buttonSizes * .5} height={buttonSizes * .5} />;
        case "Sobre nós":
            return <AboutUs width={buttonSizes * .4} height={buttonSizes * .4} />;
        case "SkinSign":
            return <SkinSign width={buttonSizes * .22} height={buttonSizes * .22} />;
        case "SystemSign":
            return <SystemSign width={buttonSizes * .22} height={buttonSizes * .22} />;
        case "Bandage":
            return <Bandage width={buttonSizes * .15} height={buttonSizes * .15} />;
        case "Image":
            return <Image width={buttonSizes * .13} height={buttonSizes * .13} />;
        case "Cross":
            return <Cross width={buttonSizes * .13} height={buttonSizes * .13} />;
        case "Info":
            return <Info width={buttonSizes * .13} height={buttonSizes * .13} />;
        case "Brain":
            return <Brain width={buttonSizes * .15} height={buttonSizes * .15} />;
        case "Lung":
            return <Lung width={buttonSizes * .15} height={buttonSizes * .15} />;
        case "Mushroom":
            return <Mushroom width={buttonSizes * .15} height={buttonSizes * .15} />;
        case "Paw":
            return <Paw width={buttonSizes * .15} height={buttonSizes * .15} />;
        case "Logo":
            return <Logo width={buttonSizes * .15} height={buttonSizes * .15} />;
        case "BigBrain":
            return <BigBrain width={buttonSizes * .7} height={buttonSizes * .7} />;
        case "BigLung":
            return <BigLung width={buttonSizes * .7} height={buttonSizes * .7} />;
        case "BigMushroom":
            return <BigMushroom width={buttonSizes * .7} height={buttonSizes * .7} />;
        case "BigPaw":
            return <BigPaw width={buttonSizes * .7} height={buttonSizes * .7} />;
        case "LocomotorSystemSymptoms":
            return <LocomotorSystemSymptoms width={buttonSizes * 1.5} height={buttonSizes * 1.5} />;
        case "LymphaticSystemSymptoms":
            return <LymphaticSystemSymptoms width={buttonSizes * 1.5} height={buttonSizes * 1.5} />;
        case "NervousSystemSymptoms":
            return <NervousSystemSymptoms width={buttonSizes * 1.5} height={buttonSizes * 1.5} />;
        case "RespiratorySystemSymptoms":
            return <RespiratorySystemSymptoms width={buttonSizes * 1.5} height={buttonSizes * 1.5} />;
        case "DisseminacaoPorLesoes":
            return <DisseminacaoPorLesoes width={buttonSizes * 1.2} height={buttonSizes * 1.2} />;
        case "NodulosEAbscessos":
            return <NodulosEAbscessos width={buttonSizes * 1.2} height={buttonSizes * 1.2} />;
        case "SecrecaoPurulenta":
            return <SecrecaoPurulenta width={buttonSizes * 1.2} height={buttonSizes * 1.2} />;
        case "UlcerasNaPele":
            return <UlcerasNaPele width={buttonSizes * 1.2} height={buttonSizes * 1.2} />;
        case "LoadingLogo":
            return <MainLogo width={buttonSizes * .8} height={buttonSizes * .8} />;
        default:
            return null;
    }
};

export default SVGComponent;