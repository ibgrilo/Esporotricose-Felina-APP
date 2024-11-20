import '../gesture-handler.native'
import { StatusBar } from 'expo-status-bar';
import customFonts from './theme/useCustomFonts';
import style from './Styles';
import { Text, View } from 'react-native';
import colors from './theme/colors';
import Drawer from './routes/Drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  <customFonts />;

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}