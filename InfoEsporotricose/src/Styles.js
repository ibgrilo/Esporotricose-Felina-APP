import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import colors from './theme/colors';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.surfaceWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textFromButton: {
        color: colors.textBlack,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    },

    textFromHearder: {
        color: colors.surfaceWhite,
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
})

export const drawerStyle = {
    drawerActiveTintColor: colors.textBlue,
    drawerInactiveTintColor: colors.textBlue,
    drawerActiveBackgroundColor: colors.backgroundTextBlue,
    drawerLabelStyle: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: colors.textBlue
    }
}

export const headerStyle = {
    headerStyle: { backgroundColor: colors.primary },
    headerTitleStyle: style.textFromHearder,
    headerTintColor: colors.surfaceWhite,
    headerTitleAlign: 'center',
}

export const headerLeftStyle = {
    ...headerStyle,
    ...drawerStyle,
    headerLeft: () =>
        route.name === 'Menu' ? (
            <Icon
                name="menu"
                type="feather"
                color="#FFF"
                style={{ marginLeft: 15 }}
                onPress={() => navigation.toggleDrawer()}
            />
        ) : (
            <Icon
                name="arrow-back"
                type="material"
                color="#FFF"
                style={{ marginLeft: 15 }}
                onPress={() => navigation.goBack()}
            />
        ),
}
export default style;