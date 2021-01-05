import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Form from '../screens/form';
import Picture from '../screens/picture';
import Signing from '../screens/signature';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Confirmation from '../screens/confirmation';
import Header from '../shared/header'
import Rules from '../screens/rules';


const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function HomeStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerTitle: props => <Header {...props} /> }}>
      <Stack.Screen name="Home" component={Home} options={{transitionSpec: {open:config, close:config}}}/>
      <Stack.Screen name="Form" component={Form} options={{transitionSpec: {open:config, close:config}}}/>
      <Stack.Screen name="Picture" component={Picture} options={{transitionSpec: {open:config, close:config}}}/>
      <Stack.Screen name="Rules" component={Rules} options={{transitionSpec: {open:config, close:config}}}/>
      <Stack.Screen name="Signature" component={Signing} options={{transitionSpec: {open:config, close:config}}}/>
      <Stack.Screen name="Confirmation" component={Confirmation} options={{transitionSpec: {open:config, close:config}}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

