
import '../gesture-handler.native'
import customFonts from './theme/useCustomFonts';
import Drawer from './routes/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Stack from './routes/Stack';

export default function App() {
  const fontsLoaded = customFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}