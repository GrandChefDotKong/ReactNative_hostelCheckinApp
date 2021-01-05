import React, { useState } from 'react'
import { View, Text, ImageBackground } from 'react-native';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button'
import { language } from '../language/language';
import { globalStyles } from '../styles/global_phone'
//import { globalStyles } from '../styles/global'

export default function  Rules({ route, navigation }) {

    const [checkBox, setCheckBox] = useState(false);
    const [picture, setPicture] = useState(route.params.picture);
    const [formData, setFormData] = useState(route.params.formData);
    const [languageSelected, setLanguageSelected] = useState(route.params.languageSelected);
    const checkBoxText = language.ruleCheckBox[languageSelected];

    const handleCheckBoxChange = (value) => {
      setCheckBox(value);
    }

  return (
    <ImageBackground source={require('../assets/wallpaper.png')} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'repeat'}}>
      <View style={globalStyles.container}>
      <ImageBackground source={require('../assets/contents-bg.png')} style={globalStyles.backgroundImage} 
        imageStyle={globalStyles.backgroundImageGrass}>
        <View style={globalStyles.ruleContainer}>
          <Text style={globalStyles.ruleTitle}>
            {language.ruleTitle[languageSelected]}
          </Text>
            <Text style={globalStyles.ruleText}>
              {language.ruleText[languageSelected]}
            </Text>
            <View style={globalStyles.ruleCheckBox}>
              <CheckBox checkBoxText={checkBoxText} vibration={true} handleBoxChange={handleCheckBoxChange} />
          </View>
        </View>
        <Button
          vibration={true}
          width={328}
          disabled={!checkBox}
          onPress={() => {
            navigation.navigate('Signature', {
              formData, picture, languageSelected
            });
          }}
          title={language.nextButton[languageSelected]}
        />
        </ImageBackground>
      </View>
    </ImageBackground>
  );
}

