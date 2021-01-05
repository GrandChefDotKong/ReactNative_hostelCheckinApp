import { StyleSheet, Dimensions } from 'react-native';

const d = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
// SHARED SCREEN STYLE
  mainBackground: {
    position: 'absolute',
    flex: 1,
    width: d.width,
    height: d.height-80,
    justifyContent: 'space-between',
  },
  mainBackgroundImage: { 
    resizeMode: 'repeat',
  },
  container: {
    flex: 1,
    backgroundColor: "#fffeec",
    marginHorizontal: 50,
    paddingBottom: -20,
    paddingTop: 10,
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
    width: 700,
    height: 300,
  },
  mainParagraph: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: 'MPLUSRounded1c-regular',
    marginTop: 20,
  },
// HEADER STYLE
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 40,
  },
  headerImage: {
    height: 26,
    width: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'MPLUSRounded1c-bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
// BUTTON IN ROW
  buttonInRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
///////////////////////
// HOME SCREEN STYLE //
  titleContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderLeftWidth: 15,
    borderColor:'#e50012',
    marginTop: '8%',
  },
  titleText: {
    fontSize: 50,
    fontWeight: "900",
    color: '#333',
    marginLeft: 10,
    fontFamily: 'MPLUSRounded1c-bold',
    textAlign: 'left',
  },
  paragraphHome: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: 'MPLUSRounded1c-regular',
    paddingBottom: 20,
  },
// FORM SCREEN STYLE
  keyboardAwareScrollView: {
  },
  scrollViewContainer: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 10,
    height: '100%',
  },
  scrollView: {
  },
  inputContainer: {
    flexDirection: 'column',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: 'white',
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginTop: 10,
    marginHorizontal: 10,
    width: 550,
    alignSelf: 'center',
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  datePickerInnerContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
  },
  datePickerInnerContainer2: {
    alignItems: 'center',
    marginLeft: -10,
  },
  datePicker: {
    marginTop: 15,
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
    paddingBottom: 50,
    backgroundColor: "#fffeec",
  },
  modalText: {
    marginTop: 60,
    padding: 20,
    fontSize: 22,
    textAlign: 'left',
    fontFamily: 'MPLUSRounded1c-regular',
    alignSelf: 'center',
    lineHeight: 40,
  },
  modalCheckBox: {
    flexGrow: 3,
    justifyContent: 'center',
  },
  modalPicture: {
    flexGrow: 3,
    width: 550,
    height: 800,
    resizeMode: "contain",
    paddingVertical: 10,
    alignSelf: 'center',
  },
// RULE SCREEN STYLE
  ruleContainer: {
    marginTop: 50,
  },
  ruleTitle: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: 'MPLUSRounded1c-regular',
    paddingBottom: 20,
    marginTop: 20,
    lineHeight: 37,
  },
  ruleText: {
    fontSize: 20,
    textAlign: "left",
    fontFamily: 'MPLUSRounded1c-regular',
    paddingBottom: 20,
    alignSelf: 'center',
    lineHeight: 37,
    paddingLeft : 20,
    fontStyle : 'normal',
    marginTop: 20,
  },
  ruleCheckBox: {
    marginTop: 200,
    marginHorizontal: 30,
  },
// CONFIRMATION SCREEN STYLE
  confirmationTitle: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: 'MPLUSRounded1c-bold',
    paddingBottom: 20,
    marginTop: 30,
    lineHeight: 37,
  },
  confirmationPicture: {
    width: 550,
    height: 700,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: -70,
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
