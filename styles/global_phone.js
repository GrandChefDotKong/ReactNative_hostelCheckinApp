import { StyleSheet, Dimensions } from 'react-native';

const d = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
// SHARED SCREEN STYLE
  mainBackground: {
    position: 'absolute',
    flex: 1,
    width: d.width,
    height: d.height-57,
    justifyContent: 'space-between',
  },
  mainBackgroundImage: { 
    resizeMode: 'repeat',
  },
  container: {
    flex: 1,
    width: 330,
    marginLeft: 30,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  backgroundImageGrass: {
    position: 'absolute',
    top: undefined,
    left: undefined,
    right: 0,
    bottom: 0,
  },
  mainParagraph: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: 'MPLUSRounded1c-regular',
    marginTop: 10,
  },
// HEADER STYLE
  header: {
    width: '100%',
    height: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
  },
  headerImage: {
    height: 12,
    width: 12,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'MPLUSRounded1c-bold',
    fontSize: 10,
    color: '#ff0000',
    letterSpacing: 1,
  },
// BUTTON IN ROW
  buttonInRow: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginLeft: 25,
  },
///////////////////////
// HOME SCREEN STYLE //
  titleContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderLeftWidth: 5,
    borderColor:'#e50012',
    marginTop: '8%',
  },
  titleText: {
    fontSize: 14,
    fontWeight: "900",
    marginLeft: 10,
    fontFamily: 'MPLUSRounded1c-bold',
    textAlign: 'left',
  },
  paragraphHome: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: 'MPLUSRounded1c-regular',
    paddingBottom: 10,
  },
// FORM SCREEN STYLE
  keyboardAwareScrollView: {
  },
  scrollViewContainer: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 5,
    height: '100%',
  },
  scrollView: {
  },
  inputContainer: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 10,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginTop: 10,
    marginHorizontal: 10,
    width: 260,
    alignSelf: 'center',
  },
  datePickerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  datePickerInnerContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
    marginTop: 15,
  },
  datePicker: {
    marginTop: 10,
  },
  required: {
    fontSize: 10,
    fontFamily: 'MPLUSRounded1c-bold',
    backgroundColor: '#c00',
    color: '#FFF',
    borderWidth: 2,
    borderColor: '#c00',
    padding: 5,
    borderRadius: 6,
  },
// MODAL
  keyboardAvoidingView: {
    flex:1,
  },
  modalView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems:'stretch',
    paddingBottom: 30,
    backgroundColor: "#fffeec",
  },
  modalText: {
    marginTop: 30,
    padding: 10,
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'MPLUSRounded1c-regular',
    alignSelf: 'center',
    lineHeight: 20,

  },
  modalCheckBox: {
    flexGrow: 3,
    justifyContent: 'center',
  },
  modalPicture: {
    flexGrow: 3,
    width: 300,
    height: 350,
    resizeMode: "contain",
    paddingVertical: 10,
    alignSelf: 'center',
  },
// RULE SCREEN STYLE
  ruleContainer: {
    marginTop: 20,
  },
  ruleTitle: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: 'MPLUSRounded1c-regular',
    paddingBottom: 10,
    marginTop: 10,
    lineHeight: 20,
  },
  ruleText: {
    fontSize: 10,
    textAlign: "left",
    fontFamily: 'MPLUSRounded1c-regular',
    paddingBottom: 10,
    alignSelf: 'center',
    lineHeight: 15,
    paddingLeft : 10,
    fontStyle : 'normal',
    marginTop: 10,
  },
  ruleCheckBox: {
    marginTop: 100,
    marginHorizontal: 15,
  },
// CONFIRMATION SCREEN STYLE
  confirmationTitle: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: 'MPLUSRounded1c-bold',
    paddingBottom: 10,
    marginTop: 15,
    lineHeight: 15,
  },
  confirmationPicture: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: -20,
  },
  modalErrorText: {
    padding: 20,
    fontSize: 22,
    textAlign: 'left',
    fontFamily: 'MPLUSRounded1c-regular',
    alignSelf: 'center',
    lineHeight: 40,
  },
});
