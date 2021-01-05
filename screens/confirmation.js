import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, Modal } from 'react-native';
import { StackActions } from '@react-navigation/native';
import Button from '../components/Button'
import FirebaseDB from '../firebase/firebase'
import { globalStyles } from '../styles/global_phone'
//import { globalStyles } from '../styles/global'
import { language } from '../language/language';
import Error from '../shared/error'


export default function Confirmation({ route, navigation }) {

  const [picture, setPicture] = useState(route.params.picture);
  const [formData, setFormData] = useState(route.params.formData);
  const [savedSignature, setSavedSignature] = useState(route.params.savedSignature);
  const [languageSelected, setLanguageSelected] = useState(route.params.languageSelected);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnPress = async() => {

    const pictureName = formData.lastName+'-'+formData.firstName+'_'+formData.arrivalDate+'_id.jpg';
    const signatureName = formData.lastName+'-'+formData.firstName+'_'+formData.arrivalDate+'_sign.png';

    let firebaseDB = new FirebaseDB();

    if(await firebaseDB.saveFormData(formData, savedSignature, picture)) {
      if(await firebaseDB.uploadPicture(picture.uri, pictureName)) {
        firebaseDB.closeConnection();
        navigation.dispatch(StackActions.popToTop());
      } else {
        firebaseDB.closeConnection();
        setModalVisible(true);
      }
    } else {
      firebaseDB.closeConnection();
      setModalVisible(true);
    }
    //if(!firebaseDB.uploadSignature(savedSignature, signatureName)) {
    //}

  }

  const modalChangeVisible = (value) => {
    setModalVisible(value);
  }

  console.log(picture);

  return (
    <ImageBackground source={require('../assets/wallpaper.png')} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'repeat'}}>
      <View style={globalStyles.container}>
      <ImageBackground source={require('../assets/contents-bg.png')} style={globalStyles.backgroundImage} 
        imageStyle={globalStyles.backgroundImageGrass}>
        <Error type='SERVER' visible={modalVisible} modalChangeVisible={modalChangeVisible} />
        <Text style={globalStyles.confirmationTitle}>
          {language.confirmationTitle[languageSelected]}
        </Text>
        <Text style={globalStyles.mainParagraph}>
          {language.confirmationParagraph1[languageSelected]}
        </Text>
        <Image
          source={require('../assets/photo.jpg')}
          style={globalStyles.confirmationPicture}
        />
        <Text style={globalStyles.mainParagraph}>
          {language.confirmationParagraph[languageSelected]}
        </Text>
        <Button
          vibration={true}
          width={328}
          onPress={handleOnPress}
          title={language.finishButton[languageSelected]}
          color="#0c9"
        />
      </ImageBackground>
      </View>
    </ImageBackground>
  );
}


