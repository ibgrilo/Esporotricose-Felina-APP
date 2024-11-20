import { createDrawerNavigator } from '@react-navigation/drawer'
import MainMenuScreen from '../views/MainMenuScreen';
import colors from '../theme/colors';
import style, { headerStyle, drawerStyle } from '../Styles';
import { Icon } from '@rneui/themed';
import AboutUs from '../views/AboutUsScreen';
import { color } from '@rneui/base';
import SingsAndSymptomsScreen from '../views/SingsAndSymptomsScreen';
import PreventionScreen from '../views/PreventionScreen';
import HowToDealScreen from '../views/HowToDealScreen';
import GlossaryScreen from '../views/GlossaryScreen';

const Drawer = createDrawerNavigator();

export default props => {
    function headerRightIcon() {
        return (
            <Icon
                name='account-circle'
                type='material'
                color={colors.surfaceWhite}
                size={24}
                style={{ marginRight: 15 }}
                onPress={() => console.warn("Works!")}
            />
        )
    }
    function headerLeftIcon(route, navigation) {
        return route.name === 'Menu' ? (
            <Icon
                name="menu"
                type="feather"
                color="#FFF"
                style={{ marginLeft: 15 }}
                onPress={() => navigation.toggleDrawer()}
            />) : (
            <Icon
                name="arrow-back"
                type="material"
                color="#FFF"
                style={{ marginLeft: 15 }}
                onPress={() => navigation.goBack()}
            />);
    }
    return (
        <Drawer.Navigator
            initialRouteName="Menu"
            screenOptions={({ route, navigation }) => ({
                ...headerStyle,
                ...drawerStyle,
                headerLeft: () => headerLeftIcon(route, navigation),
                headerRight: () => headerRightIcon(),
                drawerType: 'slide',
            })}
        >
            <Drawer.Screen name="Menu" component={MainMenuScreen} />
            <Drawer.Screen name="Sinais e sintomas" component={SingsAndSymptomsScreen} />
            <Drawer.Screen name="Prevenção" component={PreventionScreen} />
            <Drawer.Screen name="Como Lidar?" component={HowToDealScreen} />
            <Drawer.Screen name="Glossário" component={GlossaryScreen} />
            <Drawer.Screen name="Sobre nós" component={AboutUs} />
        </Drawer.Navigator>
    )
}