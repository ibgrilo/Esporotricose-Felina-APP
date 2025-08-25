import { StyleSheet, Dimensions } from 'react-native';
import colors from './theme/colors';

export const { width, height } = Dimensions.get('window')
export const buttonSizes = width * 0.41

const styles = StyleSheet.create({
  // GLOBAL CONTAINERS
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
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: buttonSizes * 0.07,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  bottomSpacing: {
    height: buttonSizes * 0.122,
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

  enhancedIconContainer: {
    backgroundColor: 'white',
    borderRadius: buttonSizes * 0.5,
    padding: buttonSizes * 0.05,
    marginVertical: buttonSizes * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.012,
    },
    shadowOpacity: 0.15,
    shadowRadius: buttonSizes * 0.024,
    elevation: 4,
    alignSelf: 'center',
  },

  // TITLE PANELS
  firstTitlePanel: {
    backgroundColor: colors.primary,
    borderRadius: buttonSizes * 0.5,
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
  },

  // BUTTONS
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

  // PANELS
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

  // CARDS
  enhancedDescriptionCard: {
    backgroundColor: colors.primaryTransparent20,
    marginHorizontal: buttonSizes * 0.040,
    marginVertical: buttonSizes * 0.1,
    paddingHorizontal: buttonSizes * 0.118,
    paddingVertical: buttonSizes * 0.079,
    borderRadius: buttonSizes * 0.095,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.023,
    },
    shadowOpacity: 0.1,
    shadowRadius: buttonSizes * 0.048,
    elevation: 3,
    alignSelf: 'stretch',
    flexShrink: 1,
  },

  affectedAreaCard: {
    backgroundColor: colors.primaryTransparent20,
    marginHorizontal: buttonSizes * 0.122,
    marginVertical: buttonSizes * 0.02,
    marginBottom: buttonSizes * 0.09,
    paddingHorizontal: buttonSizes * 0.122,
    paddingVertical: buttonSizes * 0.152,
    borderRadius: buttonSizes * 0.091,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.024,
    },
    shadowOpacity: 0.2,
    shadowRadius: buttonSizes * 0.037,
    elevation: 6,
    borderWidth: buttonSizes * 0.003,
    borderColor: colors.primary,
  },

  howToDealCard: {
    backgroundColor: 'white',
    marginHorizontal: buttonSizes * 0.040,
    marginVertical: buttonSizes * 0.048,
    paddingHorizontal: buttonSizes * 0.118,
    paddingVertical: buttonSizes * 0.079,
    borderRadius: buttonSizes * 0.095,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.023,
    },
    shadowOpacity: 0.15,
    shadowRadius: buttonSizes * 0.048,
    elevation: 5,
    borderLeftWidth: buttonSizes * 0.023,
    borderLeftColor: colors.primary,
    minHeight: buttonSizes * 0.317,
  },

  howToDealIconContainer: {
    backgroundColor: colors.primaryTransparent20,
    borderRadius: buttonSizes * 0.159,
    width: buttonSizes * 0.238,
    height: buttonSizes * 0.238,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: buttonSizes * 0.079,
    flexShrink: 0,
  },

  howToDealTextContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: buttonSizes * 0.016,
  },

  alertCard: {
    backgroundColor: colors.attention,
    marginHorizontal: buttonSizes * 0.040,
    marginTop: buttonSizes * 0.079,
    marginBottom: buttonSizes * 0.079,
    paddingHorizontal: buttonSizes * 0.118,
    paddingVertical: buttonSizes * 0.079,
    borderRadius: buttonSizes * 0.095,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.023,
    },
    shadowOpacity: 0.25,
    shadowRadius: buttonSizes * 0.048,
    elevation: 6,
    minHeight: buttonSizes * 0.238,
  },

  // TAGS AND DIVIDERS
  regionTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: buttonSizes * 0.122,
    marginVertical: buttonSizes * 0.061,
    gap: buttonSizes * 0.037,
    paddingHorizontal: buttonSizes * 0.061,
  },

  regionTag: {
    backgroundColor: colors.primaryTransparent20,
    borderRadius: buttonSizes * 0.122,
    paddingHorizontal: buttonSizes * 0.091,
    paddingVertical: buttonSizes * 0.037,
    marginHorizontal: buttonSizes * 0.024,
    marginVertical: buttonSizes * 0.024,
    minWidth: buttonSizes * 0.366,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.012,
    },
    shadowOpacity: 0.1,
    shadowRadius: buttonSizes * 0.024,
    elevation: 3,
  },

  sectionDivider: {
    height: 1,
    backgroundColor: colors.primaryTransparent20,
    marginHorizontal: buttonSizes * 0.2,
    marginVertical: buttonSizes * 0.061,
  },

  centeredTitleContainer: {
    alignItems: 'center',
    marginHorizontal: buttonSizes * 0.122,
    marginVertical: buttonSizes * 0.061,
  },

  // TEXTS
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
    fontSize: buttonSizes * 0.11, // era 18
    fontFamily: 'Poppins-Bold',
    color: colors.textBlack,
    marginTop: buttonSizes * 0.037, // era 15
    marginBottom: buttonSizes * 0.012, // era 5
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
    fontSize: Math.round(buttonSizes * .13),
  },

  enhancedTitleText: {
    color: colors.primary,
    fontSize: buttonSizes * 0.14,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
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

  SignsAndSymptomsButtontitles: {
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * .14),
    fontFamily: "Poppins-Medium",
    paddingRight: buttonSizes * 0.04
  },

  SignsAndSymptomsButton2Title: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.surfaceWhite,
    fontSize: Math.round(buttonSizes * .065),
    marginRight: buttonSizes * 0.02
  },

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
    fontSize: buttonSizes * 0.098, // era 16
    textAlign: 'justify',
    marginBottom: buttonSizes * 0.07,
  },

  listItemFromAboutUs: {
    fontFamily: 'Poppins-Regular',
    fontSize: buttonSizes * 0.098, // era 16
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
    lineHeight: buttonSizes * 0.134, // era 22
    fontFamily: 'Poppins-Bold',
    color: colors.attention,
    textAlign: 'center'
  },

  italic: {
    fontFamily: "Poppins-Italic",
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

  enhancedDescriptionText: {
    fontSize: buttonSizes * 0.095,
    fontFamily: 'Poppins-Medium',
    color: colors.primary,
    lineHeight: buttonSizes * 0.118,
    textAlign: 'justify',
    flexWrap: 'wrap',
  },

  emptyText: {
    fontSize: buttonSizes * 0.098,
    color: '#666',
    textAlign: 'center',
  },

  regionTagText: {
    color: colors.primary,
    fontSize: buttonSizes * 0.085,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },

  howToDealTitle: {
    fontSize: buttonSizes * 0.11,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    marginBottom: buttonSizes * 0.031,
    lineHeight: buttonSizes * 0.127,
  },

  howToDealDescription: {
    fontSize: buttonSizes * 0.095,
    fontFamily: 'Poppins-Regular',
    color: colors.textBlack,
    lineHeight: buttonSizes * 0.118,
    textAlign: 'justify',
    flexWrap: 'wrap',
  },

  howToDealIcon: {
    fontSize: buttonSizes * 0.118,
  },

  alertIcon: {
    fontSize: buttonSizes * 0.11,
    marginRight: buttonSizes * 0.048,
    flexShrink: 0,
  },

  alertText: {
    fontSize: buttonSizes * 0.09,
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
    lineHeight: buttonSizes * 0.127,
    flexWrap: 'wrap',
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

  // MODALS AND OVERLAYS
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

  loadingScreenContainerFullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: buttonSizes * 0.1,
    paddingTop: buttonSizes * 0.15, // Espaço para a status bar
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

  mapLoadingTitle: {
    fontSize: buttonSizes * 0.12,
    fontFamily: 'Poppins-SemiBold',
    color: colors.textBlack,
    textAlign: 'center',
    marginBottom: buttonSizes * 0.02,
    marginTop: buttonSizes * 0.07,
  },

  mapLoadingSubtitle: {
    fontSize: buttonSizes * 0.09,
    fontFamily: 'Poppins-Regular',
    color: colors.textBlack,
    textAlign: 'center',
    paddingHorizontal: buttonSizes * 0.12,
  },

  // VETERINARY MAP
  mapContainer: {
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  noLocationBanner: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: colors.attention,
    padding: buttonSizes * 0.05,
    borderRadius: buttonSizes * 0.05,
    elevation: 5,
  },

  noLocationText: {
    color: 'white',
    textAlign: 'center',
    fontSize: buttonSizes * 0.08,
    fontFamily: 'Poppins-Medium',
  },

  resultCountBanner: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: colors.primary,
    padding: buttonSizes * 0.05,
    borderRadius: buttonSizes * 0.05,
    elevation: 5,
  },

  resultCountText: {
    color: 'white',
    textAlign: 'center',
    fontSize: buttonSizes * 0.08,
    fontFamily: 'Poppins-Medium',
  },

  // VET INFO MODAL STYLES
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },

  modalSafeArea: {
    backgroundColor: 'transparent',
  },

  modalContainer: {
    backgroundColor: colors.surfaceWhite,
    borderTopLeftRadius: buttonSizes * 0.1,
    borderTopRightRadius: buttonSizes * 0.1,
    maxHeight: height * 0.7,
    minHeight: height * 0.4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: buttonSizes * 0.08,
    paddingBottom: buttonSizes * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },

  modalHeaderContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: buttonSizes * 0.05,
  },

  modalTitle: {
    fontSize: buttonSizes * 0.12,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    marginLeft: buttonSizes * 0.05,
    flex: 1,
    lineHeight: buttonSizes * 0.15,
  },

  modalCloseButton: {
    padding: buttonSizes * 0.02,
    borderRadius: buttonSizes * 0.05,
    backgroundColor: colors.lightGray,
  },

  modalContent: {
    flex: 1,
    paddingHorizontal: buttonSizes * 0.08,
    paddingVertical: buttonSizes * 0.05,
  },

  modalInfoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: buttonSizes * 0.08,
    paddingBottom: buttonSizes * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },

  modalInfoTextContainer: {
    flex: 1,
    marginLeft: buttonSizes * 0.05,
  },

  modalInfoLabel: {
    fontSize: buttonSizes * 0.085,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
    marginBottom: buttonSizes * 0.02,
  },

  modalInfoText: {
    fontSize: buttonSizes * 0.09,
    fontFamily: 'Poppins-Regular',
    color: colors.textBlack,
    lineHeight: buttonSizes * 0.12,
    textAlign: 'justify',
  },

  modalActions: {
    flexDirection: 'row',
    paddingHorizontal: buttonSizes * 0.08,
    paddingVertical: buttonSizes * 0.05,
    paddingBottom: buttonSizes * 0.08,
    gap: buttonSizes * 0.05,
  },

  modalActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: buttonSizes * 0.08,
    borderRadius: buttonSizes * 0.08,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  modalCallButton: {
    backgroundColor: colors.success || '#28a745',
  },

  modalDirectionsButton: {
    backgroundColor: colors.primary,
  },

  modalActionButtonText: {
    fontSize: buttonSizes * 0.095,
    fontFamily: 'Poppins-Bold',
    color: colors.surfaceWhite,
    marginLeft: buttonSizes * 0.03,
  },

  // PREVENTION SCREEN SPECIFIC STYLES
  preventionMainContainer: {
    marginBottom: buttonSizes * 0.079,
    paddingHorizontal: buttonSizes * 0.020
  },

  preventionIntroCard: {
    marginBottom: buttonSizes * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.02,
    },
    shadowOpacity: 0.1,
    shadowRadius: buttonSizes * 0.04,
    elevation: 3,
  },

  preventionFinalAlert: {
    backgroundColor: '#28a745',
    marginTop: buttonSizes * 0.079,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.03,
    },
    shadowOpacity: 0.3,
    shadowRadius: buttonSizes * 0.06,
    elevation: 8,
  },

  // GENERIC ACCORDION STYLES (renomeados de prevention)
  accordionCard: {
    marginBottom: buttonSizes * 0.03,
  },

  cardActive: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.primaryTransparent20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.04,
    },
    shadowOpacity: 0.25,
    shadowRadius: buttonSizes * 0.06,
  },

  cardInactive: {
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: buttonSizes * 0.02,
    },
    shadowOpacity: 0.15,
    shadowRadius: buttonSizes * 0.04,
  },

  iconActive: {
    backgroundColor: colors.primary,
  },

  iconInactive: {
    backgroundColor: colors.primaryTransparent20,
  },

  titleActive: {
    color: colors.primary,
    fontSize: buttonSizes * 0.115,
    marginBottom: 0,
  },

  titleInactive: {
    color: colors.primary,
    fontSize: buttonSizes * 0.11,
    marginBottom: 0,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  arrowWrapper: {
    marginLeft: buttonSizes * 0.02,
  },

  arrowActive: {
    width: buttonSizes * 0.12,
    height: buttonSizes * 0.12,
    borderRadius: buttonSizes * 0.06,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  arrowInactive: {
    width: buttonSizes * 0.12,
    height: buttonSizes * 0.12,
    borderRadius: buttonSizes * 0.06,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  arrowTextActive: {
    fontSize: buttonSizes * 0.07,
    color: colors.surfaceWhite,
    fontFamily: 'Poppins-Bold',
  },

  arrowTextInactive: {
    fontSize: buttonSizes * 0.07,
    color: '#666',
    fontFamily: 'Poppins-Bold',
  },

  contentWrapper: {
    overflow: "hidden",
  },

  contentBorder: {
    marginTop: buttonSizes * 0.03,
    paddingTop: buttonSizes * 0.03,
    borderTopWidth: 1,
    borderTopColor: colors.primary,
  },

  descriptionStyle: {
    lineHeight: buttonSizes * 0.125,
  },

  hiddenMeasurer: {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    left: 0,
    right: 0,
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