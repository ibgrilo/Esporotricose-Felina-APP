import '../gesture-handler.native'
import customFonts from './theme/useCustomFonts';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './routes/Stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadingScreen from './views/LoadingScreen';
import { useState } from 'react';

export default function App() {
  const fontsLoaded = customFonts();
  const [showLoading, setShowLoading] = useState(true);

  // Só mostrar algo quando fontes estiverem carregadas
  if (!fontsLoaded) {
    return null; // Ou tela em branco
  }

  // LoadingScreen APENAS com fontes carregadas
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