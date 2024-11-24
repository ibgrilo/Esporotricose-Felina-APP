
import '../gesture-handler.native'
import customFonts from './theme/useCustomFonts';
import Drawer from './routes/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

export default function App() {
  const fontsLoaded = customFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}