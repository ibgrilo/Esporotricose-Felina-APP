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
    containerMainMenuButtons: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 15,
    },

    containerAboutUsButton: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 20,
    },

    containerInsideButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    changeScreenTo: {
        backgroundColor: colors.backgroundChangeScreenButton,
        borderRadius: 30,
        width: 170,
        height: 170,
        margin: 15,

    },

    textFromButton: {
        flexWrap: 'wrap',
        textAlign: 'center',
        color: colors.textBlack,
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        maxWidth: 120,
    },

    textFromHearder: {
        color: colors.surfaceWhite,
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
})

export const drawerStyle = {
    drawerActiveTintColor: colors.surfaceWhite,
    drawerInactiveTintColor: colors.textBlue,
    drawerActiveBackgroundColor: colors.backgroundTextBlue,
    drawerLabelStyle: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: colors.textBlue,
    },
}

export const headerStyle = {
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTitleStyle: style.textFromHearder,
    headerTintColor: colors.surfaceWhite,
    headerTitleAlign: 'center',
}

export default style;