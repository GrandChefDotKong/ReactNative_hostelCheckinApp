import React, { Component} from 'react';
import { TextInput, View, Text, TouchableWithoutFeedback, Keyboard, ScrollView, ImageBackground, KeyboardAvoidingView, Modal, Image } from 'react-native';
import RadioButton from '../components/RadioButton';
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import Label from '../components/Label'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import IconButton from '../components/IconButton'
import { useNavigation, useRoute } from '@react-navigation/native';
import { language } from '../language/language';
import { globalStyles } from '../styles/global_phone'
//import { globalStyles } from '../styles/global'

class FormClass extends Component {

  state = {
    modalVisible: false,
    checkBox: false,
    showDatePicker: false,
    dateType: '',
    date: new Date(),
    languageSelected: this.props.route.params.languageSelected,
    arrivalDate: new Date().toISOString().slice(0,10),
    departureDate: new Date().toISOString().slice(0,10),
    sex: '',
    firstName: '',
    lastName: '',
    age: '',
    nationality: '',
    occupation: '',
    passportNumber: '',
  };

  onChange = (event, selectedDate) => {
    console.log(event);
    this.setState({showDatePicker : false});
    if(this.state.dateType === 'arrival'){
      const currentDate = selectedDate || this.state.arrivalDate;
      console.log(currentDate);
      this.setState({ arrivalDate: currentDate })
    } else {
      console.log(currentDate);
      const currentDate = selectedDate || this.state.departureDate;
      this.setState({ departureDate: currentDate })
    }
  };

  showDatePicker(value) {
    this.setState({showDatePicker: true, dateType: value});

  };

  handleRadioChange = (radioValue) => {
    this.setState({
      sex: radioValue
    })
  }

  handleSubmit = () => {
    const formData =  {
      arrivalDate: this.state.arrivalDate,
      departureDate: this.state.departureDate,
      sex: this.state.sex,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      nationality: this.state.nationality,
      occupation: this.state.occupation,
      passportNumber: this.state.passportNumber,
      };
      const languageSelected = this.state.languageSelected;
      this.setState({modalVisible: false, checkBox: false});
      this.props.navigation.navigate('Picture', { formData, languageSelected
    })
  }

  handleBoxChange = (value) => {
    this.setState({
      checkBox: value
    })
  }

  isFormValid() {
    if(this.state.arrivalDate != '' &&
    this.state.departureDate != '' &&
    this.state.sex != '' &&
    this.state.firstName !=  '' &&
    this.state.lastName != '' &&
    this.state.age != '' &&
    this.state.nationality != '' &&
    this.state.occupation !='' &&
    this.state.passportNumber != '') {
      return true;

    }
    return false;
  }

render() {

  const checkBoxText = language.formModalCheckBox[this.state.languageSelected];
  const radioOptions = [
    {
      key: 'male',
      text: language.sexOptions.male[this.state.languageSelected],
    },
    {
      key: 'female',
      text: language.sexOptions.female[this.state.languageSelected],
      },
  ];

  console.log(this.state.languageSelected);

  const onChange = (event, selectedDate) => {
    this.setState({showDatePicker : false});
    const currentDate = selectedDate.toISOString().slice(0,10);
    if(this.state.dateType === 'arrival'){
      this.setState({ arrivalDate: currentDate })
    } else {
      this.setState({ departureDate: currentDate })
    }
  };

  return (
    <ImageBackground source={require('../assets/wallpaper.png')} style={globalStyles.mainBackground} imageStyle={globalStyles.mainBackgroundImage}>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <KeyboardAvoidingView
        keyboardVerticalOffset = {80}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={globalStyles.keyboardAvoidingView}
      >
      <View style={globalStyles.container}>
        <ImageBackground source={require('../assets/contents-bg.png')} style={globalStyles.backgroundImage} 
          imageStyle={globalStyles.backgroundImageGrass}>
        <Modal
          animationType="slide"
          presentationStyle="pageSheet"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={globalStyles.modalView}>
            <View style={{flexDirection: 'row', justifyContent: 'center', }}>
              <Text style={globalStyles.modalText}>
                {language.formInput.lastName[this.state.languageSelected]} : {'\n'}
                {language.formInput.firstName[this.state.languageSelected]} : {'\n'}
                {language.formInput.age[this.state.languageSelected]} : {'\n'}
                {language.formInput.sex[this.state.languageSelected]} : {'\n'}
                {language.formInput.nationality[this.state.languageSelected]} : {'\n'}
                {language.formInput.occupation[this.state.languageSelected]} : {'\n'}
                {language.formInput.passportNumber[this.state.languageSelected]} : {'\n'}
                {language.formInput.arrivalDate[this.state.languageSelected]} : {'\n'}
                {language.formInput.departureDate[this.state.languageSelected]} : 
              </Text>
              <Text style={globalStyles.modalText}>
                {this.state.lastName} {'\n'}
                {this.state.firstName} {'\n'}
                {this.state.age} {'\n'}
                {this.state.sex} {'\n'}
                {this.state.nationality} {'\n'}
                {this.state.occupation} {'\n'}{this.state.languageSelected=='japanese'?'\n':''}
                {this.state.passportNumber} {'\n'}
                {this.state.arrivalDate} {'\n'}
                {this.state.departureDate}
              </Text>
            </View>
            <View style={globalStyles.modalCheckBox}><CheckBox checkBoxText={checkBoxText} vibration={true} handleBoxChange={this.handleBoxChange} /></View>
            <View style={globalStyles.buttonInRow}>
              <Button
                vibration={true}
                disabled={false}
                width={150}
                onPress={()=> this.setState({modalVisible: false})}
                title={language.backButton[this.state.languageSelected]}
              />
              <Button
                vibration={true}
                width={150}
                disabled={!this.state.checkBox}
                onPress={this.handleSubmit}
                title={language.nextButton[this.state.languageSelected]}
              />
            </View>
          </View>
        </Modal>
          <Text style={globalStyles.mainParagraph}>
            {language.formMainParagraph[this.state.languageSelected]}
          </Text>
        <View onStartShouldSetResponder={() => true} style={globalStyles.scrollViewContainer}>
          <ScrollView style={globalStyles.scrollView} contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between'
          }}>
            <View>
              <View style={globalStyles.inputContainer}>
              <View style={globalStyles.inputContainer}>
                <Label title={language.formInput.lastName[this.state.languageSelected]}/>
                <TextInput
                  style={globalStyles.input}
                  onChangeText={(value) => this.setState({ lastName: value })}
                  value={this.state.lastName}
                />
              </View>
              <Label title={language.formInput.firstName[this.state.languageSelected]}/>
                <TextInput
                  keyboardType="default"
                  style={globalStyles.input}
                  onChangeText={(value) => this.setState({ firstName: value })}
                  value={this.state.firstName}
                />
              </View>
              <View style={globalStyles.inputContainer}>
              <Label title={language.formInput.age[this.state.languageSelected]}/>
              <TextInput
                keyboardType="number-pad"
                style={globalStyles.input}
                onChangeText={(value) => this.setState({ age: value })}
                value={this.state.age}
              />
              </View>
              <View style={globalStyles.inputContainer}>
              <Label title={language.formInput.sex[this.state.languageSelected]}/>
              <RadioButton radioOptions={radioOptions} vibration={true} handleRadioChange={this.handleRadioChange} />
              </View>
              <View style={globalStyles.inputContainer}>
              <Label title={language.formInput.nationality[this.state.languageSelected]}/>
              <TextInput
                style={globalStyles.input}
                onChangeText={(value) => this.setState({ nationality: value })}
                value={this.state.nationality}
              />
              </View>
              <View style={globalStyles.inputContainer}>
              <Label title={language.formInput.occupation[this.state.languageSelected]}/>
              <TextInput
                style={globalStyles.input}
                onChangeText={(value) => this.setState({ occupation: value })}
                value={this.state.occupation}
              />
              </View>
              <View style={globalStyles.inputContainer}>
              <Label title={language.formInput.passportNumber[this.state.languageSelected]}/>
              <TextInput
                style={globalStyles.input}
                onChangeText={(value) => this.setState({ passportNumber: value })}
                value={this.state.passportNumber}
              />
              </View>
              <View style={globalStyles.datePickerContainer}>
                <View style={globalStyles.datePickerInnerContainer}>
                  <Label title={language.formInput.arrivalDate[this.state.languageSelected]}/>
                  <IconButton 
                    width={200}
                    vibration={true}
                    onPress={()=> this.showDatePicker('arrival')} 
                    title={this.state.arrivalDate} 
                  />
                </View>
                <View style={globalStyles.datePickerInnerContainer}>
                  <Label title={language.formInput.departureDate[this.state.languageSelected]}/>
                  <IconButton 
                    width={200}
                    vibration={true}
                    onPress={()=> this.showDatePicker('departure')} 
                    title={this.state.departureDate} 
                  />
                </View>
                {this.state.showDatePicker&&<RNDateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={this.state.date}
                  mode='date'
                  is24Hour={true}
                  display="calendar"
                  onChange={onChange}
                />}
              </View>
            </View>
            </ScrollView>
            </View>
            <Button
              vibration={true}
              width={328}
              disabled={!this.isFormValid()}
              onPress={()=> this.setState({modalVisible: true})}
              title={language.nextButton[this.state.languageSelected]}
            />
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </ImageBackground>
  );      
}
}

// Wrap and export
export default function Form(props) {
  const navigation = useNavigation();
  const route = useRoute(props.route);

  return <FormClass {...props} route={route} navigation={navigation} />;
}


