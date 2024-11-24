import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Icon } from '@rneui/themed';
import colors from './theme/colors';

export const { width, height } = Dimensions.get('window')
export const buttonSizes = width * 0.41

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
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: buttonSizes * .01,
    },

    containerAboutUsButton: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: width * .05,
    },

    containerInsideButton: {
        flex: 1,
        padding: buttonSizes * .1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    changeScreenTo: {
        backgroundColor: colors.backgroundChangeScreenButton,
        borderRadius: buttonSizes * .25,
        width: buttonSizes,
        height: buttonSizes,
        margin: buttonSizes * .1,
    },

    textFromButton: {
        flexWrap: 'wrap',
        textAlign: 'center',
        color: colors.textBlack,
        fontSize: buttonSizes * .12,
        fontFamily: 'Poppins-Bold',
        maxWidth: buttonSizes,
    },

    textFromHearder: {
        color: colors.surfaceWhite,
        fontSize: width * .05,
        fontFamily: 'Poppins-Regular',
    },
})

export const drawerStyle = {
    drawerActiveTintColor: colors.surfaceWhite,
    drawerInactiveTintColor: colors.textBlue,
    drawerActiveBackgroundColor: colors.backgroundTextBlue,
    drawerLabelStyle: {
        fontSize: width * .042,
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