import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, Modal, Image } from 'react-native';
import Button from '../components/Button'
import { Camera } from 'expo-camera';
import { language } from '../language/language';
import { globalStyles } from '../styles/global_phone'
//import { globalStyles } from '../styles/global'
import PhotoButton from '../components/PhotoButton'

export default function Picture({ route, navigation }) {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [picture, setPicture] = useState(null);
  const [formData, setFormData] = useState(route.params.formData);
  const [cameraRef, setCameraRef] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalExplainVisible, setModalExplainVisible] = useState(true);
  const [languageSelected, setLanguageSelected] = useState(route.params.languageSelected);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const takePicture = async() => {
    console.log("taking picture ...");
    if (cameraRef) {
      const data = await cameraRef.takePictureAsync({ quality: 0.6, base64: true });
      setPicture(data);
      setModalVisible(true);
    }
  }

  const handleSubmit = () => {
    setModalVisible(false);
    navigation.navigate('Rules', {
      formData, picture, languageSelected
    });
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ImageBackground source={require('../assets/wallpaper.png')} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'repeat'}}>
      <View style={globalStyles.container}>
        <Modal
          animationType="slide"
          presentationStyle="pageSheet"
          transparent={false}
          visible={modalExplainVisible}
        >
          <View style={globalStyles.modalView}>
            <Text style={globalStyles.modalText}>
              {language.modalExplainText[languageSelected]}
            </Text>
            <Image
              source={require('../assets/passport.jpg')}
              style={globalStyles.modalPicture}
            />
            <Button
              vibration={true}
              width={650}
              disabled={false}
              onPress={()=> {
                setModalExplainVisible(false);
              }}
              title={language.nextButton[languageSelected]}
            />
          </View>
        </Modal>
        <Modal
          animationType="slide"
          presentationStyle="pageSheet"
          transparent={false}
          visible={modalVisible}
        >
          <View style={globalStyles.modalView}>
            <Text style={globalStyles.modalText}>
              {language.modalText[languageSelected]}
            </Text>{ picture != null&&<Image
              source={{ uri: picture.uri }}
              style={globalStyles.modalPicture}
            />}
            <View style={globalStyles.buttonInRow}>
              <Button
                vibration={true}
                width={150}
                disabled={false}
                onPress={()=> setModalVisible(false)}
                title={language.backButton[languageSelected]}
              />
              <Button
                vibration={true}
                width={150}
                disabled={false}
                onPress={handleSubmit}
                title={language.nextButton[languageSelected]}
              />
            </View>
          </View>
        </Modal>
        <Text style={globalStyles.mainParagraph}>
          {language.pictureMainParagraph[languageSelected]}
        </Text> 
        <Camera style={{ flex: 1, marginTop: 30, marginBottom: 50, }} type={Camera.Constants.Type.front} ref={ref => {
          setCameraRef(ref) ;
        }}>
          <View
            style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'column-reverse',
          }}>
            <PhotoButton
              vibration={true}
              width={650}
              onPress={()=> takePicture()}
            />
          </View>
        </Camera>
      </View>
    </ImageBackground>
  );
}
