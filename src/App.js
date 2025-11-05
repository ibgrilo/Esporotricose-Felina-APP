import '../gesture-handler.native'
import customFonts from './theme/useCustomFonts';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './routes/Stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadingScreen from './views/LoadingScreen';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Manter o splash screen até que estejamos prontos
SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = customFonts();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        // Aguardar fontes carregarem
        if (fontsLoaded) {
          // Esconder o splash screen nativo
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [fontsLoaded]);

  // Só mostrar algo quando fontes estiverem carregadas
  if (!fontsLoaded) {
    return null; // Splash screen nativo ainda visível
  }

  // LoadingScreen personalizada APENAS com fontes carregadas
  if (showLoading) {
    return (
      <LoadingScreen
        onFinish={() => setShowLoading(false)}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}