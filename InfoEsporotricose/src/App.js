import '../gesture-handler.native'
import customFonts from './theme/useCustomFonts';
import Drawer from './routes/Drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const fonstLoaded = customFonts();

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}