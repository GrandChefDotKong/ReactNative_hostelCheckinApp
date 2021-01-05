import React, { useState } from 'react'
import HomeStack from './routes/homeStack'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'MPLUSRounded1c-regular': require('./assets/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf'),
  'MPLUSRounded1c-bold': require('./assets/M_PLUS_Rounded_1c/MPLUSRounded1c-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <HomeStack />
      //<Picture />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }
}


