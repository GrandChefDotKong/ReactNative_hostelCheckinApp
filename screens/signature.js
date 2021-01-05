import React,  { useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Signature, {readSignature, clearSignature} from 'react-native-signature-canvas';
import Button from '../components/Button'
import { language } from '../language/language';
import { globalStyles } from '../styles/global_phone'
//import { globalStyles } from '../styles/global'

export default function Signing({ route, navigation }) {

  const [savedSignature, setSavedSignature] = useState(null);
  const [formData, setFormData] = useState(route.params.formData);
  const [picture, setPicture] = useState(route.params.picture);
  const [languageSelected, setLanguageSelected] = useState(route.params.languageSelected);

  const handleSignature = signature => {
      setSavedSignature(signature);
  };

  const handleClear = () => {
      setSavedSignature(null);
  };

  const handleEmpty = () => {
      
  }

  const styleString = `
    body {
      background: none;
      background-color: #fffeec;
    }
    .m-signature-pad {
      margin: 0px;
      margin-top: 50px;
      border: 2px;
      height: 270px;
      width: 325px;
      margin-left: 2px;
    }
    .m-signature-pad--footer {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 20px;
      bottom: 1 0px;
      height: 0px;
    }
    .m-signature-pad--footer
    .button {
      background-color: #0c9;
      width: 250px;
      height: 0px;
    }
    .m-signature-pad--footer
      .button.clear {
        display: none;
      }

    .m-signature-pad--footer
      .button.save {
        display: none;
      }
  `;

  return (
    <ImageBackground source={require('../assets/wallpaper.png')} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'repeat'}}>
      <View style={globalStyles.container}>
      <ImageBackground source={require('../assets/contents-bg.png')} style={globalStyles.backgroundImage} 
        imageStyle={globalStyles.backgroundImageGrass}>
        <Text style={globalStyles.mainParagraph}>
          {language.signatureMainParagraph[languageSelected]}
        </Text>
        <Signature
          onOK={handleSignature}
          onEmpty={handleEmpty}
          descriptionText=""
          webStyle={styleString}
          onClear={handleClear}
        />
        <View style={globalStyles.buttonInRow}>
          <Button
            vibration={true}
            disabled={false}
            width={140}
            onPress={() => clearSignature()}
            title={language.clearButton[languageSelected]}
          />
          <Button
            vibration={true}
            disabled={false}
            width={140}
            onPress={() => readSignature()}
            title={language.saveButton[languageSelected]}
          />

        </View>
        <Button
          vibration={true}
          width={328}
          disabled={savedSignature===null?true:false}
          onPress={() => navigation.navigate('Confirmation', {
            formData, picture, savedSignature, languageSelected
          })}
          title={language.nextButton[languageSelected]}
        />
      </ImageBackground>
      </View>
    </ImageBackground>
  );
}

