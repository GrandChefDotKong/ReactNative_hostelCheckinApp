import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Vibration } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default class PhotoButton extends Component {

    handleOnPress(vibration, onPress) {
        if(vibration) {
            //Vibration.vibrate(300);
        }
        
        onPress();
    }

	render() {
        const { width, onPress, vibration  } = this.props;
        const styles = StyleSheet.create({
            container: {
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                marginBottom: 50,
            },
            opacity: {
                height: 55,
                width: 200,
                borderWidth: 2,
                borderColor: "#0c9",
                alignItems:'center',
                justifyContent:'center',
            },
        });

		return ( 
			<View style={styles.container} accessibilityRole='button'>
				<TouchableHighlight onPress={() => this.handleOnPress(vibration, onPress)} style={ styles.opacity } underlayColor="#00b386">
                    <MaterialIcons name="photo-camera" size={50} color="#0c9" />
                </TouchableHighlight>
			</View> 
		);
	}
}