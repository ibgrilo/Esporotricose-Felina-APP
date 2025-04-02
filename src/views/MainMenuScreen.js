import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import style from "../styles";
import colors from "../theme/colors";
import ChangeScreenTo from "../components/changeScreenTo";
import SVGComponent from "../assets/svg/SVGComponent";
import ToAboutUsScreen from "../components/ToAboutUsScreen";
import FixedLogo from "../components/FixedLogo";

export default props => {
    return (
        <>
            <View style={style.containerMainMenuButtons}>
                <StatusBar translucent={false} backgroundColor={colors.primary} />
                <ChangeScreenTo name="Sinais & sintomas" props={props} />
                <ChangeScreenTo name="Prevenção" props={props} />
                <ChangeScreenTo name="Como lidar?" props={props} />
                <ChangeScreenTo name="Glossário" props={props} />
            </View>
            <View style={style.containerAboutUsButton}>
                <ToAboutUsScreen props={props} />
            </View>
        </>
    )
}