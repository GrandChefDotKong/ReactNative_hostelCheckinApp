import React, { useState } from 'react'
import { View, Text, ImageBackground } from 'react-native';
import Button from '../components/Button';
import LanguageSelector from '../components/LanguageSelector';
import { language } from '../language/language';
import { globalStyles } from '../styles/global_phone';
//import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {
  
  const [languageSelected, setLanguageSelected] = useState('japanese');

  const handleLanguageChange = (value) => {
    setLanguageSelected(value);
  }

  return (
    <ImageBackground source={require('../assets/wallpaper.png')} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'repeat'}}>
    <View style={globalStyles.container}>
      <ImageBackground source={require('../assets/contents-bg.png')} style={globalStyles.backgroundImage} 
        imageStyle={globalStyles.backgroundImageGrass}>
        <View style={globalStyles.titleContainer}>
          <Text style={globalStyles.titleText}>
            {language.titleText[languageSelected]}
          </Text>
        </View>
        <LanguageSelector vibration={true} handleLanguageChange={handleLanguageChange}/>
        <Text style={globalStyles.paragraphHome}>
          {language.paragraphHome[languageSelected]}
        </Text>
      <View style={globalStyles.button}>
        <Button
          width={328}
          vibration={true}
          onPress={() => {
          navigation.navigate('Form', {
            languageSelected
          })}}
          title={language.startButton[languageSelected]}
        />
      </View>
      </ImageBackground>
    </View>
    </ImageBackground>
  );
}

