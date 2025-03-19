import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Icon } from '@rneui/themed';
import colors from './theme/colors';
import { color } from '@rneui/base';

export const { width, height } = Dimensions.get('window')
export const buttonSizes = width * 0.41

const style = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollContainer: {
    padding: buttonSizes * 0.07,
  },

  containerMainMenuButtons: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: buttonSizes * .01,
  },

  containerSignAndSymptomsMenu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  textButtonWhite: {
    color: colors.surfaceWhite,
    fontSize: buttonSizes * .1,
    lineHeight: buttonSizes * .12,
    fontFamily: "Poppins-Regular",
    textAlign: 'center',
  },

  howToDealButton: {
    margin: buttonSizes * 0.05,
    padding: buttonSizes * 0.07,
    backgroundColor: colors.primary,
    borderRadius: buttonSizes * .05
  },

  titleFromHowToDeal: {
    fontSize: buttonSizes * 0.1,
    fontFamily: 'Poppins-Bold',
    color: colors.textBlack,
    marginTop: 15,
    marginBottom: 5,
  },

  titleFromPrevention: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: colors.textBlack,
    marginTop: 15,
    marginBottom: 5,
  },

  text: {
    fontSize: buttonSizes * 0.1,
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
    textAlign: "justify",
  },

  textAtention: {
    fontSize: buttonSizes * 0.1,
    lineHeight: 22,
    fontFamily: 'Poppins-Bold',
    color: colors.attention,

    textAlign: 'center'
  },

  italicTitle: {
    fontFamily: "Poppins-Italic",
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * .1),
  },

  italic: {
    fontFamily: "Poppins-Italic",
  },

  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
    textAlign: "justify",
  },

  section: {
    margin: buttonSizes * 0.03,
    marginBottom: buttonSizes * 0.05,
  },

  textFromButton: {
    flexWrap: 'wrap',
    textAlign: 'center',
    color: colors.textBlack,
    fontSize: Math.round(buttonSizes * .12),
    fontFamily: 'Poppins-Bold',
    maxWidth: buttonSizes,
  },

  textFromHeader: {
    color: colors.surfaceWhite,
    fontSize: Math.round(width * .05),
    fontFamily: 'Poppins-SemiBold',
  },

  //Signs and Symptoms Button

  SignsAndSymptomsButton: {
    width: buttonSizes * 1.7,
    height: 'auto',
    flexDirection: 'row',
    borderRadius: buttonSizes * 0.5,
    margin: buttonSizes * 0.04,
    padding: buttonSizes * 0.04
  },

  SignsAndSymptomsButtonContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  SignsAndSymptomsButtontitles: {
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * .20),
    fontFamily: "Poppins-Medium",
    paddingRight: buttonSizes * 0.04
  },

  // Accordion

  accordionContainer: {
    marginVertical: buttonSizes * .03,
    marginHorizontal: buttonSizes * .07,
    borderRadius: buttonSizes * .1,
    overflow: "hidden",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: buttonSizes * .10,
    paddingHorizontal: buttonSizes * .10,
  },
  activeHeader: {
    backgroundColor: colors.secondary,
  },
  title: {
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * .1),
    fontFamily: "Poppins-Medium",
  },
  titleMiddle: {
    fontSize: buttonSizes * 0.1,
    fontFamily: 'Poppins-Bold',
    color: colors.textBlack,
    marginBottom: 5,
    textAlign: 'center',
  },
  accordionContent: {
    backgroundColor: colors.secondary,
    padding: buttonSizes * .08,
    marginTop: -(buttonSizes * .13),
  },
  contentText: {
    color: colors.surfaceWhite,
    fontSize: buttonSizes * .090,
    lineHeight: buttonSizes * .12,
    fontFamily: "Poppins-Regular",
  },

  //Overlay

  overlayContainer: {
    width: "85%",
    borderRadius: buttonSizes * 0.09,
    padding: 0,
    backgroundColor: "#FFFFFF",

  },

  overlayContent: {
    alignItems: "center",
    padding: buttonSizes * 0.1,
  },

  overlayHeader: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingVertical: buttonSizes * 0.09,
    borderRadius: buttonSizes * 0.09,
    alignItems: "center",
  },

  overlayHeaderText: {
    fontSize: buttonSizes * 0.1,
    color: colors.surfaceWhite,
    fontFamily: "Poppins-Medium",
  },

  overlayText: {
    fontSize: buttonSizes * 0.11,
    textAlign: "center",
    color: colors.textBlack,
    marginTop: buttonSizes * 0.09,
    paddingHorizontal: buttonSizes * 0.09,
    fontFamily: "Poppins-Regular",
  },

  overlayCloseButton: {
    marginTop: buttonSizes * 0.09,
    paddingVertical: 8,
    paddingHorizontal: buttonSizes * 0.18,
    borderRadius: buttonSizes * 0.09,
    backgroundColor: colors.primary,
  },

  overlayCloseButtonText: {
    color: "#FFFFFF",
    fontSize: buttonSizes * 0.1,
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
})

export const headerStyle = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleStyle: style.textFromHeader,
  headerTintColor: colors.surfaceWhite,
  headerTitleAlign: 'center',
}

export default style;
// export const drawerStyle = {
//     drawerActiveTintColor: colors.surfaceWhite,
//     drawerInactiveTintColor: colors.textBlue,
//     drawerActiveBackgroundColor: colors.backgroundTextBlue,
//     drawerLabelStyle: {
//         fontSize: width * .042,
//         fontFamily: 'Poppins-Medium',
//         color: colors.textBlue,
//     },
// }