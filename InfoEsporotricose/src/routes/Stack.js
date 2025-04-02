import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainMenuScreen from "../views/MainMenuScreen";
import SignsAndSymptomsScreen from "../views/SignsAndSymptomsScreen";
import SignsAndSymptomsScreen2 from "../views/SignsAndSymptomsScreen2";
import PreventionScreen from "../views/PreventionScreen";
import HowToDealScreen from "../views/HowToDealScreen";
import GlossaryScreen from "../views/GlossaryScreen";
import { headerStyle } from "../styles";
import AboutUsScreen from "../views/AboutUsScreen";
import HowToDealScreen1 from "../views/HowToDealScreen1";
import HowToDealScreen2 from "../views/HowToDealScreen2";
import SVGComponent from "../assets/svg/SVGComponent";
import { View } from "react-native";

const Stack = createNativeStackNavigator()

export default props => {

    return (
        <Stack.Navigator initialRouteName="Menu" screenOptions={{
            ...headerStyle,

        }}>
            <Stack.Screen name="Menu" component={MainMenuScreen} />
            <Stack.Screen name="Sinais & sintomas" component={SignsAndSymptomsScreen} />
            <Stack.Screen name="Lista de sinais e sintomas" component={SignsAndSymptomsScreen2} />
            <Stack.Screen name="Prevenção" component={PreventionScreen} />
            <Stack.Screen name="Como lidar?" component={HowToDealScreen} />
            <Stack.Screen name="Está com esporotricose?" component={HowToDealScreen1} />
            <Stack.Screen name="Como é transmitida?" component={HowToDealScreen2} />
            <Stack.Screen name="Glossário" component={GlossaryScreen} />
            <Stack.Screen name="Sobre nós" component={AboutUsScreen} />
        </Stack.Navigator >

    )
}