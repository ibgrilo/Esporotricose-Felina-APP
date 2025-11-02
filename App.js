import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import LoadingScreen from "./src/views/LoadingScreen";
// ...existing imports...

// Previne o splash nativo de esconder automaticamente
SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    const [fontsLoaded] = useFonts({
        "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
        // ...existing fonts...
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // Esconde o splash nativo assim que as fontes carregarem
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    useEffect(() => {
        if (fontsLoaded) {
            onLayoutRootView();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // Retorna null enquanto carrega as fontes
    }

    if (isLoading) {
        return <LoadingScreen onFinish={() => setIsLoading(false)} />;
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
            // ...existing drawer config...
            >
                {/* ...existing screens... */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}