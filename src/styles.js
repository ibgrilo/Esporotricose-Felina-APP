import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import colors from './theme/colors';

export const { width, height } = Dimensions.get('window')
export const buttonSizes = width * 0.41

const styles = StyleSheet.create({
  fixedLogo: {
    flex: 1,
    alignSelf: 'flex-end',
    position: "absolute",
  },

  globalContainer: {
    flex: 1,
    padding: buttonSizes * 0.08,
  },

  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollContainer: {
    padding: buttonSizes * 0.08,
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

  containerSignAndSymptomsMenu2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: buttonSizes * .01,
  },

  containerAboutUsButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: width * .05,
  },

  // Content from SignAndSymptomsScreen4

  firstImageTitlePanel: {
    backgroundColor: colors.primary,
    borderRadius: buttonSizes * 0.5,
    margintop: buttonSizes * .09,
    alignSelf: 'center',
    paddingHorizontal: buttonSizes * .1,
    paddingVertical: buttonSizes * .01,
    marginTop: buttonSizes * 0.1
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: buttonSizes * 0.1,
    marginBottom: buttonSizes * 0.1
  },

  image: {
    borderRadius: buttonSizes * 0.1,
    borderWidth: buttonSizes * 0.01,
    borderColor: colors.primary,
    resizeMode: 'cover',
    overflow: 'hidden'
  },

  regionTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: buttonSizes * 0.01,
  },


  // Content from SignAndSymptomsScreen3

  firstIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: buttonSizes * .09,
    marginBottom: buttonSizes * .09,
  },

  secondIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  firstTitlePanel: {
    backgroundColor: colors.primary,
    borderRadius: buttonSizes * 0.5,
    margintop: buttonSizes * .09,
    alignSelf: 'center',
    paddingHorizontal: buttonSizes * .1,
    paddingVertical: buttonSizes * .01,
  },

  secondTitlePanel: {
    backgroundColor: colors.primaryTransparent20,
    borderRadius: buttonSizes * 0.5,
    marginTop: buttonSizes * .09,
    alignSelf: 'center',
    paddingHorizontal: buttonSizes * .1,
    paddingVertical: buttonSizes * .01,
  },

  firstTitleText: {
    color: colors.surfaceWhite,
    fontSize: buttonSizes * .12,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },

  secondTitleText: {
    color: colors.primary,
    fontSize: buttonSizes * .12,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },

  mainTextPanel: {
    padding: buttonSizes * .12,
    margintop: buttonSizes * .12,
  },

  extendedText: {
    fontSize: buttonSizes * 0.1,
    lineHeight: buttonSizes * 0.15,
    fontFamily: 'Poppins-Regular',
    textAlign: "justify",
  },

  // Buttons from main menu

  containerInsideButton: {
    flex: 1,
    padding: buttonSizes * .01,
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
    fontSize: Math.round(buttonSizes * .11),
    fontFamily: 'Poppins-SemiBold',
    maxWidth: buttonSizes,
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
    lineHeight: buttonSizes * 0.12,
    fontFamily: 'Poppins-Regular',
    textAlign: "justify",
  },

  textFromAboutUs: {
    fontSize: buttonSizes * 0.1,
    fontFamily: 'Poppins-Regular',
    textAlign: "justify"
  },

  titleFromAboutUs: {
    fontSize: buttonSizes * 0.1,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    textAlign: "justify"
  },

  listItemFromAboutUs: {
    fontSize: buttonSizes * 0.1,
    fontFamily: 'Poppins-Regular',
    textAlign: "justify"
  },

  boldFromAboutUs: {
    fontSize: buttonSizes * 0.1,
    fontFamily: 'Poppins-SemiBold',
    color: colors.primary,
    textAlign: "justify"
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

  textFromHeader: {
    color: colors.surfaceWhite,
    fontSize: Math.round(width * .05),
    fontFamily: 'Poppins-SemiBold',
  },

  //Signs and Symptoms Button 1

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

  //Signs and Symptoms Panel

  SignsAndSymptomsPanel: {
    backgroundColor: colors.tertiary,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    width: buttonSizes * 2.2,
    margin: buttonSizes * 0.08,
    paddingLeft: buttonSizes * 0.1,
    paddingRight: buttonSizes * 0.1,
    paddingBottom: buttonSizes * 0.08,
    paddingTop: buttonSizes * 0.08,
  },

  SignsAndSymptomsPanelTitle: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: Math.round(buttonSizes * .15),
  },

  SignsAndSymptomsPanelDescription: {
    fontFamily: 'Poppins-Medium',
    fontSize: Math.round(buttonSizes * .09),
    textAlign: 'justify',
  },

  SignsAndSymptomsPanelViews: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: "space-between",
  },

  SignsAndSymptomsPanelIconView: {
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: buttonSizes * 0.03
  },

  SignsAndSymptomsPanelTitleView: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: "flex-end",
  },

  //Signs and Symptoms Button 2

  SignsAndSymptomsButton2: {
    flex: 0.45,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: buttonSizes * 0.05,
    borderRadius: buttonSizes * 0.5,
    paddingHorizontal: buttonSizes * 0.1,
  },

  SignsAndSymptomsButton2Title: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * .065),
    marginRight: buttonSizes * 0.02
  },

  SignsAndSymptomsButtonViews: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
    alignContent: 'center',
  },

  overlayContent: {
    justifyContent: "center",
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
  headerTitleStyle: styles.textFromHeader,
  headerTintColor: colors.surfaceWhite,
  headerTitleAlign: 'center',
}

export default styles;
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