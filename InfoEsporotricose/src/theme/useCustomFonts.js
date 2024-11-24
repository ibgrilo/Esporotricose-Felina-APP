import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";

export default function customFonts() {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync(); // Esconde a splash screen quando as fontes são carregadas
        } else {
            SplashScreen.preventAutoHideAsync(); // Previne que a splash screen feche antes
        }
    }, [fontsLoaded]);

    return fontsLoaded;
}