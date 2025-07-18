import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import colors from './theme/colors';

export const { width, height } = Dimensions.get('window')
export const buttonSizes = width * 0.41

const styles = StyleSheet.create({
  // GLOBAL CONTAINERS
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
    padding: buttonSizes * 0.065,
  },

  section: {
    margin: buttonSizes * 0.03,
    marginBottom: buttonSizes * 0.05,
  },

  // MAIN MENU CONTAINERS
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

  containerInsideButton: {
    flex: 1,
    padding: buttonSizes * .01,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // IMAGE AND ICON CONTAINERS
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
    marginTop: buttonSizes * 0.08,
    marginBottom: buttonSizes * 0.08
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
    alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: buttonSizes * 0.01,
  },

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

  // TITLE PANELS
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

  mainTextPanel: {
    padding: buttonSizes * .12,
    margintop: buttonSizes * .12,
  },

  // MAIN MENU BUTTONS
  changeScreenTo: {
    backgroundColor: colors.backgroundChangeScreenButton,
    borderRadius: buttonSizes * .25,
    width: buttonSizes,
    height: buttonSizes,
    margin: buttonSizes * .1,
  },

  howToDealButton: {
    margin: buttonSizes * 0.05,
    padding: buttonSizes * 0.07,
    backgroundColor: colors.primary,
    borderRadius: buttonSizes * .05
  },

  // SIGNS AND SYMPTOMS BUTTONS
  SignsAndSymptomsButton: {
    width: buttonSizes * 1.8,
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

  SignsAndSymptomsButtonViews: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  // SIGNS AND SYMPTOMS PANELS
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

  // TEXTS - TITLES
  firstTitleText: {
    color: colors.surfaceWhite,
    fontSize: buttonSizes * .12,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },

  secondTitleText: {
    color: colors.primary,
    fontSize: buttonSizes * .11,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
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

  titleFromAboutUs: {
    fontSize: buttonSizes * 0.1,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    textAlign: "justify"
  },

  titleMiddle: {
    fontSize: buttonSizes * 0.1,
    fontFamily: "Poppins-Bold",
    color: colors.textBlack,
    marginBottom: buttonSizes * 0.02,
    textAlign: "center",
  },

  title: {
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * 0.1),
    fontFamily: "Poppins-Medium",
  },

  italicTitle: {
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * 0.1),
    fontFamily: "Poppins-Medium",
    fontStyle: "italic",
  },

  SignsAndSymptomsPanelTitle: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: Math.round(buttonSizes * .15),
  },

  // TEXTS - BUTTONS
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

  SignsAndSymptomsButtontitles: {
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * .16),
    fontFamily: "Poppins-Medium",
    paddingRight: buttonSizes * 0.04
  },

  SignsAndSymptomsButton2Title: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * .065),
    marginRight: buttonSizes * 0.02
  },

  // TEXTS - GENERAL
  text: {
    fontSize: buttonSizes * 0.1,
    lineHeight: buttonSizes * 0.12,
    fontFamily: 'Poppins-Regular',
    textAlign: "justify",
  },

  extendedText: {
    fontSize: buttonSizes * 0.1,
    lineHeight: buttonSizes * 0.15,
    fontFamily: 'Poppins-Regular',
    textAlign: "justify",
  },

  textFromAboutUs: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: buttonSizes * 0.07,
  },

  listItemFromAboutUs: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: buttonSizes * 0.05,
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

  italic: {
    fontFamily: "Poppins-Italic",
  },

  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
    textAlign: "justify",
  },

  textFromHeader: {
    color: colors.surfaceWhite,
    fontSize: Math.round(width * .05),
    fontFamily: 'Poppins-SemiBold',
  },

  contentText: {
    color: colors.surfaceWhite,
    fontSize: buttonSizes * 0.09,
    lineHeight: buttonSizes * 0.12,
    fontFamily: "Poppins-Regular",
  },

  SignsAndSymptomsPanelDescription: {
    fontFamily: 'Poppins-Medium',
    fontSize: Math.round(buttonSizes * .09),
    textAlign: 'justify',
  },

  // ACCORDION
  accordionContainer: {
    marginVertical: buttonSizes * 0.03,
    marginHorizontal: buttonSizes * 0.07,
    borderRadius: buttonSizes * 0.1,
    overflow: "hidden",
    backgroundColor: colors.primary,
  },

  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: buttonSizes * 0.08,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
  },

  activeHeader: {
    backgroundColor: colors.secondary,
  },

  accordionContent: {
    backgroundColor: colors.secondary,
    paddingTop: buttonSizes * 0.02,
    paddingBottom: buttonSizes * 0.08,
    paddingHorizontal: buttonSizes * 0.08,
    borderTopWidth: 0,
  },

  // OVERLAY
  overlayContainer: {
    width: "85%",
    borderRadius: buttonSizes * 0.09,
    padding: 0,
    backgroundColor: "#FFFFFF",
    alignContent: 'center',
    paddingTop: buttonSizes * 0.05,
    paddingBottom: buttonSizes * 0.05
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
    textAlign: "justify",
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

  // LOADING SCREENS
  // LOADING SCREENS
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  loadingText: {
    marginTop: buttonSizes * 0.01,
    fontSize: buttonSizes * 0.2,
    color: colors.textBlack,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },

  loadingScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: buttonSizes * 0.1,
  },

  loadingLogoContainer: {
    marginBottom: buttonSizes * 0.005,
  },

  loadingLogo: {
    width: buttonSizes * 0.2,
    height: buttonSizes * 0.2,
    resizeMode: 'contain',
  },

  loadingTitle: {
    fontSize: buttonSizes * 0.15,
    fontFamily: 'Poppins-Bold',
    color: colors.textBlack,
    textAlign: 'center',
    marginBottom: buttonSizes * 0.025,
  },

  loadingSubtitleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: buttonSizes * 0.12,
  },

  loadingSubtitle: {
    fontSize: buttonSizes * 0.11,
    fontFamily: 'Poppins-Regular',
    color: colors.textBlack,
    textAlign: 'center',
  },

  loadingSubtitleHighlight: {
    fontSize: buttonSizes * 0.11,
    fontFamily: 'Poppins-SemiBold',
    color: colors.primary,
    textAlign: 'center',
  },

  loadingSpinner: {
    marginTop: buttonSizes * 0.07,
  },

  // VETERINARY MAP
  mapContainer: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  vetModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vetModalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: buttonSizes * 0.059,
    overflow: 'hidden',
  },
  vetModalHeader: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: buttonSizes * 0.089,
    paddingVertical: buttonSizes * 0.107,
  },
  vetModalTitle: {
    color: 'white',
    fontSize: buttonSizes * 0.107,
    fontFamily: 'Poppins-SemiBold',
    flex: 1,
    paddingRight: buttonSizes * 0.059,
  },
  vetModalBody: {
    padding: buttonSizes * 0.089,
  },
  vetInfoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: buttonSizes * 0.01,
  },
  vetInfoText: {
    marginLeft: buttonSizes * 0.059,
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: buttonSizes * 0.089,
  },
  vetButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: buttonSizes * 0.089,
    borderTopWidth: 1,
    borderTopColor: colors.primaryTransparent20,
  },
  vetButton: {
    paddingVertical: buttonSizes * 0.059,
    paddingHorizontal: buttonSizes * 0.119,
    borderRadius: buttonSizes * 1.5,
    minWidth: buttonSizes * 0.593,
    alignItems: 'center',
  },
  vetPrimaryButton: {
    backgroundColor: colors.primary,
  },
  vetSecondaryButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  vetButtonText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: buttonSizes * 0.1,
  },
  vetSecondaryButtonText: {
    color: colors.primary,
    fontFamily: 'Poppins-Medium',
    fontSize: buttonSizes * 0.089,
  },

  mapLoadingTitle: {
    fontSize: buttonSizes * 0.12,  // Menor que o loadingTitle padrão
    fontFamily: 'Poppins-SemiBold',
    color: colors.textBlack,
    textAlign: 'center',
    marginBottom: buttonSizes * 0.02,
    marginTop: buttonSizes * 0.07,
  },

  mapLoadingSubtitle: {
    fontSize: buttonSizes * 0.09,  // Menor que o loadingSubtitle padrão
    fontFamily: 'Poppins-Regular',
    color: colors.textBlack,
    textAlign: 'center',
    paddingHorizontal: buttonSizes * 0.12,
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