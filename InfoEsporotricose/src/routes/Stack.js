import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainMenuScreen from "../views/MainMenuScreen";
import SingsAndSymptomsScreen from "../views/SingsAndSymptomsScreen";
import PreventionScreen from "../views/PreventionScreen";
import HowToDealScreen from "../views/HowToDealScreen";
import GlossaryScreen from "../views/GlossaryScreen";
import AboutUs from "../assets/svg/icons/AboutUs";
import colors from "../theme/colors";
import style, { headerStyle } from "../styles";
import AboutUsScreen from "../views/AboutUsScreen";

const Stack = createNativeStackNavigator()

export default props => {

    return (
        <Stack.Navigator initialRouteName="Menu" screenOptions={{
            ...headerStyle,
        }}>
            <Stack.Screen name="Menu" component={MainMenuScreen} />
            <Stack.Screen name="Sinais & sintomas" component={SingsAndSymptomsScreen} />
            <Stack.Screen name="Prevenção" component={PreventionScreen} />
            <Stack.Screen name="Como lidar?" component={HowToDealScreen} />
            <Stack.Screen name="Glossário" component={GlossaryScreen} />
            <Stack.Screen name="Sobre nós" component={AboutUsScreen} />
        </Stack.Navigator >
    )
}